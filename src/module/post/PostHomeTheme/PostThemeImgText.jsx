import React, { useEffect, useState } from "react";

const PostThemeImgText = ({ ...post }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(post);
  }, []);
  return (
    <div className="h-[478px] w-[442px] mx-4 ">
      {data && data != null ? (
        <div>
          <div className="">
            <img
              className="rounded-lg"
              src="https://coin98.net/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fimages%2Fthumb-domo-wAUvgx8vTY5FTHeW.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className=" w-full h-14 my-4 ">
              <span className="font-bold text-xl">{data.title}</span>
            </div>
            <div className="mb-4">
              <span className="text-base font-medium">{data.description}</span>
            </div>
            <div className="w-full h-7 flex gap-4">
              <img
                className=" w-7 h-7 rounded-full object-cover"
                src="https://coin98.net/_next/image?url=https%3A%2F%2Fcoin98.s3.amazonaws.com%2Fqwysjgnethufdgej&w=1920&q=75"
                alt=""
              />
              <span className="font-medium">Bich Tram</span>
              <span className="font-medium text-gray-400">10/17/2023</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostThemeImgText;
