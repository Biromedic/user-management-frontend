# User Management System

A full-stack application built with Next.js (frontend) and Go (backend) for managing users. This project includes features like adding, editing, deleting, and viewing users, along with a responsive UI powered by Material-UI (MUI).

---

## Features

- **View Users**: Display a list of users in a table with pagination.
- **Add User**: Add a new user with name and email.
- **Edit User**: Update an existing user's details.
- **Delete User**: Remove a user from the system.
- **Responsive UI**: Built with Material-UI for a clean and responsive design.
- **API Integration**: Connects to a backend API for CRUD operations.

---

## Technologies Used

- **Frontend**:
  - Next.js (React framework)
  - Material-UI (MUI) for UI components
  - Axios for API requests
- **Backend**:
  - Go (Golang)
  - SQLite for database
  - Gorilla Mux for routing
- **Other Tools**:
  - Swagger for API documentation
  - TypeScript for type safety

---

## Project Structure

### Frontend (Next.js)

```
src/
├── app/
│   ├── layout.tsx             # Main layout with theme and navbar
│   ├── page.tsx               # Home page with navigation buttons
│   ├── services/
│   │   └── userService.tsx    # API service for user operations
│   ├── users/
│   │   ├── page.tsx           # User list page
│   │   ├── [id]/
│   │   │   └── page.tsx       # Edit user page
│   │   ├── add-user/
│   │   │   └── page.tsx       # Add user page
│   │   └── components/
│   │       ├── Navbar.tsx     # Navigation bar
│   │       ├── UsersList.tsx  # Table to display users
│   │       ├── ConfirmDialog.tsx # Confirmation dialog for delete
│   │       ├── NewUserDialog.tsx # Dialog for adding a new user
│   │       └── Notification.tsx  # Snackbar for notifications
```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd src/app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000).

---

## Usage

### Home Page

- **Go to User List**: Navigates to the user list page.
- **Add New User**: Opens a form to add a new user.
- **Edit User**: Prompts for a user ID and navigates to the edit page.

### User List Page

- Displays a table of users with options to edit or delete.
- **Add New User**: Opens a dialog to add a new user.

### Add User Page

- A form to add a new user with name and email.

### Edit User Page

- A form to edit an existing user's details.

---

## Components

### Navbar.tsx

- A navigation bar that appears at the top of every page.

### UsersList.tsx

- A table component that displays the list of users with edit and delete buttons.

### ConfirmDialog.tsx

- A dialog that confirms the deletion of a user.

### NewUserDialog.tsx

- A dialog for adding a new user.

### Notification.tsx

- A snackbar component for displaying success or error messages.

---

## API Service

The `userService.tsx` file contains functions for interacting with the backend API:

- `fetchUsers()`: Fetches the list of users.
- `fetchUserById(id)`: Fetches a single user by ID.
- `createUser(userData)`: Creates a new user.
- `updateUser(id, userData)`: Updates an existing user.
- `deleteUser(id)`: Deletes a user.

---

## Acknowledgments

- Material-UI for the UI components.
- Next.js for the frontend framework.