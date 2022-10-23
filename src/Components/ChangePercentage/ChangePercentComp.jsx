import React, { useEffect } from "react";
import { useCallback } from "react";

const ChangePercentComp = () => {
  const getAllGeneratedLinks = useCallback(() => {}, []);
  useEffect(
    () => {
      getAllGeneratedLinks();
    },
    { getAllGeneratedLinks }
  );
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex flex-col mt-20">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold my-5">All User Wallets</span>
        </div>
        <div className="w-full ">
          <div className="overflow-x-auto mb-10 border-2 border-slate-800 rounded-xl">
            <table className="table  w-full">
              <thead className="">
                <tr className="">
                  <th className="w-[200px]"></th>
                  <th className="text-white w-[200px]">Name</th>
                  <th className="text-white w-[200px]">Wallet</th>
                  <th className="text-white w-[400px]" align="center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {dmyuser?.map((s, i) => (
                  <tr key={i}>
                    <th className="text-white">{i + 1}</th>
                    <td className="text-white capitalize text-sm sm:text-[16px]">
                      {s.username}
                    </td>
                    <td className="text-white text-sm sm:text-[16px]">
                      $ {s.wallet?.balance || 0}
                    </td>
                    <td align="center">
                      {" "}
                      <label
                        htmlFor={`my-modal-${i}`}
                        className="sm:btn sm:text-white text-white  px-2 py-2 rounded-md text-[10px] !bg-primary border-none hover ml-auto "
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
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePercentComp;
