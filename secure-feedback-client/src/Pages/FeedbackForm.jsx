import React, { useState } from 'react';
import API from '../api';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    rating: ''
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Base URL:", API.defaults.baseURL); 
    try {
      await API.post('/feedback', form);
      alert('✅ Feedback submitted successfully!');
      setForm({ name: '', email: '', message: '', rating: '' });
    } catch (err) {
      alert('❌ Error submitting feedback.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4 text-center">
          📝 <strong>Submit Your Feedback</strong>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={form.name}
              placeholder="Enter your name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              value={form.message}
              placeholder="Enter your feedback"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Rating (1–5)</label>
            <select
              className="form-select"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              required
            >
              <option value="">Rate</option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
