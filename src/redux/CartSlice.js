import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      alert(action);
    },
  },
});

export const { addItemToCart } = slice.action;
export default slice.reducers;
