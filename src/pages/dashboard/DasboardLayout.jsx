import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts } from "../../store/accountSlice";
import AccountItem from "../../components/AccountItem";

const DasboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accounts, loading } = useSelector((state) => state.account);
  const [name, setName] = React.useState("");
  const [accountId, setAccountId] = React.useState("");

  useEffect(() => {
    dispatch(fetchAccounts({ name, accountId }));
  }, [dispatch]);

  const filterHandler = () => {
    console.log("Filter applied with ", name, accountId);
    dispatch(fetchAccounts({ name, accountId }));
  };

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p>Loading accounts...</p>
        </div>
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between py-5 sm:text-end text-center">
                <div className="mx-2">
                  <input
                    type="text"
                    id="name"
                    placeholder="Hesap adını girin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-2 py-2 border  outline-none bg-transparent  text-slate-700 rounded-md border-slate-600"
                  />
                </div>
                <div className="mx-2">
                  <input
                    type="text"
                    id="accountNumber"
                    placeholder="Hesap numarasını girin"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="px-2 py-2 border  outline-none bg-transparent  text-slate-700 rounded-md border-slate-600"
                  />
                </div>
                <div className="mx-2">
                  <button
                    className="bg-custom-gradient px-4 py-2 rounded-md text-white font-semibold hover:shadow-md transition-all"
                    onClick={() => {
                      filterHandler();
                    }}
                  >
                    Filtrele
                  </button>
                </div>
              </div>
            </div>

            <div className="py-5 sm:text-end text-center">
              <button
                className="bg-custom-gradient px-4 py-2 rounded-md text-white font-semibold hover:shadow-md transition-all"
                onClick={() => {
                  navigate("/create-accounts");
                }}
              >
                Yeni Hesap Oluştur
              </button>
            </div>
          </div>
          <div>
            {!loading && accounts.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                    Hiç hesabınız yok hemen oluşturun
                  </h1>
                </div>
              </div>
            ) : (
              <div className="my-6 space-y-4">
                {accounts.map((account) => (
                  <AccountItem key={account.id} {...account} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DasboardLayout;
