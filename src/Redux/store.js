import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice";
import FaqReducer from "./Faq/FaqSlice";
import CartReducer from "./Cart/CartSlice";
import ProductReducer from "./Products/ProductSlice";
import { getUserByToken } from "./User/action-creators";
import { fetchCartProducts } from "./Cart/action-creators";

const store = configureStore({
  reducer: {
    User: UserReducer,
    Faq: FaqReducer,
    Cart: CartReducer,
    Product: ProductReducer,
  },
});

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(getUserByToken(token));
  store.dispatch(fetchCartProducts(token));
}
export default store;
