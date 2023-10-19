import React from "react";
import { Loading } from "../loading";
import { NavLink } from "react-router-dom";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading } = props;
  const { buttonTypeCss, to } = props;
  const child = !!isLoading ? <Loading></Loading> : children;
  if (to !== "") {
    <NavLink to={to}></NavLink>;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className="middle w-full none center m-auto my-5 rounded-lg bg-blue-500 py-4 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
  data-ripple-light"
    >
      {child}
    </button>
  );
};

export default Button;
