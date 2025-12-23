import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRouter = ({ children, publicPage }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
  if (publicPage) {
    return isAuthenticated ? <Navigate to="/dashboard" /> : children;
  }
  return !isAuthenticated ? <Navigate to="/" /> : children;
};

export default PrivateRouter;
