import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getAllPost, searchPostByName } from "../../service/PostService";
import { api } from "../../service/api/axios";
import { useNavigate, useParams } from "react-router-dom";

const PostAll = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { strSearch } = useParams();
  useEffect(() => {
    try {
      if (strSearch != undefined) {
        searchPostByName(strSearch).then((response) => {
          setData(response.dataResponseList);
          console.log("search data", response);
        });
      } else {
        getAllPost().then((response) => {
          setData(response.dataResponseList);
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [strSearch]);

  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3
        mt-10 px-10 md:px-15 lg:px-32
        "
    >
      {/* {data && data.map((post) => <PostItem {...post}></PostItem>)} */}
      {data && data.length > 0
        ? data.map((post) => <PostItem {...post} key={post.title}></PostItem>)
        : null}
    </div>
  );
};

export default PostAll;
