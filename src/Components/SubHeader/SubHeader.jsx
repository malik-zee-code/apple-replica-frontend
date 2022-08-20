import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Reset } from "../../Redux/User/action-creators";

const SubHeader = () => {
  const token = localStorage.getItem("token");
  const username = useSelector((state) => state.User.userData.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success(`Good Bye ${username}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(Reset());
    navigate("/signin");
  };
  return (
    <div className="flex w-full justify-center p-4  mt-10 ">
      <div className="w-[50%] border-b-[1px] h-[50px] flex justify-between items-end pb-3">
        <span className="text-black font-bold text-lg">Apple ID</span>
        <div className="text-[11px] text-black ">
          {token ? (
            <button
              className="mr-4 hover:text-indigo-600"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" className="mr-4 hover:text-indigo-600">
                Sign In
              </Link>
              <Link to="/register" className="mr-4 hover:text-indigo-600">
                Create Your Apple ID
              </Link>
            </>
          )}
          <Link to="/faq" className="mr-4 hover:text-indigo-600">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
