import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Tablec.css';
import Navbar from './Navbar'; 

function Tablec() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true); 
  const [editing, setEditing] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data.');
        setLoading(false);
      });
  }, []);



    
  useEffect(() => {
    setEditing(false);
    fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setEditing(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data.');
        setEditing(false);
      });
  }, []);

  

  const handleSave = async () => {
    setLoading(true);
    try {
      await fetch(`https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register/${editingUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingUser),
      });
      setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
      setShowModal(false);
      toast.success('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setUsers(sortedUsers);
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '';
  };
  const handleEdit = (user) => {
    setLoading(true); 
    setTimeout(() => {
      setEditingUser(user);
      setShowModal(true);
      setLoading(false); 
    }, 1000);
  };
  

  
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar /> 
      <div className="table-container">
        <ToastContainer />
        <div className="header">
          <h2>Registered Users</h2>
        </div>
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="search-input"
          />
        </div>

       
        

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading users...</p>
          </div>
          
        ) : (
          
          <div className="table-wrapper">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th onClick={() => handleSort('username')}>Username {getSortIndicator('username')}</th>
                  <th onClick={() => handleSort('email')}>Email {getSortIndicator('email')}</th>
                  <th onClick={() => handleSort('phone')}>Phone {getSortIndicator('phone')}</th>
                  <th onClick={() => handleSort('city')}>City {getSortIndicator('city')}</th>
                  <th onClick={() => handleSort('gender')}>Gender {getSortIndicator('gender')}</th>
                  <th onClick={() => handleSort('address')}>Address {getSortIndicator('address')}</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                    <td>{user.gender}</td>
                    <td>{user.address}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="edit-btn" onClick={() => handleEdit(user)}>
                          {editing ? 'Editing...' : 'Edit'}
                        </button>
                        <button className="delete-btn">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Edit User</h3>
              <div className='text'>
                <label>Name:</label>
                <input type="text" name="username" value={editingUser.username} onChange={handleChange} placeholder="Username" />
                <label>Email:</label>
                <input type="email" name="email" value={editingUser.email} onChange={handleChange} placeholder="Email" />
                <label>Phone no:</label>
                <input type="text" name="phone" value={editingUser.phone} onChange={handleChange} placeholder="Phone" />
                <label>City:</label>
                <input type="text" name="city" value={editingUser.city} onChange={handleChange} placeholder="City" />
                <label>Gender:</label>
                <input type="text" name="gender" value={editingUser.gender} onChange={handleChange} placeholder="Gender" />
                <label>Address:</label>
                <input type="text" name="address" value={editingUser.address} onChange={handleChange} placeholder="Address" />
              </div>
              <div className="modal-buttons">
                <button className="save-btn" onClick={handleSave} disabled={loading}>{loading ? 'Updating...' : 'Update'}</button>
                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tablec;