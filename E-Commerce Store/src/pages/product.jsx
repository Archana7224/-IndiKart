import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext); 

  // Find the product by matching the productId
  const product = products.find((item) => String(item.id) === String(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <img
          src={product.image || '/placeholder-image.png'}
          alt={product.name || 'Unnamed Product'}
          className="w-1/2 h-auto object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.name || 'Unnamed Product'}</h1>
          <p className="text-xl text-gray-700">
            ${product.price !== undefined ? product.price.toFixed(2) : '0.00'}
          </p>
          <p className="text-gray-600 mt-4">
            {product.description || 'No description available.'}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddToCart} 
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
