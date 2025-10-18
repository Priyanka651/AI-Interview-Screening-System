import requests

BASE_URL = "http://127.0.0.1:5000/candidates"

# Add candidate
print("Adding candidate...")
r = requests.post(BASE_URL, json={
    "name": "John Doe",
    "email": "john@example.com",
    "skills": ["Python", "MongoDB"],
    "experience": 3
})
print(r.json())
candidate_id = r.json()['id']

# Get all
print("\nGetting all candidates...")
print(requests.get(BASE_URL).json())

# Get single
print(f"\nGetting candidate {candidate_id}...")
print(requests.get(f"{BASE_URL}/{candidate_id}").json())

# Update
print(f"\nUpdating candidate {candidate_id}...")
print(requests.put(f"{BASE_URL}/{candidate_id}", json={"experience": 5}).json())

# Get updated candidate
print(f"\nGetting updated candidate...")
print(requests.get(f"{BASE_URL}/{candidate_id}").json())

# Delete
print(f"\nDeleting candidate {candidate_id}...")
print(requests.delete(f"{BASE_URL}/{candidate_id}").json())

print("\nAll tests completed!")