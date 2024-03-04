// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import Metadata from './Metadata';
import  {toast} from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phonenumber:'',
    password:'',
    avatar:'',
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
      await axios.post('https://localhost:8000/api/register', formData);

      toast.success('Sign Up succesfull')
    } catch (error) {
        toast.error('Sign up failed fill correct values')
    }
  };

  return (

    <div className="flex h-screen justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
    <Metadata title="Signup" />
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            UserName
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
            PhoneNumber
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="Number"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            
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
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" >
            Avatar
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="string"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
            placeholder='Url of Your Photo'
          />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;
