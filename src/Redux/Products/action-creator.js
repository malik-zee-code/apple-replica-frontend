import axios from "axios";
import { toast } from "react-toastify";
import { ProductActions } from "./ProductSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(
      ProductActions.getProducts({
        products: [],
        isLoading: true,
        error: false,
      })
    );
    const getProduct = axios.get(`${process.env.REACT_APP_API}/product`);

    getProduct
      .then((d) =>
        dispatch(
          ProductActions.getProducts({
            products: d.data.data,
            isLoading: false,
            error: false,
          })
        )
      )
      .catch((err) => {
        dispatch(
          ProductActions.getProducts({
            products: [],
            isLoading: false,
            error: true,
          })
        );
        toast.error(`${err.response.data.error}!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
};
