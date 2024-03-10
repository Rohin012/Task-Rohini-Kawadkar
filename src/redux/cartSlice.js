// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      state.items.push({ id, name, price });
      state.total += price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const itemToRemove = state.items.find(item => item.id === productId);
      state.items = state.items.filter(item => item.id !== productId);
      state.total -= itemToRemove.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
