import React from 'react';
import img from '../../pictures/notfound.png';
export default function NotFound() {
  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: '100px',
        height: '500px',
        backgroundRepeat: 'no-repeat',

        backgroundImage: `url("${img}")`,
      }}
    >
      <p style={{ marginLeft: '20%' }}>
        sorry, you got lost, go back to main page
      </p>
    </div>
  );
}
