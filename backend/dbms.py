import requests
import json

# Base URL
BASE_URL = "http://localhost:5000"

# Global variables to store tokens and IDs
candidate_token = None
employer_token = None
job_id = None
interview_id = None
instruction_id = None


def print_response(response, title):
    """Pretty print API response"""
    print(f"\n{'=' * 60}")
    print(f"✅ {title}")
    print(f"{'=' * 60}")
    print(f"Status Code: {response.status_code}")
    try:
        print(f"Response: {json.dumps(response.json(), indent=2)}")
    except:
        print(f"Response: {response.text}")


def test_health_check():
    """Test 1: Health Check"""
    try:
        response = requests.get(f"{BASE_URL}/api/health")
        print_response(response, "TEST 1: Health Check")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_candidate_signup():
    """Test 2: Candidate Signup"""
    try:
        data = {
            "full_name": "John Doe",
            "email": "john@test.com",
            "password": "pass123"
        }
        response = requests.post(f"{BASE_URL}/api/auth/candidate/signup", json=data)
        print_response(response, "TEST 2: Candidate Signup")
        if response.status_code == 201:
            global candidate_user_id
            candidate_user_id = response.json().get('user_id')
            print(f"Saved user_id: {candidate_user_id}")
        return response.status_code == 201
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_candidate_login():
    """Test 3: Candidate Login"""
    try:
        data = {
            "email": "john@test.com",
            "password": "pass123"
        }
        response = requests.post(f"{BASE_URL}/api/auth/candidate/login", json=data)
        print_response(response, "TEST 3: Candidate Login")
        if response.status_code == 200:
            global candidate_token
            candidate_token = response.json().get('token')
            print(f"✅ Token saved for candidate: {candidate_token[:20]}...")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_employer_signup():
    """Test 4: Employer Signup"""
    try:
        data = {
            "company_name": "Tech Solutions Inc",
            "email": "hr@techsolutions.com",
            "password": "employer123"
        }
        response = requests.post(f"{BASE_URL}/api/auth/employer/signup", json=data)
        print_response(response, "TEST 4: Employer Signup")
        if response.status_code == 201:
            global employer_user_id
            employer_user_id = response.json().get('employer_id')
            print(f"Saved employer_id: {employer_user_id}")
        return response.status_code == 201
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_employer_login():
    """Test 5: Employer Login"""
    try:
        data = {
            "email": "hr@techsolutions.com",
            "password": "employer123"
        }
        response = requests.post(f"{BASE_URL}/api/auth/employer/login", json=data)
        print_response(response, "TEST 5: Employer Login")
        if response.status_code == 200:
            global employer_token
            employer_token = response.json().get('token')
            print(f"✅ Token saved for employer: {employer_token[:20]}...")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_all_jobs():
    """Test 6: Get All Jobs"""
    try:
        response = requests.get(f"{BASE_URL}/api/jobs")
        print_response(response, "TEST 6: Get All Jobs")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_create_job():
    """Test 7: Create Job (Employer Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {employer_token}",
            "Content-Type": "application/json"
        }
        data = {
            "title": "Software Developer",
            "description": "Python developer with AI/ML experience",
            "location": "San Francisco, CA",
            "employment_type": "Full-time"
        }
        response = requests.post(f"{BASE_URL}/api/jobs", json=data, headers=headers)
        print_response(response, "TEST 7: Create Job")
        if response.status_code == 201:
            global job_id
            job_id = response.json().get('job_id')
            print(f"✅ Job created with ID: {job_id}")
        return response.status_code == 201
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_job():
    """Test 8: Get Specific Job"""
    try:
        response = requests.get(f"{BASE_URL}/api/jobs/{job_id}")
        print_response(response, "TEST 8: Get Specific Job")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_create_instructions():
    """Test 9: Create Job Instructions (Employer Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {employer_token}",
            "Content-Type": "application/json"
        }
        data = {
            "content": "Please introduce yourself and explain your Python programming experience. Discuss a recent project you worked on."
        }
        response = requests.post(f"{BASE_URL}/api/jobs/{job_id}/instructions", json=data, headers=headers)
        print_response(response, "TEST 9: Create Job Instructions")
        if response.status_code == 201:
            global instruction_id
            instruction_id = response.json().get('instruction_id')
            print(f"✅ Instructions created with ID: {instruction_id}")
        return response.status_code == 201
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_instructions():
    """Test 10: Get Job Instructions"""
    try:
        response = requests.get(f"{BASE_URL}/api/jobs/{job_id}/instructions")
        print_response(response, "TEST 10: Get Job Instructions")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_submit_interview():
    """Test 11: Submit Video Interview (Candidate Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {candidate_token}",
            "Content-Type": "application/json"
        }
        data = {
            "job_id": job_id,
            "video_url": "/uploads/interview_john_123.mp4",
            "duration_seconds": 240
        }
        response = requests.post(f"{BASE_URL}/api/interviews/submit", json=data, headers=headers)
        print_response(response, "TEST 11: Submit Video Interview")
        if response.status_code == 201:
            global interview_id
            interview_id = response.json().get('interview_id')
            print(f"✅ Interview submitted with ID: {interview_id}")
        return response.status_code == 201
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_job_interviews():
    """Test 12: Get Job Interviews (Employer Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {employer_token}",
            "Content-Type": "application/json"
        }
        response = requests.get(f"{BASE_URL}/api/jobs/{job_id}/interviews", headers=headers)
        print_response(response, "TEST 12: Get Job Interviews")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_update_feedback():
    """Test 13: Update Interview Feedback"""
    try:
        data = {
            "ai_score": 8.5,
            "sentiment": "positive",
            "confidence_score": 0.85,
            "key_skills": ["python", "machine learning", "communication"],
            "emotion_analysis": "confident",
            "recommendation": "Strong candidate - proceed to technical interview"
        }
        response = requests.post(f"{BASE_URL}/api/interviews/{interview_id}/feedback", json=data)
        print_response(response, "TEST 13: Update Interview Feedback")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_dashboard():
    """Test 14: Get Employer Dashboard (Employer Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {employer_token}",
            "Content-Type": "application/json"
        }
        response = requests.get(f"{BASE_URL}/api/employers/dashboard", headers=headers)
        print_response(response, "TEST 14: Get Employer Dashboard")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def test_get_ranked_candidates():
    """Test 15: Get Ranked Candidates (Employer Only)"""
    try:
        headers = {
            "Authorization": f"Bearer {employer_token}",
            "Content-Type": "application/json"
        }
        response = requests.get(f"{BASE_URL}/api/employers/analytics/candidates", headers=headers)
        print_response(response, "TEST 15: Get Ranked Candidates")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def run_all_tests():
    """Run all tests in sequence"""
    print("\n" + "=" * 60)
    print("🚀 STARTING API TEST SUITE")
    print("=" * 60)

    tests = [
        ("Health Check", test_health_check),
        ("Candidate Signup", test_candidate_signup),
        ("Candidate Login", test_candidate_login),
        ("Employer Signup", test_employer_signup),
        ("Employer Login", test_employer_login),
        ("Get All Jobs", test_get_all_jobs),
        ("Create Job", test_create_job),
        ("Get Specific Job", test_get_job),
        ("Create Instructions", test_create_instructions),
        ("Get Instructions", test_get_instructions),
        ("Submit Interview", test_submit_interview),
        ("Get Job Interviews", test_get_job_interviews),
        ("Update Feedback", test_update_feedback),
        ("Get Dashboard", test_get_dashboard),
        ("Get Ranked Candidates", test_get_ranked_candidates)
    ]

    results = []
    for test_name, test_func in tests:
        result = test_func()
        results.append((test_name, result))

    # Print Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    passed = sum(1 for _, result in results if result)
    total = len(results)

    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")

    print(f"\n📈 Total: {passed}/{total} tests passed")
    print("=" * 60)


if __name__ == "__main__":
    run_all_tests()