import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import StarsRating from "stars-rating";
import { addtoCart, updateCartProduct } from "../../Redux/Cart/action-creators";
import Spinner from "../../UI/Spinner";
import { fetchProducts } from "../../Redux/Products/action-creator";

const ProductComp = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.Product.products);
  const token = useSelector((state) => state.User.token);
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const navigate = useNavigate();

  const handleAddtoCart = (productId, e) => {
    e.stopPropagation();
    const product = cartItems.find((p) => p.product._id === productId);

    console.log(product);
    if (token) {
      if (product) {
        dispatch(updateCartProduct(1, productId, token));
      } else {
        dispatch(addtoCart(1, productId, token));
      }
    } else {
      toast.error(`Please Login and then Add Products to Cart!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products.length < 1 ? (
        <Spinner />
      ) : (
        <div className="w-[80%] my-20 min-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-3 ">
          {products &&
            products.map((p, i) => (
              <div
                onClick={() => navigate(`${p._id}`)}
                className="w-[300px] cursor-pointer my-3 hover:scale-105 ease-in duration-100 h-[400px] bg-white shadow-lg hover:shadow-2xl rounded-lg flex flex-col"
                key={i}
              >
                <img
                  src={p.pictures[0]}
                  alt=""
                  className="w-full max-h-[150px] object-contain"
                />
                <div className="w-full h-full flex   items-center p-1">
                  <div className=" w-full flex flex-col items-center justify-center">
                    <span className="text-black text-xl font-bold ">
                      {p.name}
                    </span>
                    <span className="">{p.description.slice(0, 28)}...</span>

                    <span className=" text-black font-semibold text-2xl mt-3">
                      ${p.price}
                    </span>
                    <StarsRating
                      className=" w-[140px] flex justify-between "
                      count={5}
                      size={42}
                      color2={"#ffd700"}
                      edit={false}
                      // value={p.reviews[0]?.rating}
                      value={4.3}
                    />
                  </div>
                </div>
                <button
                  className="mt-auto px-3 py-3  bg-zinc-500 rounded-b-lg text-white font-semibold hover:bg-zinc-600 ease-in duration-100  "
                  onClick={handleAddtoCart.bind(null, p._id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ProductComp;
