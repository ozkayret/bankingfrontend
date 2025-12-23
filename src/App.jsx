import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./store/authSlice";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import CreateAccount from "./pages/account/CreateAccount";
import ManageAccount from "./pages/account/ManageAccount";
import CreateTransaction from "./pages/transaction/CreateTransaction";
import DasboardLayout from "./pages/dashboard/DasboardLayout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    const username = sessionStorage.getItem("username");

    if (isAuthenticated === "true" && username) {
      dispatch(
        setUser({
          username: username,
          isAuthenticated: true,
        })
      );
    } else {
      dispatch(clearUser());
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" Component={AboutPage} />
        <Route
          path="/register"
          element={
            <PrivateRouter publicPage={true}>
              <RegisterPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRouter publicPage={true}>
              <LoginPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRouter publicPage={false}>
              <DasboardLayout />
            </PrivateRouter>
          }
        />
        <Route
          path="/create-accounts"
          element={
            <PrivateRouter publicPage={false}>
              <CreateAccount />
            </PrivateRouter>
          }
        />
        <Route
          path="/manage-accounts"
          element={
            <PrivateRouter publicPage={false}>
              <ManageAccount />
            </PrivateRouter>
          }
        />
        <Route
          path="/create-transaction"
          element={
            <PrivateRouter publicPage={false}>
              <CreateTransaction />
            </PrivateRouter>
          }
        />

        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/*"
          element={
            <ErrorPage message="We can't seem to find the page you're looking for" />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
