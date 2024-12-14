import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Check and validate the image URL
  const validImage = Array.isArray(image) && image[0] ? image[0] : '/placeholder-image.png';

  return (
    <Link
      to={`/product/${id}`} 
      className="block text-gray-700 cursor-pointer hover:shadow-md transition"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-md border">
        <img
          className="w-full h-48 object-cover hover:scale-110 transition-transform ease-in-out"
          src={validImage}
          alt={name || 'Product Image'} 
        />
      </div>

      {/* Product Info Section */}
      <div className="mt-2">
        <p className="text-sm font-medium truncate">
          {name || 'Unnamed Product'} {/* Provide a fallback for name */}
        </p>
        <p className="text-sm text-gray-500">
          {currency || '$'}
          {price ? price.toFixed(2) : '0.00'} {/* Provide a fallback for price */}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
