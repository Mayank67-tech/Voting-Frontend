import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../styles/colors';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate and navigate to dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div style={{ backgroundColor: colors.grayBlue, height: '100vh' }} className="flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: colors.darkBlue }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-[colors.primary] text-white py-2 rounded hover:opacity-90">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
