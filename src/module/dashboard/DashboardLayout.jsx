import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import SideBarPart2 from "./SideBarPart2";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AppProvider";
import { toast } from "react-toastify";
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { isLogin, roleLoggin } = useAuth();
  console.log(isLogin, "role: ", roleLoggin);
  const [login, setLogin] = useState();
  const [roleUser, setRoleUser] = useState();
  useEffect(() => {
    setLogin(isLogin);
    setRoleUser(roleLoggin);
    console.log("isLogin:", login, "roleUser:", roleLoggin);
  }, []);
  return (
    <div>
      {isLogin &&
      roleLoggin &&
      isLogin == true &&
      roleLoggin == "ROLE_ADMIN" ? (
        <div className="h-screen grid grid-cols-5 grid-rows-6 gap-0">
          <SideBarPart2></SideBarPart2>
          <DashboardHeader></DashboardHeader>

          <div className="bg-white col-start-2 col-span-4 row-span-5">
            <Outlet />
          </div>
        </div>
      ) : (
        //  toast.error("Bạn phải đăng nhập để thực hiện chức năng này")
        <div>
          <span>
            <Link to={"/login"}>Bạn phải đăng nhập, nhấp nhấp </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
