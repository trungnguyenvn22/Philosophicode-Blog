import React, { useEffect, useState } from "react";
import itemImg from "../../assets/introbanner.png";
import authorImg from "../../assets/login.jpg";
import PostImage from "./PostImage";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const PostItem = ({ ...post }) => {
  const navigate = useNavigate();
  const [postCard, setPostCard] = useState({});
  useEffect(() => {
    setPostCard(post);
  }, []);
  const handleRedirectDetailPost = () => {
    navigate(`/post/detail/${postCard.slug}`);
  };
  return (
    <div
      className="
    shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]
    mt-5 cursor-pointer py-3 px-2 rounded-2xl
    "
    >
      {postCard && postCard != null ? (
        <div>
          <PostImage url={postCard.image} alt="anh bia"></PostImage>

          <h3 className="text-red-500 mt-3">{postCard.categoryName}</h3>
          <h3 className="font-bold mt-3" onClick={handleRedirectDetailPost}>
            {postCard.title}
          </h3>
          <h3 className="line-clamp-3 text-gray-400 mt-3">
            {postCard.description}
          </h3>
          <div className="mt-5 flex items-center">
            <img
              className="w-[35px] h-[35px] rounded-full"
              src={authorImg}
              alt=""
            />
            <div className="ml-2">
              <h3 className="font-bold text-[12px]">{postCard.authorName}</h3>
              <h3 className="text-gray-500 text-[10px]">
                {postCard.createdAt}
              </h3>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostItem;
