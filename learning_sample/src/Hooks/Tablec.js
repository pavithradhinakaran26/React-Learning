
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tablec.css';

function Tablec() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);


  const handleDelete = (username) => {
    const updatedUsers = users.filter(user => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (user) => {
    localStorage.setItem('editUser', JSON.stringify(user)); 
    navigate('/registerpage'); 
  };

  return (
    <div className="table-container">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(user.username)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="back-button" onClick={() => navigate('/Registerpage')}>Back to Register</button>
    </div>
  );
}

export default Tablec;
