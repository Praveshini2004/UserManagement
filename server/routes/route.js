import express from 'express';
import { addUser, getUsers, getUser, editUser,deleteUser } from '../controller/user-controller.js';

const router = express.Router();

// Route to add a new user
router.post("/add", addUser);

// Route to get all users
router.get("/all", getUsers);

// Route to get a user by ID
router.get("/:id", getUser);

// Route to update a user by ID
router.put("/:id", editUser); // Changed to PUT
router.delete('/:id',deleteUser);
export default router;
