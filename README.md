# Chat Application

A real-time chat application built with React, Tailwind CSS, Node.js, Express, MongoDB, and Socket.IO. This application allows users to register, login, and chat with other users. It includes features like user authentication, real-time messaging, and profile picture uploads.

## Features

- User Authentication (Registration, Login, Logout)
- Real-time messaging using Socket.IO
- User profile with picture upload
- Display list of users
- Search functionality to filter users
- Chat history persistence

## Technologies Used

### Frontend

- React
- Tailwind CSS
- React Icons
- DaisyUI

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Socket.IO
- bcrypt for password hashing
- AWS S3 for image storage

### Other Tools

- Axios for API requests
- react-hot-toast for notifications

## API Endpoints

### Authentication

- **POST /api/auth/register**

  - Description: Register a new user
  - Request Body: `{ "username": "example", "password": "password", "confirmPassword": "password", "picture": "optional-url" }`
  - Response: `{ "message": "User created successfully", "username": "example", "picture": "optional-url" }`

- **POST /api/auth/login**

  - Description: Authenticate user and generate token
  - Request Body: `{ "username": "example", "password": "password" }`
  - Response: `{ "token": "generated-token" }`

- **POST /api/auth/logout**
  - Description: Log out currently authenticated user
  - Authorization: Bearer Token

### Users

- **GET /api/users**
  - Description: Get list of users
  - Response: `[ { "username": "example", "picture": "optional-url" }, ... ]`

### Messages

- **GET /api/messages/:id**

  - Description: Get messages between logged-in user and user with :id
  - Authorization: Bearer Token
  - Response: `[ { "senderId": "sender-id", "receiverId": "receiver-id", "message": "message-content", "timestamp": "timestamp" }, ... ]`

- **POST /api/messages/:id**
  - Description: Send a message to user with :id
  - Authorization: Bearer Token
  - Request Body: `{ "message": "message-content" }`
  - Response: `{ "senderId": "sender-id", "receiverId": "receiver-id", "message": "message-content", "timestamp": "timestamp" }`

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database setup

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/chat-application.git

   ```

   2. **Install Dependencies**

   ```sh
   cd chat-application
   npm run build
   ```

   3. **Set Up Enviornmental Variables**

   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Running the App

1. **Run the Command**

   ```sh
   npm start

   ```

### Acknowledgements

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js** - JavaScript runtime environment
- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **MongoDB** - NoSQL database program
- **Mongoose** - MongoDB object modeling for Node.js
- **Socket.IO** - Real-time, bidirectional, event-based communication library
- **bcrypt** - Password hashing function
- **react-icons** - Popular icon library for React
- **DaisyUI** - Component library for Tailwind CSS
- **axios** - Promise-based HTTP client for the browser and Node.js
- **react-hot-toast** - React notifications library
- **As a Programmer** - Learned socket.io, solidified context concepts, file structure/setup

These technologies and libraries have been instrumental in building and enhancing the functionality of this chat application.
