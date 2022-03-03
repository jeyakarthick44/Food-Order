import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (recipe) => recipe.product_id === action.payload.product_id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const collectionProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(collectionProduct);
      }
    },
    removeFromCart(state, action) {
      const deleteItem = state.cartItems.filter(
        (cartItem) => cartItem.product_id !== action.payload.product_id
      );
      state.cartItems = deleteItem;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product_id === action.payload.product_id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const deleteItem = state.cartItems.filter(
          (cartItem) => cartItem.product_id !== action.payload.product_id
        );
        state.cartItems = deleteItem;
      }
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
