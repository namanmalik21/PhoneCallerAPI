# PhoneCaller API using Node.js, Express.js, and SQLite

The PhoneCaller API is a RESTful service providing functionalities to retrieve user details such as name and email address through search services. Additionally, it enables users to flag specific phone numbers as spam if desired.

### Prerequisites

- Node.js should be installed on your machine.

### Installation

1. Clone this repository and Start Server:

   ```bash
   git clone https://github.com/namanmalik21/PhoneCallerAPI
   cd PhoneCallerAPi
   node server.js

## Technology Stack

- Language/Framework: JavaScript with Node.js and Express.js
- Database: SQLite

## PostMan Testing Screenshots
![ScreenShot 1](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/161cbc89-9ebe-458f-9652-8abf9523903a)

![Screenshot 2](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/b89f965a-ca27-4603-b8a2-729b1e17f9c6)

![Screenshot (3](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/5efe7492-a8c9-40d3-b153-e87da3ab238d)

![Screenshot 4](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/3fa385b0-b932-4dba-9f2e-fb3f9185740b)

![Screenshot 5](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/ce354f65-7b95-42b0-84ce-871948f34246)

![Screenshot 6](https://github.com/namanmalik21/PhoneCallerAPI/assets/86871188/416610cc-7310-46a7-9ae8-bcaf8916e246)

## Steps to Create the API

### Setup Node.js and Express.js

1. Install Node.js and initialize a new Express.js project.
2. Set up necessary dependencies like `express`, `sqlite3`, `body-parser`, etc.
3. Create the project structure and set up the initial server.

### Design API Endpoints

- Define RESTful API endpoints for registration, login, marking numbers as spam, and search functionalities.
- Implement various HTTP methods (GET, POST) for different endpoints to handle respective actions.
- Design endpoints for searching by name and phone number, allowing users to query the database.

### Implement SQLite Database Operations

- Use SQLite for storing user information, including name, phone number, and email.
- Create tables and manage relationships to handle personal contacts for each user.

### Authentication and User Management

- Implement user registration and login functionalities.
- Manage authentication using middleware or token-based authentication for securing endpoints.

### Spam Functionality

- Enable users to mark numbers as spam.
- Develop logic to calculate and display spam likelihood for numbers based on user input.

### Search Functionality

- Create search functionalities allowing users to search by name or phone number.
- Return search results with details like name, phone number, and spam likelihood.

### Data Population Script

- Create a script to populate the SQLite database with sample data for testing purposes.
- Generate random user profiles, contacts, and spam numbers to simulate real-world scenarios.

### Testing and Documentation

- Thoroughly test each API endpoint using tools like Postman to ensure proper functionality.
- Document the API endpoints, request parameters, and responses in the README file.
- Provide clear instructions on running the server and accessing the API endpoints using Postman or any API testing tool.   
