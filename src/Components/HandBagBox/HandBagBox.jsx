import {
  faBoxOpen,
  faUserPlus,
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCartProduct,
  resetCartProducts,
} from "../../Redux/Cart/action-creators";
import { Reset } from "../../Redux/User/action-creators";

const HandBagBox = () => {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(resetCartProducts());
    dispatch(Reset());
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleDeleteCartProduct = (productId) => {
    dispatch(deleteCartProduct(productId, token));
  };
  return (
    <div className="tablet:w-[300px] w-full h-[300px] border-2 shadow-lg tablet:fixed absolute  tablet:top-[50px] top-10 tablet:right-[550px]  flex  flex-col bg-white p-2 tablet:rounded-[12px]">
      <div className="w-full min-h-[100px] max-h-full p-4 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((cart, i) => (
            <React.Fragment key={i}>
              <div className="w-full flex border-b-2 items-center p-2">
                <img
                  src={cart.product?.pictures[0]}
                  alt=""
                  className="w-[50px] h-[50px] object-cover"
                />
                <div className="flex justify-center flex-col ml-5">
                  <span className="text-black font-medium">
                    {cart.product.name}
                  </span>
                  <span className="text-slate-600">
                    {cart.quantity} x ${cart.product.price}
                  </span>
                </div>
                <IconButton
                  onClick={handleDeleteCartProduct.bind(null, cart.product._id)}
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <Close />
                </IconButton>
              </div>
            </React.Fragment>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-slate-500 text-[15px]">
              Your Bag is empty.
            </span>
          </div>
        )}
      </div>
      <nav className="w-full mt-auto flex">
        <ul className="w-full h-full mt-auto">
          <li className="py-3 border-y-[2px] text-sm hover:underline hover:text-indigo-700 text-indigo-700  flex items-center">
            <FontAwesomeIcon icon={faBoxOpen} className="h-4 mr-3" />
            Orders
          </li>
          {!token ? (
            <>
              <li
                className="py-3 border-b-[2px] text-sm hover:underline hover:text-indigo-700 text-indigo-700  flex items-center"
                onClick={() => navigate("/register")}
              >
                <FontAwesomeIcon icon={faUserPlus} className="h-4 mr-3" />
                Create an Account
              </li>
              <li
                className="py-3  text-sm hover:underline hover:text-indigo-700 text-indigo-700 flex items-center"
                onClick={() => navigate("/signin")}
              >
                <FontAwesomeIcon icon={faCircleUser} className="h-4 mr-4" />
                Login
              </li>
            </>
          ) : (
            <li
              className="py-3  text-sm hover:underline hover:text-indigo-700 text-indigo-700 flex items-center"
              onClick={logoutHandler}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="h-4 mr-3" />
              Logout
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HandBagBox;
