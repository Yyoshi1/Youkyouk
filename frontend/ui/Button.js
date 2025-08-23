import React from 'react';

function Button({ onClick, children, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ padding: '10px 15px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}

export default Button;
