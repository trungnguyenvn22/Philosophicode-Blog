import React, { useEffect, useState } from "react";
import { api } from "../../service/api/axios";
import { useParams } from "react-router-dom";
import { getPostBySlug, getPostsByCategory } from "../../service/PostService";
import Search from "../search/Search";
import PostAll from "./PostAll";
import axios from "axios";
import PostItem from "./PostItem";

const PostCategory = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPostsByCategory = async (slug) => {
      return await api
        .get(`/view/posts-by-category-slug?slug=${slug}`)
        .then((response) => {
          console.log("response: ", response.data);
          setPosts(response.data.dataResponseList);
        });
    };
    getPostsByCategory(slug);

    console.log("data post:", posts);

    return () => {
      setPosts(null);
    };
  }, [slug]);

  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3
          mt-10 px-10 md:px-15 lg:px-32
          "
    >
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostItem {...post} key={post.title}></PostItem>)
      ) : (
        <div>Khong co Bai Viet</div>
      )}
    </div>
  );
};

export default PostCategory;
