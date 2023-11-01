import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // In Vanilla redux - we were not allowed to mutate the state directly - RETURNING was Mandatory
      // So we used to do it like the code commented below before RTK
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState;

      //RTK
      //we are mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // We can't do something like this  directly
      // state = [];   // This won't mutate our state, it will just create a reference for this locally

      // console.log(state)  // This also won't work since redux create a proxy onject behind the scenes
      // console.log(current(state))  // this will work and we need to import { current } from  "@reduxjs/toolkit"

      // RTK says either mutate the state or return a new state
      state.items.length = 0;
      // So, we can alternately do this also
      // return { items : [] };    - this will directly be replaced inside the original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // exporting actions

export default cartSlice.reducer; // exporting reducer
