# User Registration System - MERN Stack

A full-stack user registration system built with the MERN stack (MongoDB, Express, React, Node.js) to enhance my skills in API integration and modern web development.

## Project Overview

This project is a comprehensive user registration system that demonstrates:
- User registration and management
- Email integration using Resend API
- Full MERN stack implementation
- RESTful API design
- Modern React frontend with Bootstrap styling

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Resend** - Email service integration
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - Frontend library
- **Bootstrap** - CSS framework
- **React Bootstrap** - React components for Bootstrap
- **Axios** - HTTP client for API calls

## Features

- User registration with email verification
- Email notifications using Resend API
- Responsive UI with Bootstrap
- RESTful API endpoints
- MongoDB database integration
- Environment-based configuration

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dehanf/Registration-system-MERN.git
cd Registration-system-MERN
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

4. Create a `.env` file in the root directory and add your environment variables:
```
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
PORT=5000
```

## Usage

1. Start the backend server:
```bash
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Access the application at `http://localhost:3000`

## API Endpoints

- `POST /api/register` - Register a new user
- Additional endpoints as per your implementation

## Learning Objectives

This project helped me:
- Understand API integration with third-party services (Resend)
- Master MERN stack development
- Implement secure user registration flows
- Work with MongoDB and Mongoose
- Use Axios for HTTP requests
- Build responsive UIs with React and Bootstrap

## Project Structure

```
.
├── controller/        # Business logic
├── model/            # Database models
├── routes/           # API routes
├── services/         # External services (email)
├── frontend/         # React frontend application
├── index.js          # Server entry point
└── .env             # Environment variables (not in repo)
```

## Contributing

This is a personal learning project. Feel free to fork and experiment!

## License

ISC

## Author

Dehan

---

**Note:** This project was created for educational purposes to enhance my skills in MERN stack development and API integration.
