# Kritek React Test

This repository contains a simple CRUD application built with React and JSON server. It allows users to view, create, update, and delete user data.

## Files

- `App.js`: The main component of the React application. Handles routing and renders different components based on the current URL.

- `index.js`: The entry point of the React application. Renders the `App` component and mounts it to the DOM.

- `components/UserList.js`: Displays a list of users fetched from the API. Uses the `useQuery` hook from `react-query` to handle data fetching and loading/error states.

- `components/UserForm.js`: Used for creating and updating user data. Utilizes the `useMutation` hook from `react-query` to handle API requests for creating and updating users.

- `components/User.js`: Represents an individual user in the list. Displays user information and provides buttons for editing and deleting the user.

- `services/api.js`: Contains helper functions for making API requests. Uses the `axios` library to send HTTP requests to the JSON server API endpoints.

- `db.json`: Serves as the data source for the JSON server. Contains an array of user objects that the API endpoints interact with.

## Installation

1. Clone the repository: `git clone https://github.com/ntwaliandy/kritek-react-test.git`
2. Install dependencies: `npm install`
3. Start the JSON server: `json-server --watch db.json`
4. Start the React application: `npm start`

Make sure the JSON server is running on `http://localhost:3000/users` for the application to fetch user data correctly.

## Usage

- Access the application at `http://localhost:3000`.
- The user list will be displayed, showing the existing users.
- Use the form to create a new user or click on the edit button to update an existing user.
- Click on the delete button to remove a user from the list.

Feel free to explore and interact with the application!

## Credits

This project was created by Ntwali Andrew. For more information, contact ntwaliandy90@gmail.com.
