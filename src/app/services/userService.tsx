import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/users'; 

export const fetchUsers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Fetch a single user by ID
export const fetchUserById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw error;
    }
};

// Create a new user
export const createUser = async (userData: { name: string; email: string }) => {
    try {
        const response = await axios.post(BASE_URL, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Update an existing user
export const updateUser = async (id: number, userData: { name: string; email: string }) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        throw error;
    }
};
