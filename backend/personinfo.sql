-- ============================================
-- AI INTERVIEW SYSTEM - DATABASE SCHEMA
-- Capstone Project - CORRECTED VERSION
-- ============================================

-- Drop database if exists and create fresh
DROP DATABASE IF EXISTS ai_interview_system;
CREATE DATABASE ai_interview_system;
USE ai_interview_system;

-- ============================================
-- TABLE 1: CANDIDATES
-- Stores basic candidate information
-- ============================================
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    experience INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_experience (experience)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE 2: SKILLS
-- Master list of all available skills
-- ============================================
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(50) NOT NULL UNIQUE,
    category VARCHAR(50) DEFAULT 'General',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_skill_name (skill_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE 3: CANDIDATE_SKILLS (Junction Table) - FIXED
-- Many-to-many relationship between candidates and skills
-- ============================================
CREATE TABLE candidate_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    skill_id INT NOT NULL,
    proficiency_level ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert') DEFAULT 'Intermediate',
    years_of_experience DECIMAL(3,1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_candidate_skill (candidate_id, skill_id),
    INDEX idx_candidate (candidate_id),
    INDEX idx_skill (skill_id),
    CONSTRAINT fk_candidate_skills_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_candidate_skills_skill FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE 4: INTERVIEW_FEEDBACK
-- Stores AI-generated interview analysis
-- ============================================
CREATE TABLE interview_feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    video_url VARCHAR(255),
    video_duration INT COMMENT 'Duration in seconds',
    ai_score DECIMAL(4,2) CHECK (ai_score >= 0 AND ai_score <= 10),
    sentiment VARCHAR(50),
    confidence_score DECIMAL(4,2) CHECK (confidence_score >= 0 AND confidence_score <= 1),
    key_skills TEXT,
    emotion_analysis VARCHAR(100),
    body_language_score DECIMAL(4,2),
    communication_score DECIMAL(4,2),
    technical_score DECIMAL(4,2),
    recommendation TEXT,
    status ENUM('pending', 'reviewed', 'shortlisted', 'rejected') DEFAULT 'pending',
    interview_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP NULL,
    INDEX idx_candidate_feedback (candidate_id),
    INDEX idx_status (status),
    INDEX idx_ai_score (ai_score),
    CONSTRAINT fk_interview_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE 5: JOBS (Optional - for future expansion)
-- Job postings information
-- ============================================
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    employment_type ENUM('Full-time', 'Part-time', 'Contract', 'Internship') DEFAULT 'Full-time',
    salary_range VARCHAR(50),
    required_experience INT,
    status ENUM('active', 'closed', 'draft') DEFAULT 'active',
    posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    closing_date DATE,
    INDEX idx_status (status),
    INDEX idx_title (title)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE 6: JOB_APPLICATIONS (Optional)
-- Tracks which candidates applied for which jobs
-- ============================================
CREATE TABLE job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    candidate_id INT NOT NULL,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('applied', 'screening', 'interview', 'offered', 'rejected', 'withdrawn') DEFAULT 'applied',
    notes TEXT,
    UNIQUE KEY unique_application (job_id, candidate_id),
    INDEX idx_job (job_id),
    INDEX idx_candidate (candidate_id),
    INDEX idx_status (status),
    CONSTRAINT fk_application_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_application_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT SAMPLE DATA - SKILLS
-- ============================================
INSERT INTO skills (skill_name, category) VALUES
-- Programming Languages
('Python', 'Programming'),
('Java', 'Programming'),
('JavaScript', 'Programming'),
('C++', 'Programming'),
('C#', 'Programming'),
('Ruby', 'Programming'),
('PHP', 'Programming'),
('Go', 'Programming'),
('Swift', 'Programming'),
('Kotlin', 'Programming'),

-- Web Technologies
('HTML', 'Web Development'),
('CSS', 'Web Development'),
('React', 'Web Development'),
('Angular', 'Web Development'),
('Vue.js', 'Web Development'),
('Node.js', 'Web Development'),
('Express.js', 'Web Development'),
('Django', 'Web Development'),
('Flask', 'Web Development'),
('Spring Boot', 'Web Development'),

-- Databases
('MySQL', 'Database'),
('PostgreSQL', 'Database'),
('MongoDB', 'Database'),
('Oracle', 'Database'),
('SQL Server', 'Database'),
('Redis', 'Database'),
('Cassandra', 'Database'),

-- Data Science & AI
('Machine Learning', 'AI/ML'),
('Deep Learning', 'AI/ML'),
('Data Science', 'AI/ML'),
('TensorFlow', 'AI/ML'),
('PyTorch', 'AI/ML'),
('Scikit-learn', 'AI/ML'),
('NLP', 'AI/ML'),
('Computer Vision', 'AI/ML'),

-- Cloud & DevOps
('AWS', 'Cloud'),
('Azure', 'Cloud'),
('Google Cloud', 'Cloud'),
('Docker', 'DevOps'),
('Kubernetes', 'DevOps'),
('CI/CD', 'DevOps'),
('Jenkins', 'DevOps'),
('Git', 'DevOps'),

-- Soft Skills
('Communication', 'Soft Skills'),
('Leadership', 'Soft Skills'),
('Problem Solving', 'Soft Skills'),
('Team Work', 'Soft Skills'),
('Time Management', 'Soft Skills');

-- ============================================
-- INSERT SAMPLE DATA - CANDIDATES
-- ============================================
INSERT INTO candidates (name, email, phone, experience) VALUES
('John Doe', 'john.doe@example.com', '+1-555-0101', 5),
('Jane Smith', 'jane.smith@example.com', '+1-555-0102', 3),
('Robert Johnson', 'robert.j@example.com', '+1-555-0103', 7),
('Emily Davis', 'emily.davis@example.com', '+1-555-0104', 2),
('Michael Brown', 'michael.b@example.com', '+1-555-0105', 4),
('Sarah Wilson', 'sarah.w@example.com', '+1-555-0106', 6),
('David Lee', 'david.lee@example.com', '+1-555-0107', 8),
('Lisa Anderson', 'lisa.a@example.com', '+1-555-0108', 1),
('James Taylor', 'james.t@example.com', '+1-555-0109', 5),
('Maria Garcia', 'maria.g@example.com', '+1-555-0110', 3);

-- ============================================
-- INSERT SAMPLE DATA - CANDIDATE SKILLS
-- ============================================
-- John Doe's Skills (Full Stack Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(1, 1, 'Expert', 5.0),      -- Python
(1, 3, 'Advanced', 4.0),    -- JavaScript
(1, 13, 'Advanced', 4.5),   -- React
(1, 21, 'Advanced', 3.0),   -- MySQL
(1, 19, 'Intermediate', 3.0); -- Flask

-- Jane Smith's Skills (Data Scientist)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(2, 1, 'Advanced', 3.0),    -- Python
(2, 29, 'Advanced', 2.5),   -- Machine Learning
(2, 31, 'Intermediate', 2.0), -- Data Science
(2, 32, 'Intermediate', 1.5), -- TensorFlow
(2, 23, 'Advanced', 3.0);   -- MongoDB

-- Robert Johnson's Skills (Senior Java Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(3, 2, 'Expert', 7.0),      -- Java
(3, 20, 'Expert', 6.0),     -- Spring Boot
(3, 21, 'Advanced', 5.0),   -- MySQL
(3, 39, 'Advanced', 4.0),   -- Docker
(3, 40, 'Intermediate', 3.0); -- Kubernetes

-- Emily Davis's Skills (Frontend Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(4, 11, 'Advanced', 2.0),   -- HTML
(4, 12, 'Advanced', 2.0),   -- CSS
(4, 3, 'Intermediate', 1.5), -- JavaScript
(4, 13, 'Intermediate', 1.5), -- React
(4, 15, 'Beginner', 0.5);   -- Vue.js

-- Michael Brown's Skills (DevOps Engineer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(5, 37, 'Advanced', 4.0),   -- AWS
(5, 39, 'Expert', 4.0),     -- Docker
(5, 40, 'Advanced', 3.0),   -- Kubernetes
(5, 42, 'Advanced', 3.5),   -- Jenkins
(5, 43, 'Expert', 4.0);     -- Git

-- Sarah Wilson's Skills (Backend Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(6, 1, 'Expert', 6.0),      -- Python
(6, 18, 'Advanced', 5.0),   -- Django
(6, 22, 'Advanced', 4.0),   -- PostgreSQL
(6, 37, 'Intermediate', 2.0); -- AWS

-- David Lee's Skills (Mobile Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(7, 9, 'Expert', 7.0),      -- Swift
(7, 10, 'Advanced', 5.0),   -- Kotlin
(7, 3, 'Advanced', 6.0);    -- JavaScript

-- Lisa Anderson's Skills (Junior Developer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(8, 11, 'Intermediate', 1.0), -- HTML
(8, 12, 'Intermediate', 1.0), -- CSS
(8, 3, 'Beginner', 0.5);    -- JavaScript

-- James Taylor's Skills (Cloud Architect)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(9, 37, 'Expert', 5.0),     -- AWS
(9, 38, 'Advanced', 3.0),   -- Azure
(9, 39, 'Expert', 4.0),     -- Docker
(9, 40, 'Expert', 4.0);     -- Kubernetes

-- Maria Garcia's Skills (AI Engineer)
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_of_experience) VALUES
(10, 1, 'Advanced', 3.0),   -- Python
(10, 29, 'Advanced', 2.5),  -- Machine Learning
(10, 30, 'Intermediate', 2.0), -- Deep Learning
(10, 35, 'Intermediate', 1.5); -- NLP

-- ============================================
-- INSERT SAMPLE DATA - JOBS
-- ============================================
INSERT INTO jobs (title, description, location, employment_type, salary_range, required_experience, status, closing_date) VALUES
('Senior Python Developer', 'Looking for experienced Python developer with Flask/Django experience', 'San Francisco, CA', 'Full-time', '$120k-$150k', 5, 'active', '2025-12-31'),
('Data Scientist', 'Join our AI team to build machine learning models', 'New York, NY', 'Full-time', '$100k-$130k', 3, 'active', '2025-11-30'),
('Frontend Developer', 'React expert needed for our web application', 'Remote', 'Full-time', '$80k-$110k', 2, 'active', '2025-12-15'),
('DevOps Engineer', 'Manage our cloud infrastructure and CI/CD pipelines', 'Austin, TX', 'Full-time', '$110k-$140k', 4, 'active', '2025-12-20'),
('Java Backend Developer', 'Spring Boot developer for enterprise applications', 'Boston, MA', 'Full-time', '$100k-$130k', 5, 'active', '2025-11-25');

-- ============================================
-- INSERT SAMPLE DATA - JOB APPLICATIONS
-- ============================================
INSERT INTO job_applications (job_id, candidate_id, status, notes) VALUES
(1, 1, 'interview', 'Strong Python background'),
(2, 2, 'screening', 'Good ML portfolio'),
(3, 4, 'interview', 'Excellent React skills'),
(4, 5, 'screening', 'DevOps experience matches requirements'),
(5, 3, 'offered', 'Perfect fit for senior Java role');

-- ============================================
-- INSERT SAMPLE DATA - INTERVIEW FEEDBACK
-- ============================================
INSERT INTO interview_feedback (
    candidate_id, video_url, video_duration, ai_score, sentiment,
    confidence_score, key_skills, emotion_analysis, body_language_score,
    communication_score, technical_score, recommendation, status
) VALUES
(1, '/videos/john_doe_interview.mp4', 1200, 8.7, 'Positive', 0.89,
 'Python, Problem Solving, Communication', 'Confident and Professional',
 8.5, 9.0, 8.8, 'Strong candidate with excellent technical skills and communication. Recommend for next round.', 'shortlisted'),

(2, '/videos/jane_smith_interview.mp4', 900, 8.2, 'Positive', 0.85,
 'Machine Learning, Data Analysis, Python', 'Enthusiastic and Knowledgeable',
 7.8, 8.5, 8.9, 'Solid technical foundation in ML. Needs improvement in communication but shows great potential.', 'shortlisted'),

(3, '/videos/robert_johnson_interview.mp4', 1500, 9.1, 'Very Positive', 0.92,
 'Java, Spring Boot, System Design, Leadership', 'Highly Confident and Experienced',
 9.0, 9.5, 9.2, 'Exceptional candidate with senior-level expertise. Strong recommendation for hire.', 'shortlisted'),

(4, '/videos/emily_davis_interview.mp4', 800, 7.5, 'Neutral', 0.75,
 'React, HTML, CSS, UI Design', 'Somewhat Nervous but Knowledgeable',
 7.0, 7.2, 8.0, 'Good technical skills but lacked confidence. Consider for junior position.', 'reviewed'),

(5, '/videos/michael_brown_interview.mp4', 1100, 8.5, 'Positive', 0.88,
 'AWS, Docker, Kubernetes, CI/CD', 'Professional and Detail-oriented',
 8.2, 8.7, 8.6, 'Strong DevOps knowledge with practical experience. Good fit for the role.', 'shortlisted');

-- ============================================
-- USEFUL QUERIES FOR TESTING
-- ============================================

-- Query 1: Get all candidates with their skills
SELECT
    c.id,
    c.name,
    c.email,
    c.experience,
    GROUP_CONCAT(CONCAT(s.skill_name, ' (', cs.proficiency_level, ')') SEPARATOR ', ') AS skills
FROM candidates c
LEFT JOIN candidate_skills cs ON c.id = cs.candidate_id
LEFT JOIN skills s ON cs.skill_id = s.id
GROUP BY c.id, c.name, c.email, c.experience;

-- Query 2: Get candidates with interview feedback
SELECT
    c.name,
    c.email,
    i.ai_score,
    i.sentiment,
    i.recommendation,
    i.status
FROM candidates c
JOIN interview_feedback i ON c.id = i.candidate_id
ORDER BY i.ai_score DESC;

-- Query 3: Find candidates by specific skill
SELECT
    c.name,
    c.email,
    c.experience,
    cs.proficiency_level
FROM candidates c
JOIN candidate_skills cs ON c.id = cs.candidate_id
JOIN skills s ON cs.skill_id = s.id
WHERE s.skill_name = 'Python';

-- Query 4: Get top-rated candidates
SELECT
    c.name,
    c.email,
    i.ai_score,
    i.sentiment,
    i.status
FROM candidates c
JOIN interview_feedback i ON c.id = i.candidate_id
WHERE i.ai_score >= 8.0
ORDER BY i.ai_score DESC;

-- Query 5: Count candidates by skill category
SELECT
    s.category,
    COUNT(DISTINCT cs.candidate_id) AS candidate_count
FROM skills s
JOIN candidate_skills cs ON s.id = cs.skill_id
GROUP BY s.category
ORDER BY candidate_count DESC;

-- Query 6: Get job applications with candidate details
SELECT
    j.title AS job_title,
    c.name AS candidate_name,
    c.email,
    c.experience,
    ja.status,
    ja.application_date
FROM job_applications ja
JOIN jobs j ON ja.job_id = j.id
JOIN candidates c ON ja.candidate_id = c.id
ORDER BY ja.application_date DESC;

-- Query 7: Candidates without interview feedback
SELECT
    c.id,
    c.name,
    c.email,
    c.experience
FROM candidates c
LEFT JOIN interview_feedback i ON c.id = i.candidate_id
WHERE i.id IS NULL;

-- Query 8: Average scores by experience level
SELECT
    CASE
        WHEN c.experience <= 2 THEN 'Junior (0-2 years)'
        WHEN c.experience <= 5 THEN 'Mid-level (3-5 years)'
        ELSE 'Senior (6+ years)'
    END AS experience_level,
    COUNT(*) AS candidate_count,
    AVG(i.ai_score) AS avg_score,
    AVG(i.communication_score) AS avg_communication,
    AVG(i.technical_score) AS avg_technical
FROM candidates c
JOIN interview_feedback i ON c.id = i.candidate_id
GROUP BY experience_level
ORDER BY avg_score DESC;

-- ============================================
-- VERIFY SETUP
-- ============================================

-- Show all tables
SHOW TABLES;

-- Show table counts
SELECT 'Candidates' AS Table_Name, COUNT(*) AS Record_Count FROM candidates
UNION ALL
SELECT 'Skills', COUNT(*) FROM skills
UNION ALL
SELECT 'Candidate Skills', COUNT(*) FROM candidate_skills
UNION ALL
SELECT 'Interview Feedback', COUNT(*) FROM interview_feedback
UNION ALL
SELECT 'Jobs', COUNT(*) FROM jobs
UNION ALL
SELECT 'Job Applications', COUNT(*) FROM job_applications;

SELECT 'Database setup completed successfully!' AS Status;