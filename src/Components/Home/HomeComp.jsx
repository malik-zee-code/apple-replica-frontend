import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserByToken } from "../../Redux/User/action-creators";

const HomeComp = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getUserByToken(token));
    }
  }, [dispatch, token]);

  return <div>WELCOME HOME!!</div>;
};

export default HomeComp;
