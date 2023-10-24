import React, { useEffect, useState } from "react";
import PostItem from "../post/PostItem";
import { useParams } from "react-router-dom";
import { apiPrivate } from "../../service/api/axios";

const UserLikePost = () => {
  const { email } = useParams();
  console.log("email request", email);
  const [data, setData] = useState([]);
  const getPostLikedByUser = () => {
    apiPrivate.get(`/api/user/post-liked?email=${email}`).then((response) => {
      setData(response.data.dataResponseList);
    });
  };
  useEffect(() => {
    getPostLikedByUser();
  }, []);
  return (
    <div className="w-full h-full m-4 flex-col">
      <div className="">
        {data && data != null
          ? data.map((post) => <PostItem {...post} key={post.id}></PostItem>)
          : null}
      </div>
    </div>
  );
};

export default UserLikePost;
