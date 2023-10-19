import React, { useEffect } from "react";
import loginImg from "../assets/login.jpg";
import { Label } from "../components/Elements/label";
import { Field } from "../components/Elements/field";
import { Button } from "../components/Elements/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../components/Elements/input";
import { Radio } from "../components/Elements/radio";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../service/userService";
const SignUpForm = () => {
  const navigate = useNavigate();
  const schema = yup
    .object({
      username: yup.string().required("Please enter your full name"),
      email: yup
        .string()
        .email("Please enter valid email address")
        .required("please enter your email address"),
      password: yup
        .string()
        .min(8, "Your password must be at least 8 charcaters")
        .required("Please enter your password"),
    })
    .required();
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (values) => {
    if (!isValid) return;
    if (values.password != values.rePassword) {
      toast.error("Password must be same Repassword");
      return;
    }
    const userInfo = {
      user_name: values.username,
      email: values.email,
      password: values.password,
    };

    signup(userInfo, () => {
      navigate("/login");
    });
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
    <div className="h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className=" hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center ">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-[400px] w-full mx-auto bg-gray-200 p-4 rounded-lg"
          >
            <h2 className="text-4xl font-bold text-center py-6">
              CodeTrungCode
            </h2>

            <Field>
              <Label htmlFor="fullname">UserName</Label>
              <Input
                name="username"
                placeholder="Typing your username ..."
                type="text"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                name="address"
                placeholder="Typing your address ..."
                control={control}
              ></Input>
            </Field>
            <div className="flex flex-col gap-3 mb-5">
              <Label>Gender</Label>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-x-3">
                  <Radio control={control} name="gender" value="male"></Radio>
                  <span>Male</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <Radio control={control} name="gender" value="female"></Radio>
                  <span>Female</span>
                </div>
              </div>
            </div>

            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="Typing your email ..."
                control={control}
              ></Input>
            </Field>

            <Field>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Typing your password ..."
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="rePassword">Re-Password</Label>
              <Input
                type="text"
                name="rePassword"
                placeholder="Typing your password ..."
                control={control}
              ></Input>
            </Field>

            {/* <Button>Sign In</Button> */}
            <Button type="submit">Submit</Button>

            <div className="flex justify-between">
              <p className="flex items-center ">
                <input className="mr-2" type="checkbox" />
                Remember me here!
              </p>
              <p className="bg-green-400 p-1 border rounded-xl cursor-auto ">
                <NavLink to={"/login"}>login to account</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
