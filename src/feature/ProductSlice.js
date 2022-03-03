import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetch: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { productsFetch } = productSlice.actions;
export const getProducts = (state) => state.products.items;
export default productSlice.reducer;
