import React, { useEffect, useState } from "react";
import PostThemeLarge from "./PostThemeLarge";

const PostThemeOne = ({ ...post }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(post);
  }, []);
  const handleRedirectDetailPost = () => {
    navigate(`/post/detail/${data.slug}`);
  };
  return (
    <div className=" flex w-[673px] h-[124px] py-5 mb-8 border-t-[1px] border-gray-200">
      <div className="h-[124px] max-w-[491px] w-full ">
        <div
          className="w-full h-14 mt-2 mb-8 text-lg font-bold"
          onClick={handleRedirectDetailPost}
        >
          {data.title}
        </div>
        <div className="w-full h-7 flex ">
          <img className="h-7 w-7 rounded-full " src={data.image} alt="" />
          <span className="font-medium text-black px-4">{data.authorName}</span>
          <span className="font-medium text-gray-400">
            {data.createdAt ? data.createdAt : "Date update"}
          </span>
        </div>
      </div>
      <div className="max-w-[169px] h-[124px] w-full">
        <img
          className="w-full h-[113px] object-cover rounded-xl"
          src={data.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default PostThemeOne;
