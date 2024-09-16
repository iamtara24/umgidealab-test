import React, { useState, useEffect } from 'react';

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const bestProducts = data.slice(0, 3);
        setProducts(bestProducts);
      });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Best Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.category}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;