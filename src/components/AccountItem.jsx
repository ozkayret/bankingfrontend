import React from "react";
import { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import HesapGecmisiFragment from "./HesapGecmisiFragment";
import api from "../api/api";
import { useNavigate } from "react-router";

const AccountItem = ({ id, number, name, balance }) => {
  const historyHandler = () => {
    if (!historyToggle) {
      fetchAccountHistoryData();
    }
    setHistoryToggle(!historyToggle);
  };
  const navigate = useNavigate();

  const [historyToggle, setHistoryToggle] = useState(false);
  const [loader, setLoader] = useState(false);

  const [accountHistoryData, setAccountHistoryData] = useState([]);

  const fetchAccountHistoryData = async () => {
    setLoader(true);
    try {
      const { data: res } = await api.post(`/api/transactions/account/${id}`);
      setAccountHistoryData(res);
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div
      className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}
    >
      <div
        className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}
      >
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
          <div className="flex items-center gap-1 ">
            <h3 className=" text-slate-700 font-normal text-[17px] ">
              Hesap Numarası : {number}
            </h3>
          </div>
          <div className="flex items-center gap-1 ">
            <h3 className=" text-slate-700 font-normal text-[17px] ">
              Hesap Adı : {name}
            </h3>
          </div>
          <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
            <p className="text-2xl font-bold text-btnColor">
              Bakiye : ₺{balance?.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex  sm:flex-row flex-col sm:gap-0 py-5  sm:justify-end items-center gap-4">
          {/* <div className="flex  flex-1  sm:justify-end items-center gap-4"> */}
          <div
            onClick={() => historyHandler(id)}
            className="flex cursor-pointer gap-2 items-center bg-rose-700 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white "
          >
            <button>Hesap Geçmişi</button>
            <FaArrowDown className="text-md" />
          </div>
        </div>
        <div className="flex mx-2 sm:flex-row flex-col sm:gap-0 py-5  sm:justify-end items-center gap-4">
          {/* <div className="flex  flex-1  sm:justify-end items-center gap-4"> */}
          <div
            onClick={() =>
              navigate("/manage-accounts", {
                state: {
                  accountId:  id
                },
              })
            }
            className="flex cursor-pointer gap-2 items-center bg-blue-700 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white "
          >
            <button>Hesabı İşlemleri</button>
            <FaArrowRight className="text-md" />
          </div>
        </div>
      </div>
      <React.Fragment>
        <HesapGecmisiFragment
          historyToggle={historyToggle}
          accountHistoryData={accountHistoryData}
          loader={loader}
        />
      </React.Fragment>
    </div>
  );
};

export default AccountItem;
