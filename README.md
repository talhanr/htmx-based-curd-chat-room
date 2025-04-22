# HTML-based CRUD Chat Rooms

## Overview

This project is a simple HTML-based CRUD Chat Rooms application that allows users to create, edit, delete, and join chat rooms. It is built using vanilla JavaScript, HTMX, and Jest for testing.

## Features

- **Create Chat Rooms**: Users can create new chat rooms.
- **Edit Chat Rooms**: Owners can edit their chat rooms.
- **Delete Chat Rooms**: Owners can delete their chat rooms.
- **Join Chat Rooms**: Users can join existing chat rooms.
- **Dynamic UI Updates**: Powered by HTMX for seamless updates.
- **Unit Testing**: Jest is used for testing the application.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Python** (optional, for running a local server)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/talhanr/htmx-based-curd-chat-room
   cd htmx-based-curd-chat-room
   ```

Install Dependencies:

bash
Copy
npm install
Running the Application
Start the server: npm start

Running Tests
This project uses Jest for unit testing. To run the tests:

npm test
You should see output indicating whether the tests passed or failed.

Project Structure
/src: Contains the main application logic.

/tests: Contains unit tests for the application.

/node_modules: Contains all the dependencies installed via npm.

Key Dependencies
http-server: Lightweight HTTP server for serving the app.

@testing-library/jest-dom: Provides custom DOM matchers for Jest.

jest: JavaScript testing framework.

babel-jest: Babel integration for Jest.

@babel/preset-env: Babel preset for modern JavaScript.

Troubleshooting
Common Issues
CORS Errors:

Ensure you are running the app using a local server (e.g., http-server or Python's HTTP server).

Author
Talha Nazir
GitHub: talhanr
Email: talhanazir410@gmail.com
