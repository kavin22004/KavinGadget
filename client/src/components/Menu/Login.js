// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Metadata from './Metadata';
import  {toast} from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      await axios.post('https://kavingadgetserver.onrender.com/api/login', formData);
      toast.success('Login succesfull')
      
    } catch (error) {
      toast.error(error.message)
    
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
    <Metadata title="Login" />
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" >
            Password
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
             type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required

          />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
  );
};

export default Login;
