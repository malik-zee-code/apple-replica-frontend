import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close, Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = () => {
  const [toggle, setToggle] = useState();
  const [cartToggle, setCartToggle] = useState(false);

  const token = useSelector((state) => state.User.token);

  return (
    <div
      className={` h-[40px] w-full  bg-[#333333] flex flex-col items-center fixed top-0  `}
    >
      <ul className="w-[50%]  h-full tablet:flex hidden items-center text-[#d6d6d6]  text-[11px] justify-around">
        <li>
          <Link to={"/"} className="mr-3">
            <FontAwesomeIcon icon={faApple} className="w-[20px] h-[20px]" />
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Store
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Mac
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            iPad
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            iPhone
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Watch
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Airpods
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            TV & Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Only on Apple
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Assessories
          </Link>
        </li>
        <li>
          <Link to={"/"} className="">
            Support
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
        {token && (
          <li
            onClick={() => {
              setCartToggle(!cartToggle);
            }}
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="w-[15px] h-[20px]"
            />
          </li>
        )}
      </ul>
      {cartToggle && <Cart />}

      <div className="tablet:hidden flex w-full mr-auto justify-between items-center px-2">
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

        <Link to={"/"} className="mr-3">
          <FontAwesomeIcon
            icon={faApple}
            className="w-[25px] h-[25px] text-[#dfdfdf]"
          />
        </Link>

        <Link to={"/"} className="">
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="w-[15px] h-[15px] text-[#dfdfdf]"
          />
        </Link>
      </div>
      <div
        className={` w-full tablet:hidden ${
          toggle ? "-translate-y-0 mt-10" : "-translate-y-full mt-0"
        }  ease-out duration-500 h-screen absolute  left-0 bg-black`}
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
          <ul className=" w-full flex flex-col text-[#d6d6d6]  text-lg   ">
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Store
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Mac
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                iPad
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                iPhone
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Watch
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Airpods
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                TV & Home
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Only on Apple
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Assessories
              </Link>
            </li>
            <li className=" border-b-[1px] py-3 border-[#363636]">
              <Link to={"/"} className="">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
