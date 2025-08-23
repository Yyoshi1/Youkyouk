import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', width: '200px' }}>
            <h4>{p.name}</h4>
            <p>Price: {p.price} د.م</p>
            <p>Stock: {p.stock}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard;
