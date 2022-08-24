import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close, Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartActions } from "../../Redux/Cart/CartSlice";
import HandBagBox from "../HandBagBox/HandBagBox";

const Header = () => {
  const [toggle, setToggle] = useState();
  // const [cartToggle, setCartToggle] = useState(false);
  const cartToggle = useSelector((state) => state.Cart.cartToggle);
  const dispatch = useDispatch();

  return (
    <div
      className={` h-[40px] w-full  bg-[#333333] flex flex-col items-center `}
    >
      <ul className="w-[30%]  h-full tablet:flex hidden items-center text-[#d6d6d6]  text-[11px] justify-around">
        <li>
          <Link to={"/"} className="mr-3">
            <FontAwesomeIcon icon={faApple} className="w-[20px] h-[20px]" />
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="">
            Products
          </Link>
        </li>
        <li>
          <Link to={"/faq"} className="">
            FAQ
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Messanger
          </Link>
        </li>

        <li>
          <Link to={"/"} className="">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-[15px] h-[15px]"
            />
          </Link>
        </li>

        <li
          onClick={() => {
            dispatch(CartActions.toggleCart());
          }}
        >
          <FontAwesomeIcon icon={faShoppingBag} className="w-[15px] h-[20px]" />
        </li>
      </ul>
      {cartToggle && <HandBagBox />}

      <ul className="tablet:hidden flex w-full mr-auto justify-between items-center px-2">
        <li>
          {toggle ? (
            <IconButton
              className="w-[40px] h-[40px] "
              onClick={() => setToggle(false)}
            >
              <Close className="text-[#dfdfdf]" />
            </IconButton>
          ) : (
            <IconButton
              className="w-[40px] h-[40px] "
              onClick={() => setToggle(true)}
            >
              <Menu className="text-[#dfdfdf]" />
            </IconButton>
          )}
        </li>
        <li>
          <Link to={"/"} className="mr-3">
            <FontAwesomeIcon
              icon={faApple}
              className="w-[25px] h-[25px] text-[#dfdfdf]"
            />
          </Link>
        </li>
        <li
          onClick={() => {
            dispatch(CartActions.toggleCart());
          }}
        >
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="w-[15px] h-[15px] text-[#dfdfdf]"
          />
        </li>
      </ul>
      <div
        className={` w-full tablet:hidden ${
          toggle ? "-translate-y-0 mt-10" : "-translate-y-full mt-0"
        }  ease-out duration-500 h-screen absolute  left-0 bg-black z-20`}
      >
        <div className="bg-[#1f1f1f] p-2 rounded-md flex m-4">
          <Search className="" />
          <input
            type="text"
            className=" bg-[#1f1f1f] w-full h-[full] outline-none ml-3 "
            placeholder="Search apple.com"
          />
        </div>
        <hr className="my-5 border-[#363636]" />
        <div className="mx-10">
          <div className=" w-full flex flex-col text-[#d6d6d6]  text-lg   ">
            <Link
              to={"/products"}
              // className=""
              className="w-full border-b-[1px] py-3 border-[#363636]"
              onClick={() => setToggle(false)}
            >
              Products
            </Link>

            <Link
              to={"/faq"}
              className="w-full border-b-[1px] py-3 border-[#363636]"
              onClick={() => setToggle(false)}
            >
              FAQ
            </Link>

            <Link
              to={"/"}
              className="w-full border-b-[1px] py-3 border-[#363636]"
              onClick={() => setToggle(false)}
            >
              Messanger
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
