import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reg() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register');
        if (!response.ok) {
          throw new Error('Failed to fetch data'); 
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Data</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>City:</strong> {user.city}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Birthdate:</strong> {user.birthdate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}

      {/* Go back button */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
} 

export default Reg;