import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        // 1. Unpacking the Box (Destructuring)
        const { name, image, cost } = action.payload;
      
        // 2. The Search
        const existingItem = state.items.find(item => item.name === name);
      
        if (existingItem) {
          // 3. The "Plus One" logic
          existingItem.quantity++;
        } else {
          // 4. The "New Arrival" logic
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
      },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
      },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
