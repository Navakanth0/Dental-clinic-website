import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', form)
      .then(() => setSubmitted(true))
      .catch(() => alert('Submission failed.'));
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thanks! We’ll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          <input name="subject" placeholder="Subject" required onChange={handleChange} />
          <textarea name="message" placeholder="Message" required onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="info">
        <p>📞 +91 98765 43210</p>
        <p>📧 contact@smiledental.com</p>
        <p>📍 Hyderabad, India</p>
      </div>
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
      />
    </section>
  );
};

export default Contact;
