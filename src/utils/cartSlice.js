import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux ToolKit user immer BTS - to deal immutable state
        state.items.push(action.payload);
    },
    removeItem : (state, action) => {
        state.items.pop();
    },
    clearCart : (state, action) => {
      console.log(current(state));
      // RTK - either must have to MUTATE the existing state or return a new state
        state.items.length = 0;
        // return {items: []}; //this new object will be replaced inside originalState
    }
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
