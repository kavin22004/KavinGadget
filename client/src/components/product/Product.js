import React from 'react';
import './productstyle.css';
import{Link } from 'react-router-dom'

const Product = ({ product }) => {

  return (
    <div className="w-64 max-w-xs mx-2 my-4 p-4 bg-white rounded-md shadow-md">
      <div className="relative">
        <img
          className="w-full h-32 object-cover mb-4 rounded-md"
          src={product.images[0].image}
          alt="Product"
        />
       
      </div>
      <div className="text-center">
        <div className="text-bold text-lg mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">Price: ${product.price}</p>
        <p className="text-gray-500 text-sm">Seller: {product.seller}</p>
        <p className="text-gray-500 text-sm">In Stock: {product.stock}</p>
        <div className="relative" >
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
        <Link to={`/product/${product._id}`}>  View Details </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Product;