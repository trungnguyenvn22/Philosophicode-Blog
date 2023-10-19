import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostBySlug } from "../../service/PostService";
import { toast } from "react-toastify";

const PostPage = () => {
  const [user, setUser] = useState();
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getPostBySlug(slug).then((response) => {
      setPost(response.data);
    });
    console.log(post);
  }, []);
  const handleAddLike = () => {
    console.log("liked");
  };

  return (
    <div className="w-full">
      <div className=" max-w-[80%] mt-10 mx-auto">
        <div className="flex justify-between ">
          <div>
            <div className="w-3/4 right-0">
              <h1 className=" font-bold text-5xl mt-40 ml-4">
                {post != null ? post.dataResponse.title : null}
              </h1>
              <h3 className="font-bold text-lg mt-20 ">
                {/* description */}
                {post != null ? post.dataResponse.description : null}
              </h3>
            </div>
          </div>
          <div className=" h-full w-full bg-gray-200 border-4 border-gray-300">
            <img
              className=" object-cover w-full h-full"
              src={post != null ? post.dataResponse.image : null}
              alt=""
            />
          </div>
        </div>
        <div className="mt-20 text-lg font-medium ">
          {/* render data from database */}
          {/* {post.data.content} */}
          {post != null ? (
            <div
              dangerouslySetInnerHTML={{ __html: post.dataResponse.content }}
            ></div>
          ) : null}
          {/* <div
            dangerouslySetInnerHTML={{ __html: post.dataResponse.content }}
          ></div> */}
        </div>
        <div className="">
          <h3 className="max-w-xs mx-auto text-3xl font-medium">Relative</h3>
        </div>
      </div>
      <div className=" top-1/2 bottom-0 fixed overflow-auto h-40 w-14 bg-gray-100 rounded-r-3xl">
        <div>
          <div className="h-6 w-6 mx-auto my-6 ">
            <svg
              onClick={handleAddLike}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <div className="h-6 w-6 mx-auto my-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
