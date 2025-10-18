from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId

app = Flask(__name__)

# MongoDB Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/ai_interview"
mongo = PyMongo(app)

@app.route('/')
def home():
    return jsonify({"message": "AI Interview Backend is running with Flask & MongoDB"})

# ---------------- CREATE ----------------
@app.route('/candidates', methods=['POST'])
def add_candidate():
    data = request.json
    required_fields = ["name", "email", "skills", "experience"]

    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    candidate = {
        "name": data["name"],
        "email": data["email"],
        "skills": data["skills"],
        "experience": data["experience"]
    }
    inserted = mongo.db.candidates.insert_one(candidate)
    return jsonify({"message": "Candidate added successfully", "id": str(inserted.inserted_id)}), 201

# ---------------- READ ALL ----------------
@app.route('/candidates', methods=['GET'])
def get_candidates():
    candidates = []
    for c in mongo.db.candidates.find():
        candidates.append({
            "id": str(c["_id"]),
            "name": c["name"],
            "email": c["email"],
            "skills": c["skills"],
            "experience": c["experience"]
        })
    return jsonify(candidates)

# ---------------- READ ONE ----------------
@app.route('/candidates/<id>', methods=['GET'])
def get_candidate(id):
    try:
        candidate = mongo.db.candidates.find_one({"_id": ObjectId(id)})
    except:
        return jsonify({"error": "Invalid ID format"}), 400

    if not candidate:
        return jsonify({"error": "Candidate not found"}), 404

    return jsonify({
        "id": str(candidate["_id"]),
        "name": candidate["name"],
        "email": candidate["email"],
        "skills": candidate["skills"],
        "experience": candidate["experience"]
    })

# ---------------- UPDATE ----------------
@app.route('/candidates/<id>', methods=['PUT'])
def update_candidate(id):
    data = request.json
    update_data = {}

    # Only update provided fields
    for field in ["name", "email", "skills", "experience"]:
        if field in data:
            update_data[field] = data[field]

    if not update_data:
        return jsonify({"error": "No fields to update"}), 400

    try:
        result = mongo.db.candidates.update_one({"_id": ObjectId(id)}, {"$set": update_data})
    except:
        return jsonify({"error": "Invalid ID format"}), 400

    if result.matched_count == 0:
        return jsonify({"error": "Candidate not found"}), 404

    return jsonify({"message": "Candidate updated successfully"})

# ---------------- DELETE ----------------
@app.route('/candidates/<id>', methods=['DELETE'])
def delete_candidate(id):
    try:
        result = mongo.db.candidates.delete_one({"_id": ObjectId(id)})
    except:
        return jsonify({"error": "Invalid ID format"}), 400

    if result.deleted_count == 0:
        return jsonify({"error": "Candidate not found"}), 404

    return jsonify({"message": "Candidate deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)