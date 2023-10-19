import React from "react";
import HeaderPage from "../components/layout/HeaderPage";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <div className=" flex justify-between mt-10 max-w-[90%] w-full h-screen mx-auto ">
        <div className="w-1/3 h-full bg-red-200">
          <div className="bg-cyan-200 shadow-lg  rounded-xl max-w-[60%] mx-auto mt-80">
            <div className="w-40 h-40 mx-auto p-3">
              <img
                className=" w-full h-full object-fill rounded-full"
                src="https://coin98.net/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fimages%2Fthumb_portfolio-6_3x2-M68OSCGpYzDhGQs2.png&w=1920&q=75"
                alt=""
              />
            </div>
            <div className="mt-10 max-w-[60%] mx-auto pb-10">
              <ul>
                <li className="my-5 flex justify-between  rounded-lg  py-2 px-5 hover:bg-gray-300 ">
                  <Link>
                    <h3 className="font-medium text-lg">My Like</h3>
                  </Link>
                  <div className="">
                    <h4 className=" font-medium text-lg  ">10</h4>
                  </div>
                </li>
                <li className="py-3 px-5 hover:bg-gray-300 rounded-lg ">
                  <Link>
                    <h3 className="font-medium text-lg  ">Profile Setting</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full bg-blue-300"></div>
      </div>
    </div>
  );
};

export default UserProfile;
