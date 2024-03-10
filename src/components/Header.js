import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartPopup from './CartPopup';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Online Store</h1>
      <div className="relative" onClick={toggleCart}>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          {cart.items.length > 0 && <span className="bg-red-500 text-white w-4 h-4 rounded-full absolute -top-1 -right-1 flex items-center justify-center">{cart.items.length}</span>}
        </button>
        {isCartOpen && <CartPopup />}
      </div>
    </header>
  );
};

export default Header;
