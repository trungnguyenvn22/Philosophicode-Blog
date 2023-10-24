import React from "react";
import uploadDefaultImage from "../../../assets/imgUpload.png";

const ImageUpload = (name, className = "", ...rest) => {
  return (
    <label className="cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg relative overflow-hidden">
      <input
        type="file"
        name={name}
        className="hidden"
        onChange={() => {}}
        {...rest}
      />
      <div className="flex flex-col items-center text-center pointer-events-none">
        <img
          className="max-w-[80px]"
          src={uploadDefaultImage}
          alt="img upload file"
        />
      </div>
      <div className="absolute w-0 h-1 bg-green-400 bottom-0 left-0 transition-all"></div>
    </label>
  );
};

export default ImageUpload;
