import React, { useState, useEffect } from 'react';
import './Table'; 
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

function Material() {
  const [submitted, setSubmitted] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSubmitted(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, []); 

  const handleEdit = (user) => {
    navigate('/register', { state: { user: user } });
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(submitted.filter((user) => user.id !== id)); 
      // alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error); 
      alert('Failed to delete user.');
    }
};



  return (
    <TableContainer component={Paper} sx={{ maxWidth: '80%', margin: 'auto', marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>User Information</h2>
      <MuiTable sx={{ minWidth: 650 }} aria-label="user information table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submitted.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.birthdate}</TableCell>
              {/* <TableCell>{user.gender}</TableCell> */}
              <TableCell>
                <Button variant="contained" color="primary" style={{ marginRight: '5px' }} onClick={() => handleEdit(user)}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => handleDelete(user.id)}> 
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Material;






          





























