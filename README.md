# Backend-Intern-Assignment

## Objective

Create a backend system for an assignment submission portal that allows users to upload assignments and admins to manage them by accepting or rejecting submissions.

## Table of Contents

1. [Scenario](#scenario)
2. [Requirements](#requirements)
   - [Database](#database)
   - [Structure and Functionality](#structure-and-functionality)
   - [Endpoints](#endpoints)
   - [Validation](#validation)
   - [User Management](#user-management)
   - [Modularity](#modularity)
3. [Deliverables](#deliverables)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Scenario

You are tasked with developing a backend system for an assignment submission portal. The system should support two types of users:

- **Users** can upload assignments.
- **Admins** can view, accept, or reject these assignments.

Example of an assignment object:

```json
{
    "userId": "Soumik",
    "task": "Hello World",
    "admin": "Alok"
}

## Requirements

**Database**
Use MongoDB as your database.
Structure and Functionality
Two types of users: Admin and User.

Users can:
   Register and log in.
   Upload assignments.
Admins can:
   Register and log in.
   View assignments tagged to them.
   Accept or reject assignments.

**Endpoints**
User Endpoints
POST /register - Register a new user.
POST /login - User login.
POST /upload - Upload an assignment.
GET /admins - Fetch all admins.
Admin Endpoints
POST /register - Register a new admin.
POST /login - Admin login.
GET /assignments - View assignments tagged to the admin.
POST /assignments/:id/accept - Accept an assignment.
POST /assignments/:id/reject - Reject an assignment.
Validation
Ensure all inputs are validated.
Provide proper error messages for invalid inputs.
User Management
Implement proper user management.
(Optional) Implement OAuth2 for user authentication.
Modularity
Ensure the code is modular and well-structured for readability and maintainability.
Deliverables
A fully functional backend system that meets the requirements.
Proper documentation on how to set up and run the system.
Clear and concise comments in your code for readability.
Setup and Installation
Clone the repository:

bash
Copy code
git clone <repository-link>
cd assignment-submission-portal
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file and configure your MongoDB connection string and any other required environment variables.
Run the application:

bash
Copy code
npm start
Usage
Use a tool like Postman or curl to interact with the API endpoints as described in the Endpoints section.
Ensure that you have the necessary authentication headers when making requests.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or fix.
Commit your changes.
Push to the branch and submit a pull request.



