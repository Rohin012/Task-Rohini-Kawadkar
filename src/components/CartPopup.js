import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartPopup = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="absolute top-0 right-0 mt-16 mr-4 bg-white rounded shadow p-4 z-10">
      <h3 className="text-lg font-bold mb-4">Cart</h3>
      {cart.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.items.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <span className="text-sm">{item.name} - ${item.price}</span>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4">Total: ${cart.total}</p>
        </>
      )}
    </div>
  );
};

export default CartPopup;
