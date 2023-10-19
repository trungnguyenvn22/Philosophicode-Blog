import React from "react";
import PostThemeLarge from "./PostThemeLarge";

const PostThemeOne = () => {
  return (
    <div className=" flex w-[673px] h-[124px] py-5 mb-8 border-t-[1px] border-gray-200">
      <div className="h-[124px] max-w-[491px] w-full ">
        <div className="w-full h-14 mt-2 mb-8 text-lg font-bold">
          Machi Big Brother dump NFT; Dự án trên ZkSync tự xóa sổ và rugpull
          2,13 triệu USD
        </div>
        <div className="w-full h-7 flex ">
          <img
            className="h-7 w-7 rounded-full "
            src="https://coin98.net/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fimages%2Fimg_9983-edEP0qnVWThGLuE7.png&w=1920&q=75"
            alt=""
          />
          <span className="font-medium text-black px-4">0xChun21</span>
          <span className="font-medium text-gray-400">30/13/2022</span>
        </div>
      </div>
      <div className="max-w-[169px] h-[124px] w-full">
        <img
          className="w-full h-[113px] object-cover rounded-xl"
          src="https://coin98.net/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fimages%2Fbayc-machi-dump-CFYCYifbzQQ1KJZR.png&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default PostThemeOne;
