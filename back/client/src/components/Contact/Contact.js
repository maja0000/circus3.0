import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: black;
`;
export default function Contact() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState({
    message: '',
    author: '',
  });
  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((res) => {
        setMessages(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  const updateData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessages([{ ...data, fake: true }, ...messages]);
    if (!data.author) {
      toast.error('yikes! you forgot your name... 🙈❕');
    }
    if (!data.message) {
      toast.error('yikes! you forgot your message... 🙈❕');
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessages(res);

        toast.success('🎉 thank you for your review 🎉');
        setSuccess(true);
      })
      .catch((err) => {
        toast.error('upss! something went wrong! 🔎');
      });
  };
  return (
    <div className="contact-container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-picture"></div>
        <p>We would be happy to hear from you!</p>
        <label>your message</label>
        <input name="message" defaultValue="" onChange={updateData} />
        <label>your name</label>
        <input name="author" defaultValue="" onChange={updateData} />
        <input type="submit" />
      </form>
      {loading ? (
        <HashLoader
          css={override}
          color={'black'}
          size={50}
          loading={loading}
        />
      ) : (
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              margin: '20px',
            }}
          >
            {messages.map((text, key) => (
              <div
                key={key}
                style={
                  ({
                    border: '2px solid grey',
                    margin: '5px',
                    borderRadius: '20px',
                  },
                  text.fake && { opacity: 0.3 })
                }
              >
                <p>{text.message}</p>
                <p> {text.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
