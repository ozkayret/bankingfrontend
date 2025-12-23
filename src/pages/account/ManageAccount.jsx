import toast from "react-hot-toast";
import api from "../../api/api";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import HesapGecmisiFragment from "../../components/HesapGecmisiFragment";

const ManageAccount = () => {
  const location = useLocation();
  const { accountId } = location.state || {};
  const [accountDetails, setAccountDetails] = useState(null);
  const [accountHistoryData, setAccountHistoryData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  console.log("ManageAccount accountId:", accountId);

  const fetchAccountDetails = async () => {
    console.log("Fetching accounts with filters:", { accountId });
    try {
      const response = await api.get(`/api/accounts/${accountId}`);
      console.log("Fetched account details:", response.data);
      setAccountDetails(response.data);
      fetchAccountHistoryData(accountId);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      toast.error("Hesap bilgileri alınamadı!");
    }
  };

  const fetchAccountHistoryData = async (id) => {
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

  const deleteHandler = async () => {
    if (!window.confirm("Bu hesabı silmek istediğinize emin misiniz?")) return;
    try {
      await api.delete(`/api/accounts/${accountId}`);
      toast.success("Hesap başarıyla silindi");
      navigate("/manage-accounts"); // Navigate back to list
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Hesap silinemedi");
    }
  };

  const updateHandler = () => {
    navigate("/create-accounts", {
      state: {
        number: accountDetails.number,
        name: accountDetails.name,
        balance: accountDetails.balance,
        isCreateAccount: false,
      },
    });
  };

  useEffect(() => {
    console.log("ManageAccount accountId:", accountId);

    if (accountId) {
      fetchAccountDetails();
    }
  }, [accountId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Hesap Yönetimi</h1>

      {accountDetails ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl border border-gray-200">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Hesap Detayları
            </h2>
            <div className="border-b border-gray-300 mb-4"></div>
            <p className="text-gray-600 mb-1">
              <span className="font-bold">Hesap Adı:</span> {accountDetails.name}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-bold">Hesap Numarası:</span>{" "}
              {accountDetails.number}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-bold">Bakiye:</span> ₺
              {accountDetails.balance?.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between gap-4 mt-6 mb-8">
            <button
              onClick={updateHandler}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Güncelle
            </button>
            <button
              onClick={deleteHandler}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Sil
            </button>
          </div>

          <HesapGecmisiFragment
            historyToggle={true}
            accountHistoryData={accountHistoryData}
            loader={loader}
          />
        </div>
      ) : (
        <p className="text-lg text-gray-700">Hesap bilgileri yükleniyor...</p>
      )}
    </div>
  );
};

export default ManageAccount;

