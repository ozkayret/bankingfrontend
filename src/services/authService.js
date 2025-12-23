import api from "../api/api";
import { setUser } from "../store/authSlice";
//import dispatch from "../store/authSlice";

export const login = (username, password) => async (dispatch) => {
   
  console.log("--> login service call");
  const { data: response } = await api.post("/api/users/signing", {
    username,
    password,
  });
  //toast.success("Login Successfull!");
  //setToken(response.token);
  // localStorage.setItem("JWT_TOKEN", response.token);
  console.log(response);
  console.log(response.username);

  // sayfa yenilemsine durumunu korumak icin sessionStorage kullanildi
  sessionStorage.setItem("isAuthenticated", true);
  sessionStorage.setItem("username", username);
  /* {
  type: "auth/loginSuccess",
  payload: ...
} */
  dispatch({
    type: "auth/setUser",
    payload: {
      username: sessionStorage.getItem("username"),
      isAuthenticated: sessionStorage.getItem("isAuthenticated"),
      loading: false,
    },
  });

  dispatch(
    setUser({
      username: sessionStorage.getItem("username"),
      isAuthenticated: sessionStorage.getItem("isAuthenticated"),
      loading: false,
    })
  );
  /*   dispatch(
    setUser({
      username: sessionStorage.getItem("username"),
      isAuthenticated: sessionStorage.getItem("isAuthenticated"),
      loading: false,
    })
  ); */
};

/* export const login = (username, password) => async (dispatch) => {
    console.log("--> login service call");
   const { data: response } =await api.post("/api/users/signing", { username, password });
      //toast.success("Login Successfull!");
      //setToken(response.token);
     // localStorage.setItem("JWT_TOKEN", response.token);
      console.log(response);
  dispatch(setUser(response.data));
};
 */
