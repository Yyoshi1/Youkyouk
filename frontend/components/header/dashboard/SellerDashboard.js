import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price} د.م - Stock: {p.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default SellerDashboard;
