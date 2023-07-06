# Probleme Solved By Farhad Rahmani 
## Full Stack Developer 
GitHub repository to provide detailed instructions for setting up and running the MERN application with CRUD operations for the users table and profile image uploading:

````
# MERN Application with CRUD Operations and Profile Image Uploading

This is a sample MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates CRUD operations on a users table and includes functionality for profile image uploading. It provides a basic starting point for building similar applications.

## Prerequisites

Before running this application, ensure that you have the following software installed on your machine:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone [<repository_url>](https://github.com/rouckay/MERN-CRUD-For-JOB.git)
````

2. Navigate to the project directory:

```bash
cd MERN-CRUD-For-JOB
```

3. Install the dependencies for both the server and the client:

```bash
npm install
cd client
npm install
cd ..
```

4. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```
     PORT=<server_port>
     DB_CONNECTION=<mongodb_connection_string>
     ```

5. Start the development servers:

- To start the server, run the following command from the root directory:

  ```bash
  npm run server
  ```

- To start the client, open a new terminal window/tab, navigate to the root directory, and run the following command:

  ```bash
  npm run client
  ```

6. Access the application:

- Open your browser and navigate to `http://localhost:3000` to access the React client.

## API Routes

The following API routes are available:

- `GET /`: Fetch all post.
- `POST /`: Create a new post.
- `GET /:id`: Fetch a specific post by ID.
- `PUT /:id`: Update a specific post by ID.
- `DELETE /:id`: Delete a specific post by ID.

## Directory Structure

The repository structure is as follows:

```
mern-crud-users-profile-image/
  ├── client/             # React client application
  ├── controllers/        # Controllers for handling API requests
  ├── models/             # Mongoose models
  ├── routes/             # API routes definitions
  ├── server.js           # Express server configuration
  └── .env                # Environment variables
```

## Customization and Extension

You can customize and extend this application based on your specific requirements. Some possible enhancements include:

- Adding additional fields to the User model.
- Implementing authentication and authorization.
- Enhancing the UI with more features, validation, or error handling.

Feel free to explore and modify the codebase to suit your needs.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

```

Feel free to adapt and modify the above README file based on your specific application's details and requirements.
```
