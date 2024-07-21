import { Table, TableBody, TableRow, TableHead, TableCell, Button, styled } from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto;
`;

const Thead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const Trow = styled(TableRow)`
    & > td {
        font-size: 18px;
    }
`;

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteUserDetails = async (id) => {
        try {
            await deleteUser(id);
            getAllUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Actions</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {users.map(user => (
                    <Trow key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>
                            <Button 
                                color="primary" 
                                variant="contained" 
                                style={{ marginRight: 10 }} 
                                component={Link} 
                                to={`/edit/${user._id}`}
                            >
                                Edit
                            </Button>
                            <Button 
                                color="secondary" 
                                variant="contained" 
                                onClick={() => deleteUserDetails(user._id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </Trow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default AllUser;
