import api from "../api/api";
import { clearUser } from "../store/authSlice";
//import dispatch from "../store/authSlice";

export const signout = (username, password) => async (dispatch) => {
  console.log("--> login service call");
  const { data: response } = await api.post("/api/users/signout");

  sessionStorage.removeItem("isAuthenticated");
  sessionStorage.removeItem("username");
  dispatch(clearUser());
};
