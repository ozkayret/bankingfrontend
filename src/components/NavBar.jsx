import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { signout } from "../services/signoutService";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = async () => {
    await signout()(dispatch);
    navigate("/");
  };

  return (
    <div className="h-16 bg-custom-gradient  z-50 flex items-center sticky top-0 ">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">
            BamBank
          </h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-15.5 sm:shadow-none shadow-md ${
            navbarOpen
              ? "h-fit sm:pb-0 pb-5  bg-custom-gradient"
              : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none  bg-custom-gradient-hide sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-medium  transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/dashboard"
            >
              Anasayfa
            </Link>
          </li>
          <li className="hover:text-btnColor font-medium  transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-200"
              }`}
              to="/about"
            >
              Hakkımızda
            </Link>
          </li>
          {!isAuthenticated && (
            <div className="flex items-start gap-1">
              <Link to="/login">
                <li className="sm:ml-0 -ml-1 bg-rose-700 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150">
                  Giriş Yap
                </li>
              </Link>
              <Link to="/register">
                <li className="sm:ml-0 -ml-1 bg-rose-700 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150">
                  Üye Ol
                </li>
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <button
              onClick={onLogOutHandler}
              className="sm:ml-0 -ml-1 bg-rose-700 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150"
            >
              LogOut
            </button>
          )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
