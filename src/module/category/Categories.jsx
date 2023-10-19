import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex gap-10 w-96 h-20 rounded-xl bg-blue-800">
      <div className="w-16 h-16 grid grid-rows-2 bg-blue-600 rounded-xl my-2 mx-2">
        <h2 className="text-white text-xl font-bold m-auto">ID</h2>
        <h3 className="text-white text-xl font-bold m-auto">08</h3>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold text-white">Category</h1>
        <h3 className="text-xl font-bold text-white">/category-sss</h3>
      </div>
      <div className="h-14 w-20 flex items-center cursor-pointer bg-gray-400 rounded-2xl text-white my-3">
        {/* <NavLink to={/edit-post} >Edit</NavLink> */}
        <h4 className="text-white font-semibold text-lg px-6">Edit</h4>
      </div>
    </div>
  );
};

export default Categories;
