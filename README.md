🧠 Quiz Management REST API

A secure, modular Quiz Management REST API built with Node.js, Express, MongoDB, and JWT Authentication.
This API allows authenticated users to create quizzes, manage questions and answers, submit quiz responses, and receive performance scores.

🔹 Frontend is not included — this API is designed to be consumed by any client (web or mobile).

🚀 Features
🔐 Authentication

User registration

User login

JWT-based protected routes

📝 Quiz Management

Create quizzes (title, description)

Update quizzes

Delete quizzes

Archive / unarchive quizzes

Fetch all quizzes created by the authenticated user

Fetch a single quiz with nested questions & answers

❓ Question Management

Add questions to a quiz

Optional help/description text

Allow single or multiple correct answers

Edit questions

Delete questions

✅ Answer Management

Add answers to questions

Mark correct answers

Enforce validation:

Single-choice → only one correct answer allowed

Multiple-choice → multiple correct answers allowed

Edit and delete answers

📊 Quiz Performance & Scoring

Submit quiz answers

Automatic evaluation

Returns:

correct_answers

total_questions

total_questions_answered

score_percentage

grade (A / B / C / D / F)

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcryptjs

dotenv

📁 Project Structure
quiz-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/quiz-api.git
cd quiz-api

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/quizdb
JWT_SECRET=your_jwt_secret

4️⃣ Run the server
npm run dev


Server will start at:

http://localhost:5000

🔐 Authentication Guide
Register

POST

/api/auth/register

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Login

POST

/api/auth/login

{
  "email": "john@example.com",
  "password": "password123"
}


Response:

{
  "token": "JWT_TOKEN_HERE"
}


Use this token in headers:

Authorization: Bearer JWT_TOKEN_HERE

📌 API Routes
Quiz Routes
Method	Endpoint	Description
POST	/api/quizzes	Create quiz
GET	/api/quizzes	Get my quizzes
GET	/api/quizzes/:id	Get single quiz
PUT	/api/quizzes/:id	Update quiz
DELETE	/api/quizzes/:id	Delete quiz
Question Routes
Method	Endpoint	Description
POST	/api/questions/:quizId	Add question
PUT	/api/questions/:id	Update question
DELETE	/api/questions/:id	Delete question
Answer Routes
Method	Endpoint	Description
POST	/api/answers/:questionId	Add answer
PUT	/api/answers/:id	Update answer
DELETE	/api/answers/:id	Delete answer
Submission Routes
Method	Endpoint	Description
POST	/api/submissions/:quizId	Submit quiz
❌ Error Handling Format

All errors follow this structure:

{
  "error": true,
  "message": "Quiz not found",
  "status": 404
}


Handled cases:

Invalid Object IDs

Missing required fields

Unauthorized access

Forbidden operations

Unknown routes

Server errors

🔒 Security & Permissions

JWT authentication on protected routes

Users can manage only their own quizzes

Questions and answers are restricted to quiz owners

Object ID validation

Proper HTTP status codes

🧠 Key Design Decisions
📂 Folder Structure

Separation of concerns (controllers, routes, models, middlewares)

Scalable and maintainable architecture

🔐 Middleware Usage

Authentication middleware for protected routes

Centralized error handling middleware

🔑 Permission Checks

Ownership checks at controller level

Prevents unauthorized access to resources

⚠️ Error Handling Strategy

Consistent JSON responses

Meaningful error messages

Central error middleware

🧪 Testing

API tested using Postman

Postman Collection included in repository

All routes tested with valid and invalid data

🌟 Bonus Features (Optional / Future Work)

Swagger API Documentation

Rate limiting

Pagination

Soft deletes

Quiz categories

Role-based access control (Admin/User)

📜 License

This project is for educational purposes.

✅ Author

Jerry Emmanuel
Backend Developer 🚀

If you want next, I can:

Generate the Postman collection

Add Swagger documentation

Polish this for school submission

Push everything to GitHub properly

Just say the word 👌