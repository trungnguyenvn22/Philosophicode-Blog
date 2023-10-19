import React, { useEffect, useState } from "react";
import { ChevronFirst } from "lucide-react";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { getCurrentUserDatail } from "../../service/userService";

const SideBarPart2 = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(getCurrentUserDatail());
  }, []);
  return (
    <div className="col-span-1 row-span-full">
      <aside className="h-full w-full ">
        <nav className="h-full flex flex-col bg-gray-200 border-r shadow-sm">
          <div className="border-t flex p-3  bg-white">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className=" flex justify-between items-center w-52 ml-3">
              <div className="leading-4 ">
                <h4 className="font-semibold">
                  {user != undefined ? user.user_name : null}
                </h4>
                <span className="text-xs text-gray-600">
                  {user != undefined ? user.email : null}
                </span>
              </div>
            </div>
          </div>
          <ul className="flex-1 px-3">
            <SidebarItem
              text="Home"
              slug="/"
              icon={<LayoutDashboard size={20} />}
            ></SidebarItem>
            {/* <SidebarItem
              text="User management"
              icon={<UserCircle size={20} />}
            ></SidebarItem> */}
            <SidebarItem
              slug="/dashboard/add-post"
              text="Add New Post"
              icon={<Boxes size={20} />}
            ></SidebarItem>
            <SidebarItem
              slug="/dashboard/posts"
              text="View Post"
              icon={<Boxes size={20} />}
            ></SidebarItem>
            <SidebarItem
              slug="/dashboard/categories"
              text="View Category"
              icon={<Package size={20} />}
            ></SidebarItem>
            <SidebarItem
              slug="/dashboard/add-category"
              text="Add Category"
              icon={<Package size={20} />}
            ></SidebarItem>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
export const SidebarItem = ({ icon, text, slug }) => {
  return (
    <li
      className="
      
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group hover:bg-indigo-50 text-gray-600  "
    >
      <NavLink to={slug}>
        <div className="flex">
          {icon}
          <span className="relative w-52 ml-3 overflow-hidden transition-all">
            {text}
          </span>
        </div>
      </NavLink>
    </li>
  );
};

export default SideBarPart2;
