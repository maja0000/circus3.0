import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

export default function Contact() {
  const [data, setData] = useState({
    message: '',
    author: '',
  });

  const updateData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.author) {
      toast.error('yikes! you forgot your name... 🙈❕');
    }
    if (!data.message) {
      toast.error('yikes! you forgot your message... 🙈❕');
    }

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('successsss');
        toast.success(
          '🎉 thank you for your message, we will get back to you as soon as possible 🎉'
        );
      })
      .catch((err) => {
        toast.error('upss! something went wrong! 🔎');
      });
  };
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="form-picture"></div>
        <p>We would be happy to hear from you!</p>
        <label>your message</label>
        <input name="message" defaultValue="" onChange={updateData} />
        <label>your name</label>
        <input name="author" defaultValue="" onChange={updateData} />
        <input type="submit" />
      </form>
    </div>
  );
}
