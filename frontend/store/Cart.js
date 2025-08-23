import { useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  const clearCart = () => setCart([]);
  const getTotal = () => cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return { cart, addToCart, removeFromCart, clearCart, getTotal };
}
