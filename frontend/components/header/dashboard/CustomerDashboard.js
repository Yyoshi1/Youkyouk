import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../store/Cart';
import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';

function CustomerDashboard() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, getTotal } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>{t('welcome')} Customer</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', width: '200px' }}>
            <h4>{p.name}</h4>
            <p>Price: {p.price} د.م</p>
            <p>Stock: {p.stock}</p>
            <Button onClick={() => addToCart(p)}>{t('add_to_cart')}</Button>
          </div>
        ))}
      </div>
      <h3>Cart Total: {getTotal()} د.م</h3>
    </div>
  );
}

export default CustomerDashboard;
