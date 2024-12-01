# Simple REST API with Express.js

A basic REST API implementation using Express.js that handles user management operations.

## Description

This project demonstrates a simple REST API built with Express.js that provides endpoints for managing users. It includes basic CRUD operations with a focus on retrieving and creating user data.

## Features

- GET endpoint to retrieve all users
- POST endpoint to create new users
- JSON request/response format
- Express middleware for parsing JSON bodies

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/PammeC/REST-API_Node.git
```

2. Navigate to the project directory:
```bash
cd REST-API_Node
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node REST-API.js
```

2. The server will start running on port 3000. You can access the API at `http://localhost:3000`

## API Endpoints

### Get all users
```
GET /api/users
```
Returns a list of all users.

### Create new user
```
POST /api/users
```
Creates a new user. Request body should contain user data in JSON format.

