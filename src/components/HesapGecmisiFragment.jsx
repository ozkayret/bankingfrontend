import { Hourglass } from "react-loader-spinner";
import AccountHistoryItem from "./AccountHistoryItem";

const HesapGecmisiFragment = ({ historyToggle, accountHistoryData, loader }) => {

  return (
    <div
      className={`${
        historyToggle ? "flex" : "hidden"
      }  max-h-96 sm:mt-0 mt-5 min-h-96 relative  border-t-2 w-full overflow-hidden `}
    >
      {loader ? (
        <div className="min-h-77.5 flex justify-center items-center w-full">
          <div className="flex flex-col items-center gap-1">
            <Hourglass
              visible={true}
              height="50"
              width="50"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
            <p className="text-slate-700">Please Wait...</p>
          </div>
        </div>
      ) : (
        <>
          {accountHistoryData.length === 0 ? (
            <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
              <h1 className=" text-slate-800 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                Hesaba ait geçmiş bulunamadı
              </h1>
            </div>
          ):(
            <div className="w-full space-y-4 p-4 overflow-y-auto max-h-96">
                {accountHistoryData.map((account) => (
                  <AccountHistoryItem key={account.id} {...account} />
                ))}
              </div>
          )}

        </>
      )}
    </div>
  );
};

export default HesapGecmisiFragment;
