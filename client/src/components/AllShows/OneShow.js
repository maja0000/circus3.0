import React from 'react';
import './OneSHow.css';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OneShow({ show }) {
  const addLike = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ $inc: { likes: 1 } }),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('🦁cool, thanks for your vote!');
      })
      .catch((err) => {
        toast.error('🦁yikes! something went wrong!');
      });
  };
  return (
    <div
      className="show-header"
      style={{ backgroundImage: `url("${show.picture}")` }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>{show.title}</span>
          {show.new ? <FiberNewIcon /> : ''}
        </div>
        <div className="like" onClick={() => addLike(show._id)}>
          <FavoriteBorderIcon />
          {show.likes}
        </div>
      </div>
    </div>
  );
}
