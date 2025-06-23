// // src/pages/AdminDashboard.jsx
// import { useEffect, useState } from 'react';
// import API from '../api';

// export default function AdminDashboard() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [error, setError] = useState('');

//   const fetchFeedbacks = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await API.get('/feedback/admin', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setFeedbacks(res.data.data);
//     } catch (err) {
//       setError('Unauthorized or failed to fetch');
//     }
//   };

//   const deleteFeedback = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await API.delete(`/feedback/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setFeedbacks(feedbacks.filter(f => f._id !== id));
//     } catch (err) {
//       alert('Failed to delete');
//     }
//   };

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {feedbacks.map((fb) => (
//         <div key={fb._id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
//           <p><strong>Name:</strong> {fb.name}</p>
//           <p><strong>Email:</strong> {fb.email}</p>
//           <p><strong>Message:</strong> {fb.message}</p>
//           <p><strong>Rating:</strong> {fb.rating}</p>
//           <button onClick={() => deleteFeedback(fb._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import API from '../api';

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await API.get('/feedback/admin', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFeedbacks(res.data.data);
      } catch (err) {
        alert('Unauthorized or error fetching feedback');
      }
    };
    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await API.delete(`/feedback/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFeedbacks(feedbacks.filter(f => f._id !== id));
    } catch (err) {
      alert('Error deleting feedback');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📋 Admin Dashboard</h2>
      {feedbacks.map((fb) => (
        <div key={fb._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Name: {fb.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Email: {fb.email}</h6>
            <p className="card-text">Message: {fb.message}</p>
            <p className="card-text">Rating: {fb.rating}</p>
            <button onClick={() => handleDelete(fb._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
