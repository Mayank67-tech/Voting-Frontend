import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import Dashboard from './pages/Dashboard';

const AdminPanel = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />
    <Route path="signup" element={<AdminSignup />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Routes>
);

export default AdminPanel;
