import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">kavinsGadgets</Link>
        </div>
        <div className={`hidden md:flex items-center space-x-4 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/deals" className="hover:text-gray-300">Deals</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white block">signup</Link>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link to="/" className="text-white block">Home</Link>
          <Link to="/categories" className="text-white block">Categories</Link>
          <Link to="/deals" className="text-white block">Deals</Link>
          <Link to="/login" className="text-white block">Login</Link>
          <Link to="/signup" className="text-white block">signup</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
