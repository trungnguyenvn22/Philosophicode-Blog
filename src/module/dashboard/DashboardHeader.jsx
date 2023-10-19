import React, { useState } from "react";
import logo from "../../assets/login.jpg";
import { Button } from "../../components/Elements/button";
import SVGComponent from "../../components/Elements/LogoBlog";

const DashboardHeader = () => {
  const [profileToggle, setProfileToggle] = useState(false);

  const handleProfileToggle = () => {
    setProfileToggle(!profileToggle);
  };
  return (
    // <div className="col-span-4 row-span-1">
    //   <div className="h-full">
    //     <div className="flex justify-between gap-5 bg-white p-5 border-b border-solid border-gray-400">
    //       <div className="flex items-center gap-5 text-xl font-semibold">
    //         <span></span>
    //       </div>
    //       <div className="flex items-center gap-5">
    //         <Button> Wite new post</Button>
    //         <div className="max-w-[40px] max-h-[40px] w-full h-full">
    //           <img
    //             src={logo}
    //             alt=""
    //             className="w-full h-full object-cover rounded-full"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-span-4 row-span-1 ">
      <div className="h-full">
        <div className="flex justify-between bg-gray-600">
          <div className="p-1 mx-3 inline-flex items-center">
            <i className="fas fa-bars pr-2 text-white"></i>
            <h1 className="text-white font-bold p-2 border-r-2 border-l-2 border-white rounded-lg">
              Philosophycode
            </h1>
          </div>
          <div className="p-1 flex flex-row items-center">
            <span
              href="#"
              onClick={handleProfileToggle}
              className="text-white font-bold p-2 no-underline hidden md:block lg:block"
            >
              Admin DashBoard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
