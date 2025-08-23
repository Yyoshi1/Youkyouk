import React from 'react';

function Header({ userType, setUserType }) {
  return (
    <header style={{ padding: '10px', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
      <h1>Youkyouk</h1>
      <div>
        <select value={userType} onChange={e => setUserType(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
