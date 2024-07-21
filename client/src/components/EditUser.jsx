import { useEffect, useState } from 'react';
import { InputLabel, FormGroup, FormControl, Input, Typography, Button, styled } from '@mui/material';
import { getUser, editUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, [id]);

  const loadUserDetails = async () => {
    try {
      const response = await getUser(id);
      setUser(response.data);
    } catch (error) {
      console.error('Error loading user details:', error);
    }
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    setLoading(true);
    try {
      await editUser(id, user);
      navigate('/all');
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onValueChange} name="username" value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChange} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <Button 
          variant="contained" 
          onClick={editUserDetails} 
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Edit User'}
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
