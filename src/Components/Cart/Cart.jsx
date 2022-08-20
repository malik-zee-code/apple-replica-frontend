import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.User.userData.cartItems);
  return (
    <div className="w-[300px] h-[400px] border-2 shadow-lg absolute right-[180px] top-12 flex flex-col bg-white">
      {" "}
      <div className="w-full h-full p-4 overflow-x-scroll">
        {cartItems.length > 0
          ? cartItems.map((cart, i) => (
              <div className="w-full flex border-b-2">
                <img
                  src={cart.product.pictures[0]}
                  alt=""
                  className="w-[140px] h-[140px] object-contain"
                />
                <div className="flex justify-center flex-col">
                  <span className="text-black font-medium">
                    {cart.product.name}
                  </span>
                  <span className="text-slate-600">
                    {cart.quantity} x ${cart.product.price}
                  </span>
                </div>
              </div>
            ))
          : <span className="mt-0 mb-0">No Products in the Cart</span> }
      </div>
      <button className="px-3 py-2 rounded-[4px] bg-black font-semibold tracking-wider mt-auto m-3 text-white">
        {" "}
        Go to Checkout{" "}
      </button>
    </div>
  );
};

export default Cart;
