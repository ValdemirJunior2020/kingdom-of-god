import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    // TODO: connect to backend or email service later
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Contact / Prayer Request</h1>

      {submitted ? (
        <div className="alert alert-success">
          Thank you! We'll pray over your request and get back to you soon if needed.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message / Prayer Request</label>
            <textarea className="form-control" id="message" name="message" rows="5" value={form.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
