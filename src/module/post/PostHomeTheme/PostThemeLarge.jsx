import { useScript } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";

const PostThemeLarge = ({ ...post }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(post);
    console.log("data", data);
  }, []);
  return (
    <div className="max-w-[676px] max-h-[641px] w-full h-full px-5 pt-5">
      {data && data != null ? (
        <div>
          <div className="h-[450px] w-full  ">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={data.image}
              alt=""
            />
          </div>
          <div className="w-full h-48 flex-col">
            <div className="text-2xl mt-2 mb-4 font-bold">
              {/* Huobi và Justin Sun có biểu hiện lạ; luật thu thập ID có hiệu lực
          tháng 1/2024 */}
              {data.title}
            </div>
            <div className="text-base font-sans font-bold mb-4">
              {data.description}
            </div>
            <div className="flex gap-4">
              <img
                className="w-7 h-7 rounded-full object-cover"
                src="https://coin98.net/_next/image?url=https%3A%2F%2Fcoin98.s3.amazonaws.com%2Fkkboqxmywnjytlko&w=1920&q=75"
                alt=""
              />
              <span className="font-medium text-black">{data.authorName}</span>
              <span className="font-medium text-gray-400">
                {data.createdAt ? data.createdAt : "Date update"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostThemeLarge;
