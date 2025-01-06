// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Data() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const submittedData = location.state?.submittedData; 

 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2>Submitted Data</h2>
//       {submittedData ? (
//         <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
//           <p><strong>Name:</strong> {submittedData.Name}</p>
//           <p><strong>Password:</strong> {submittedData.Password}</p>
//         </div>
//       ) : (
//         <p>No submitted data found.</p>
//       )}

//       <h2>All Data</h2>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id} style={{ marginBottom: '10px' }}>
//             <p><strong>Name:</strong> {user.Name}</p>
//             <p><strong>Password:</strong> {user.Password}</p>
//           </li>
//         ))}
//       </ul>
//       <button  className='data' onClick={() => navigate(-1)}>Go Back</button>
//     </div>
//   );
// }

// export default Data;
