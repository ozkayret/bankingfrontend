import React from "react";

const AccountHistoryItem = ({ from, to, amount, transactionDate, status }) => {
  return (
    <div
      className={`w-full bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}
    >
      <div
        className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}
      >
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
          <div className="flex items-center gap-1 mx-4 ">
            <h3 className=" text-slate-700 font-normal text-[17px] ">
              Gönderen Hesap : {from}
            </h3>
          </div>
          <div className="flex items-center gap-1 mx-4 ">
            <h3 className=" text-slate-700 font-normal text-[17px] ">
              Alan Hesap : {to}
            </h3>
          </div>
        </div>
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden">
          <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
            <p className="text-2xl font-bold text-btnColor">
              Miktar : ₺{amount?.toLocaleString()}
            </p>
          </div>
          <div
            className={`flex items-center gap-1 ${
              status =="SUCCESS" ? "text-green-600" : "text-red-600"
            } `}
          >
            <h3 className=" font-normal text-[17px] ">Durum : {status}</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 mx-4 ">
        <h3 className=" text-slate-700 font-normal text-[17px] ">
          Transfer Tarihi : {transactionDate}
        </h3>
      </div>
    </div>
  );
};

export default AccountHistoryItem;
