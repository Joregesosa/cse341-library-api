# Biblioteca API

## Overview
Biblioteca API is a RESTful API designed for managing a library of books, user accounts, and their favorite books. It provides endpoints for user authentication, book management, and tracking user-specific reading history.

## Features
- User authentication (registration and login)
- Book management (create, update, retrieve)
- User-specific book tracking
- Management of favorite books

## Project Structure
```
biblioteca-api/
├── config/                # Configuration files
│   ├── db.js             # Database configuration
│   └── jwt.js            # JWT configuration
├── controllers/           # Controller files for handling requests
│   ├── auth.controller.js
│   ├── book.controller.js
│   ├── userBook.controller.js
│   └── favorite.controller.js
├── models/                # Database models
│   ├── User.js
│   ├── Book.js
│   ├── UserBook.js
│   └── FavoriteList.js
├── routes/                # Route definitions
│   ├── auth.routes.js
│   ├── book.routes.js
│   ├── userBook.routes.js
│   ├── favorite.routes.js
│   └── index.js
├── middlewares/           # Middleware functions
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validate.middleware.js
├── validators/            # Validation schemas
│   ├── auth.schema.js
│   ├── book.schema.js
│   ├── userBook.schema.js
│   └── favorite.schema.js
├── utils/                 # Utility functions
│   └── helpers.js
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in version control
├── app.js                 # Main application file
├── server.js              # Server startup file
└── package.json           # Project metadata and dependencies
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd biblioteca-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and configure your environment variables.

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Books**
  - `GET /api/books` - Retrieve all books
  - `POST /api/books` - Create a new book
  - `PUT /api/books/:id` - Update a book
  - `DELETE /api/books/:id` - Delete a book

- **User Books**
  - `GET /api/userBooks` - Retrieve user-specific books
  - `POST /api/userBooks` - Track a new user book

- **Favorites**
  - `GET /api/favorites` - Retrieve user's favorite books
  - `POST /api/favorites` - Add a book to favorites
  - `DELETE /api/favorites/:id` - Remove a book from favorites

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.