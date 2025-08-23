import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/dashboard/AdminDashboard';
import SellerDashboard from './components/dashboard/SellerDashboard';
import CustomerDashboard from './components/dashboard/CustomerDashboard';
import Header from './components/header/Header';

function App() {
  const [userType, setUserType] = useState('customer'); // admin/seller/customer

  return (
    <Router>
      <Header userType={userType} setUserType={setUserType} />
      <Routes>
        {userType === 'admin' && <Route path="/" element={<AdminDashboard />} />}
        {userType === 'seller' && <Route path="/" element={<SellerDashboard />} />}
        {userType === 'customer' && <Route path="/" element={<CustomerDashboard />} />}
      </Routes>
    </Router>
  );
}

export default App;
