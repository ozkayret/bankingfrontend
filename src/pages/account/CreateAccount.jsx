import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { Link, useNavigate, useLocation } from "react-router";
import api from "../../api/api";
import toast from "react-hot-toast";

const CreateAccount = () => {
  const location = useLocation();
  const { number, name, balance, isCreateAccount = true } =
    location.state || {}; 

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: number || "",
      name: name || "",
      balance: balance || 0,
    },
    mode: "onTouched",
  });
  const fetcAccountNumber = async () => {
    console.log("---> fetcAccountNumber");
    try {
      const { data: res } = await api.get(
        "/api/accounts/generate-account-number"
      );
      console.log("---> res : ", res);
      setValue("number", res.accountNumber);
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };

  useEffect(() => {
    if (isCreateAccount) fetcAccountNumber();
  }, [fetcAccountNumber, isCreateAccount]);
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const accountHandler = async (data) => {
    setLoader(true);
    console.log("--> accountHandler");
    try {
      await api.post("/api/accounts", data);
      toast.success("Hesap başarıyla oluşturuldu!");
      reset();
      navigate("/manage-accounts");
    } catch (error) {
      console.error("--> Error : " + error);
      toast.error("Hesap oluşturulamadı!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(accountHandler)}
        className="sm:w-112.5 w-90  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
         {isCreateAccount ? "Yeni Hesap Oluştur" : "Hesabı Güncelle"}
        </h1>

        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3">
          <TextField
            label="Hesap Numarası"
            required
            readOnly={true}
            id="number"
            type="text"
            message="*Hesap numarası gereklidir"
            placeholder="Hesap numaranızı girin"
            register={register}
            errors={errors}
          />
          <TextField
            label="Hesap Adı"
            required
            id="name"
            type="text"
            message="*Hesap adı gereklidir"
            placeholder="Hesap adınızı girin"
            register={register}
            errors={errors}
          />
          <TextField
            label="Hesap Bakiyesi"
            required
            id="balance"
            type="number"
            message="*Hesap bakiyesi gereklidir"
            placeholder="Hesap bakiyenizi girin"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
        >
          {loader ? "Loading..." : "Hesap Oluştur"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Hesaplarınızı yönetmek için{" "}
          <Link
            className="font-semibold underline hover:text-black"
            to="/manage-accounts"
          >
            <span className="text-btnColor"> Hesap Yönetimi</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
