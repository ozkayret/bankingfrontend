import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import SelectBoxField from "../../components/SelectBoxField";
import { fetchAccounts } from "../../store/accountSlice";
import api from "../../api/api";

const CreateTransaction = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      from: "",
      to: "",
      amount: "",
    },
    mode: "onTouched",
  });

  const createTransferHandler = async (data) => {
    setLoader(true);
    console.log("--> createTransferHandler");
    try {
      const response = await api.post("/api/transactions/transfer", data);
      console.log("Response:", response);
      if (response.data == "SUCCESS") {
        toast.success("Para transferi başarıyla oluşturuldu!");
      } else {
        toast.error("Para transferi oluşturulamadı! Yetersiz bakiye.");
      }
      reset();
      navigate("/manage-accounts");
    } catch (error) {
      console.error("--> Error : " + error);
      toast.error("Para transferi oluşturulamadı! Tekrar deneyin.");
    } finally {
      setLoader(false);
    }
  };

  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(createTransferHandler)}
        className="sm:w-112.5 w-90  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
          Para Transferi Oluştur
        </h1>

        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3 text-black">
          <SelectBoxField
            label="Hangi Hesaptan"
            required
            id="from"
            type="select"
            message="*Hesap gereklidir"
            placeholder="Hesap Seçin"
            register={register}
            errors={errors}
            options={accounts.map((account) => ({
              value: account.number,
              label: account.number + " - " + account.name,
            }))}
          />
          <TextField
            label="Gönderilecek Hesap Numarası"
            required
            id="to"
            type="text"
            message="*Gönderilecek hesap numarası gereklidir"
            placeholder="Gönderilecek hesap numarasını girin"
            register={register}
            errors={errors}
          />
          <TextField
            label="Transfer Tutarı"
            required
            id="amount"
            type="number"
            message="*Transfer tutarı gereklidir"
            placeholder="Transfer tutarını girin"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
        >
          {loader ? "Loading..." : "Para Transferi Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default CreateTransaction;
