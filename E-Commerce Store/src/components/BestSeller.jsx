import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]); 

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller); 
      setBestSeller(bestProduct.slice(0, 4)); 
    }
  }, [products]); 

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Browse our bestselling collection and see why these items are flying off the shelves. Shop now and find out what’s trending!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <div key={item.id} className="p-4 border rounded">
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No bestsellers available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;