import os
import zipfile

# Folder and file paths
project_folder = "AI-based-interview"
os.makedirs(project_folder, exist_ok=True)

# --- app.py content ---
app_py = """from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/ai_interview"
mongo = PyMongo(app)

@app.route('/')
def home():
    return jsonify({"message": "AI Interview Backend is running with Flask & MongoDB"})

@app.route('/candidates', methods=['POST'])
def add_candidate():
    data = request.json
    candidate = {
        "name": data.get("name"),
        "email": data.get("email"),
        "skills": data.get("skills"),
        "experience": data.get("experience")
    }
    inserted = mongo.db.candidates.insert_one(candidate)
    return jsonify({"message": "Candidate added successfully", "id": str(inserted.inserted_id)})

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

if __name__ == '__main__':
    app.run(debug=True)
"""

# --- test_api.py content ---
test_api_py = """import requests

BASE_URL = "http://127.0.0.1:5000/candidates"

candidates = [
    {"name": "Alice", "email": "alice@example.com", "skills": ["Python", "SQL"], "experience": 3},
    {"name": "Bob", "email": "bob@example.com", "skills": ["Java", "AI"], "experience": 5},
    {"name": "Charlie", "email": "charlie@example.com", "skills": ["C++", "ML"], "experience": 2}
]

for c in candidates:
    res = requests.post(BASE_URL, json=c)
    print("POST Response:", res.json())

res = requests.get(BASE_URL)
print("\\nGET Response:", res.json())
"""

# --- README.txt content ---
readme_txt = """AI-based-interview Setup Instructions

1. Open PyCharm and select 'Open' -> choose this folder.

2. Install dependencies via terminal:
   pip install flask flask-pymongo requests

3. Make sure MongoDB is running locally:
   mongod

4. Run the backend first:
   Run 'app.py'

5. In another run configuration or terminal, run the client tester:
   Run 'test_api.py'
"""

# Write the files
with open(os.path.join(project_folder, "app.py"), "w") as f:
    f.write(app_py)

with open(os.path.join(project_folder, "test_api.py"), "w") as f:
    f.write(test_api_py)

with open(os.path.join(project_folder, "README.txt"), "w") as f:
    f.write(readme_txt)

# Optional: create zip
zip_name = "AI-based-interview.zip"
with zipfile.ZipFile(zip_name, 'w') as zipf:
    for filename in ["app.py", "test_api.py", "README.txt"]:
        zipf.write(os.path.join(project_folder, filename), arcname=f"{project_folder}/{filename}")

print(f"Project created! Folder: '{project_folder}', Zip: '{zip_name}'")
