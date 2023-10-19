import axios from "axios";
import { api } from "./api/axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Navigate, useNavigate, NavLink, Link } from "react-router-dom";

export const loginUser = async (loginDetail) => {
  return await api
    .post("api/v1/auth/login", loginDetail)
    .then((response) => response.data.body);
};

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data === null || data === undefined) {
    return false;
  } else {
    return true;
  }
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  let user_role_token = data.access_token;
  let role = jwt_decode(user_role_token).roles[0];
  console.log("role user login:", role);
  localStorage.setItem("role", role);

  next();
};
export const doLogout = () => {
  localStorage.removeItem("data");
  localStorage.removeItem("role");
};
export const getCurrentUserDatail = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return undefined;
  }
};

export const getCunrentUserRole = () => {
  const role = localStorage.getItem("role");
  return role;
};
export const getToken = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).access_token;
  } else {
    return null;
  }
};
export const signup = async (userInfo, next) => {
  return await api.post("api/v1/auth/register", userInfo).then((response) => {
    response.data;
    console.log("user service", response.data);
    if (response?.data?.statusCodeValue != 200) {
      toast.error("Đăng Ký Thất Bại!" + response?.data?.statusCode);
    }
    if (response?.data?.statusCodeValue == 200) {
      toast.success("Đăng Ký Thành Công");
      next();
    }
  });
};
