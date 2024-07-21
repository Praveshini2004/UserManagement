import axios from 'axios';

const baseURL = 'https://user-management-frontend-gamma.vercel.app/'; // Replace with your actual API URL

// Function to get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to get a user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

// Function to add a new user
export const addUser = async (user) => {
  try {
    const response = await axios.post(`${baseURL}/users`, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Function to update an existing user
export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${baseURL}/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete a user
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};
