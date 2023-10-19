import React, { useContext, useEffect, useState } from "react";
import loginImg from "../assets/login.jpg";
import { Label } from "../components/Elements/label";
import { Input } from "../components/Elements/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Field } from "../components/Elements/field";
import { Button } from "../components/Elements/button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { values } from "lodash";
import { useSignIn } from "react-auth-kit";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { Cookies, useCookies } from "react-cookie";
import { api } from "../service/api/axios";
import {
  loginUser,
  doLogin,
  doLogout,
  getCurrentUserDatail,
  isLoggedIn,
} from "../service/userService";

const LoginForm = () => {
  const navigate = useNavigate();
  // const {} = useAuth();
  const schema = yup.object({
    username: yup.string().required("please enter your username"),
    password: yup
      .string()
      .min(6, "Your password must be at least 8 charcaters")
      .required("Please enter your password"),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = (newUser) => {
    // const res = await api.post("api/v1/auth/login", newUser);
    // console.log(res.data);
    loginUser(newUser)
      .then((data) => {
        doLogin(data, () => {
          navigate("/");
          toast.success("Đăng nhập thành công");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };

  // handle login page
  const handleSubmitForm = (values) => {
    if (!isValid) return;

    const newUser = { email: values.username, password: values.password };

    login(newUser);
    console.log(getCurrentUserDatail());
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className=" hidden sm:block ">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-200 flex flex-col justify-center ">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-4xl font-bold text-center py-6">CodeTrungCode</h2>
          <Field>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username..."
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Typing your password ..."
              control={control}
            ></Input>
          </Field>

          <Button type="submit">Login</Button>
          <div className="flex justify-between">
            <p className="flex items-center ">Don't have Account yet?</p>
            <p className="bg-green-400 p-1 border rounded-xl cursor-auto ">
              <NavLink to={"/sign-up"}>Create a account</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
