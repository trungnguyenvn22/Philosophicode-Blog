import React from "react";
import JavaPostHome from "../post/PostHomeTheme/JavaPostHome";
import ReactPostHome from "../post/PostHomeTheme/ReactPostHome";
import PhilosophyPostHome from "../post/PostHomeTheme/PhilosophyPostHome";
import { Link } from "react-router-dom";

const HomeDetail = () => {
  return (
    <div>
      <div className="max-w-[70%] mx-auto mt-40 mb-10 flex justify-between">
        <span className="text-3xl font-bold">Java</span>
        <span className="text-xl font-medium text-gray-600 bg-blue-400 py-1 px-2 rounded-xl">
          <Link to={"/home/category/java"}>See all</Link>
        </span>
      </div>

      <JavaPostHome></JavaPostHome>
      <div className="max-w-[70%] mx-auto mt-20 mb-20 flex justify-between">
        <span className="text-3xl font-bold">ReactJS</span>
        <span className="text-xl font-medium text-gray-600 bg-blue-400 py-1 px-2 rounded-xl">
          <Link to={"/home/category/reactjs"}>See all</Link>
        </span>
      </div>
      <ReactPostHome></ReactPostHome>
      <div className="max-w-[70%] mx-auto mt-20 mb-20 flex justify-between">
        <span className="text-3xl font-bold">Philosophy</span>
        <span className="text-xl font-medium text-gray-600 bg-blue-400 py-1 px-2 rounded-xl">
          <Link to={"/home/category/philosophy"}>See all</Link>
        </span>
      </div>
      <PhilosophyPostHome></PhilosophyPostHome>
    </div>
  );
};

export default HomeDetail;
