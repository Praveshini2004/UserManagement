import axios from 'axios';

const URL = 'https://user-management-frontend-gamma.vercel.app/';

// Add a new user
export const addUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/add`, data);
        return response;
    } catch (error) {
        console.error("Error while calling add user API", error);
        throw error;
    }
};

// Get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/all`);
        return response;
    } catch (error) {
        console.error("Error while calling get users API", error);
        throw error;
    }
};

// Get a user by ID
export const getUser = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response;
    } catch (error) {
        console.error("Error while calling get user API", error);
        throw error;
    }
};

// Edit a user by ID
export const editUser = async (id, data) => {
    try {
        const response = await axios.put(`${URL}/${id}`, data);
        return response;
    } catch (error) {
        console.error("Error while calling update user API", error);
        throw error;
    }
};

// Delete a user by ID
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${URL}/${id}`);
        return response;
    } catch (error) {
        console.error("Error while calling delete user API", error);
        throw error;
    }
};
