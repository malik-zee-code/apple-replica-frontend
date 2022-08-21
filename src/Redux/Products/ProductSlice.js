import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: false,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const ProductActions = ProductSlice.actions;

export default ProductSlice.reducer;
