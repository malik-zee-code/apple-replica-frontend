import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrders } from "../../Redux/Order/action-creator";

const OrderComp = () => {
  const Orders = useSelector((state) => state.Order.orders);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchUserOrders(token));
  }, [dispatch, token]);

  return (
    <div className="w-full flex justify-center">
      {" "}
      <div className="w-[80%] flex flex-col ">
        <h2 className="text-3xl font-bold mt-10">Your Orders. </h2>
        <div className="overflow-x-auto w-full mt-10">
          {Orders.length > 0 ? (
            <table className=" w-full text-lg border-separate border border-spacing-2">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th align="left">Quantity</th>
                  <th align="left">Price</th>
                </tr>
              </thead>
              <tbody>
                {Orders?.map((o, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td align="center">{o.product.name}</td>
                    <td>{o.quantity}</td>
                    <td>${o.product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span className="w-full flex justify-center">
              {" "}
              You Have no Pending Orders
            </span>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default OrderComp;
