import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { useNavigate, redirect } from "react-router-dom";
import { values } from "lodash";
import { api } from "../service/api/axios";
import { Cookies, useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = (prorp) => {
  // const [cookies, setCookies, removeCookie] = useCookies();
  const [isAuth, setIsAuth] = useState(false);

  // const login = async ({ email, password }) => {
  //   const user = { email: email, password: password };
  //   const res = await api.post("api/v1/auth/login", user);
  //   console.log(res.data);
  //   if (res.data.statusCodeValue === 200) {
  //     toast.success("Login success");
  //     setCookies("access_token", res.data.body.access_token);
  //     setCookies("refresh_token", res.data.body.refresh_token);
  //     setCookies("name", res.data.body.user_name);
  //   } else {
  //     toast.error("Wrong email or password, Check again!");
  //   }
  // };
  // const logout = () => {
  //   ["access_token, refresh_token, name"].forEach((obj) =>
  //     obj.removeCookie(obj)
  //   );
  // };

  // const values = useMemo(() => ({ cookies, login, logout }), [cookies]);

  const values = { isAuth, setIsAuth };
  return (
    <AuthContext.Provider value={values} {...prorp}>
      {prorp.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
