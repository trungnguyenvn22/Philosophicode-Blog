import React, { useEffect, useState } from "react";

const PostThemeText = ({ ...post }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(post);
  }, []);
  const handleRedirectDetailPost = () => {
    navigate(`/post/detail/${data.slug}`);
  };
  return (
    <div className="w-[442px] h-24 p-4 flex flex-col ">
      <div
        className="w-full h-12 mt-2 mb-4 pt-2 font-bold text-lg border-t-[1px] border-gray-200"
        onClick={handleRedirectDetailPost}
      >
        {data.title}
      </div>
      <div className="w-full h-[22px] pt-2 ">
        <span className="h-5 font-medium text-gray-400 text-sm">
          {data.createdAt ? data.createdAt : "Date update"}
        </span>
      </div>
    </div>
  );
};

export default PostThemeText;
