import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartProducts: (state, action) => {
      console.log(action.payload);
      return {
        cartItems: action.payload.cartItems,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    },
    resetCartProduct: (state, action) => {
      return action.payload;
    },
    addtoCart: (state, action) => {
      return action.payload;
    },
    updateCartProduct: (state, action) => {
      return action.payload;
    },
    deleteCartProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
