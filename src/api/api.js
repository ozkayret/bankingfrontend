
//axios.defaults.withCredentials = true;
//axios.defaults.baseURL = import.meta.env.VITE_REACT_BASE_URL;
//axios.defaults.headers.post["Content-Type"] = "application/json";

import axios from "axios";

export default axios.create({
    withCredentials: true,
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
/* baseURL: "http://localhost:8080", */
