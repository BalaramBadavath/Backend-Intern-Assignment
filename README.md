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
