import React from "react";

const PostImage = ({ url = "", alt = "", className = "" }) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={
          "w-full h-[200px] rounded-xl object-cover border-inherit " +
          `${className}`
        }
      />
    </div>
  );
};

export default PostImage;
