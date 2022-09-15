import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllWalletsComp = () => {
  const [user, setUsers] = useState();
  const [wallet, setWallet] = useState();

  const userType = useSelector((state) => state.User.userData.userType);
  const navigate = useNavigate();

  const getAllWallets = useCallback(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    axios
      .get(`${process.env.REACT_APP_API}/user/getAllWallet`, config)
      .then((d) => {
        console.log(d.data.data);
        setUsers(d.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const walletHandler = (wall, id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    axios
      .patch(
        `${process.env.REACT_APP_API}/user/updateWallet/${id}`,
        { wallet: +wall + +wallet },
        config
      )
      .then((d) => {
        navigate(0);
        console.log();
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (userType && userType !== "Admin") {
      navigate(-1);
    } else {
      getAllWallets();
    }
  }, [navigate, userType, getAllWallets]);

  console.log(user);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex flex-col mt-20">
        <span className="text-3xl font-bold my-5">All User Wallets</span>
        <div className="w-full ">
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead className="">
                <tr>
                  <th></th>
                  <th className="text-white">Name</th>
                  <th className="text-white w-[400px]">Wallet</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user?.map((s, i) => (
                  <tr key={i}>
                    <th className="text-white">{i + 1}</th>
                    <td className="text-white">{s.username}</td>
                    <td className="text-white">$ {s.wallet?.balance || 0}</td>
                    <td align="right">
                      {" "}
                      <label
                        htmlFor={`my-modal-${i}`}
                        className="btn text-white !bg-primary border-none hover ml-auto "
                      >
                        Update Wallet
                      </label>
                      <input
                        type="checkbox"
                        id={`my-modal-${i}`}
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box bg-white ">
                          <div className="mr-auto w-full flex flex-col">
                            <p className="font-bold text-lg mr-auto">Wallet</p>
                            <span className="py-4 text-lg mt-4 text-black mr-auto">
                              Current Wallet Balance: {s.wallet?.balance || 0}
                            </span>

                            <input
                              onChange={(e) => setWallet(e.target.value)}
                              // min={s.wallet?.balance}
                              type="number"
                              placeholder="Wallet"
                              className="input bg-white input-bordered w-full max-w-xs"
                            />
                          </div>
                          <div className="modal-action">
                            <button
                              disabled={wallet === undefined || wallet === 0}
                              className="btn"
                              onClick={walletHandler.bind(
                                null,
                                s.wallet?.balance || 0,
                                s._id
                              )}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWalletsComp;
