import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice";
import FaqReducer from "./Faq/FaqSlice";

const store = configureStore({
  reducer: { User: UserReducer, Faq: FaqReducer },
});

export default store;
