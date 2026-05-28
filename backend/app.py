from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/portfolio", methods=["GET"])
def gayo_pius():
    data = {
        "name": "GAYO PIUS",
        "title": "Data Scientist | Software Developer",
        "profile": "A passionate data scientist with a strong focus on programming, software engineering, and building scalable systems. More interested in designing algorithms, writing efficient code, and integrating machine learning models into production than just analyzing datasets.",
        "skills": [
            "Python (Advanced)",
            "JavaScript & Node.js",
            "C++",
            "SQL & Database Design",
            "Machine Learning",
            "Deep Learning",
            "API Development (Flask, FastAPI)",
            "Version Control (Git/GitHub)",
            "Cloud Deployment (AWS, Render, Docker)"
        ],
        "qualifications": [
            "Bachelor Degree in Computer Science",
            "Certified Machine Learning Engineer",
            "Cloud Computing and DevOps Training",
            "Advanced Algorithms and Data Structures"
        ],
        "projects": [
            {
                "title": "Real-Time IoT Monitoring System",
                "description": "Developed a Flask + MQTT backend to simulate IoT devices, stream sensor data, and visualize metrics in real-time dashboards."
            },
            {
                "title": "Machine Learning Model Deployment",
                "description": "Built and deployed predictive models using Flask and FastAPI, containerized with Docker, and hosted on Render."
            },
            {
                "title": "Compiler Design Project",
                "description": "Implemented a mini-compiler in C++ with lexical analysis, parsing, and code generation modules."
            },
            {
                "title": "E-commerce Recommendation Engine",
                "description": "Created a recommendation system using collaborative filtering and deployed it as a REST API."
            }
        ],
        "contact": {
            "email": "gayopius.dev@gmail.com",
            "phone": "+255 712345678",
            "location": "Mbeya, Tanzania"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
