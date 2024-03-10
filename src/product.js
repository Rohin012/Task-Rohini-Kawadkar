import React, { useState, useEffect } from 'react';
import './index.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [condition, setCondition] = useState(5); 

  useEffect(() => {
    fetchData();
  }, [condition]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${condition}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleConditionChange = (e) => {
    setCondition(parseInt(e.target.value, 10));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Product Table</h2>
      <select
        onChange={handleConditionChange}
        value={condition}
        className="border border-gray-300 rounded px-3 py-1 mb-4"

      >
        <option value={5}>First 5</option>
        <option value={10}>First 10</option>
        <option value={15}>First 15</option>
        <option value={20}>First 20</option>
      </select>


      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>

        
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.title}</td>
              <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2">{product.category}</td>
              <td className="border border-gray-300 px-4 py-2">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
