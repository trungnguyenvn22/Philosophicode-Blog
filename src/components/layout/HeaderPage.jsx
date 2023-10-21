import React, { useEffect, useState } from "react";
import logo from "../../assets/login.jpg";
import Search from "../../module/search/Search";
import Cookies from "universal-cookie";
import { Button } from "../Elements/button";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import userNotLogginImg from "../../assets/notLoggedImg.jpg";
import {
  doLogout,
  getCunrentUserRole,
  getCurrentUserDatail,
  isLoggedIn,
} from "../../service/userService";
import ProtectedRouter from "../../routers/ProtectedRouter";
import DashboardLayout from "../../module/dashboard/DashboardLayout";
import { useAuth } from "../../contexts/AppProvider";

const HeaderPage = () => {
  const menu = ["Profile"];
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { isLogin, roleLoggin, setLoggedIn } = useAuth();

  const handleCickOpenProfile = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    if (login == true) {
      doLogout();
      setLogin(false);
      setLoggedIn(false);
      setOpen(!open);
      navigate("/");
    }
    if (login == false) {
      navigate("/login");
      setOpen(!open);
    }
  };

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDatail());
    setRole(getCunrentUserRole());
    console.log(isLoggedIn());
    console.log(getCurrentUserDatail());
    function saveRole() {
      if (login == true) {
        let parseData = JSON.parse(localStorage.getItem("data"));
        console.log("access token:", parseData.access_token);
        console.log(role);
      }
    }
  }, [login]);

  return (
    <nav className="bg-white border-gray-200 mt-5 px-4 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl border-b-2 border-gray-400">
        <Link to={"/"} className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Philosophicode
          </span>
        </Link>
        <div className="relative flex items-center lg:order-2">
          {login == true ? null : (
            <Link
              to={"/login"}
              className="text-gray-800 dark:text-white hover:bg-blue-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </Link>
          )}
          <img
            onClick={handleCickOpenProfile}
            className="h-12 w-12 rounded-full border-2 mb-1 p-1 border-gray-700 cursor-pointer"
            src={userNotLogginImg}
            alt=""
          />
          {open ? (
            <div className="absolute bg-gray-100 p-4 w-80 shadow-lg -bottom-40 left-20 rounded-xl">
              <ul>
                <li className="p-2 mb-4 text-lg rounded border-[1px] border-gray-200">
                  <h3 className="text-lg font-medium text-white bg-amber-600 rounded-lg">
                    {user != undefined ? user.user_name : null}
                  </h3>
                  <h5>{user != undefined ? user.email : null}</h5>
                </li>
                {menu.map((items) => (
                  <li
                    onClick={() => setOpen(false)}
                    className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                    key={items}
                  >
                    {/* <Link to={"/dashboard"}>{items}</Link> */}
                    {isLogin == true && role === "ROLE_USER" ? (
                      <Link to={"/user"}>{items}</Link>
                    ) : (
                      <Link to={"/dashboard"}>{items}</Link>
                    )}

                    {/* {<Link to={"/dashboard"}>{items}</Link>} */}
                  </li>
                ))}
                {/* <li>
                  <button
                    className="text-gray-800 dark:text-white hover:bg-blue-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-1 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    onClick={doLogout(() => {
                      if (login == false) {
                        navigate("/login");
                      }
                    })}
                  >
                    Logout
                  </button>
                </li> */}
                <li
                  className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to={"/"}
                className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/home/category/philosophy"}
                className="block py-2 pr-4 pl-3 font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                PHILOSOPHY
              </Link>
            </li>
            <li>
              <Link
                to={"/home/category/sports"}
                className="block py-2 pr-4 pl-3 font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to={"/home/category/java"}
                className="block py-2 pr-4 pl-3 font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Java
              </Link>
            </li>
            <li>
              <Link
                to={"/home/category/reactjs"}
                className="block py-2 pr-4 pl-3 font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                ReactJS
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="block py-2 pr-4 pl-3 font-bold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
