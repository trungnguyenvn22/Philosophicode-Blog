import axios from "axios";
import { api, apiPrivate } from "./api/axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { method, result } from "lodash";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
export const addNewPost = async (postData) => {
  return await apiPrivate
    .post("/api/new/add-post", postData)
    .then((response) => {
      response.data;
    });
};

export const getPostBySlug = (slug) => {
  return api.get(`/view/get-post-by-slug?slug=${slug}`);
};

export const getAllPost = () => {
  // return api.get("/view/posts");
  return axios.get("http://localhost:8080/view/posts").then((response) => {
    return response.data;
  });
};

export const searchPostByName = (strSearch) => {
  return api
    .get(`/view/search-post-by-name?strSearch=${strSearch}`)
    .then((response) => {
      return response.data;
    });
};

const MySwal = withReactContent(Swal);
export const handleDeletePost = (postId) => {
  MySwal.fire({
    title: "Bạn có muốn xóa bài viết này không?",
    text: "bạn sẽ không thể lấy lại được sau khi xóa",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, xóa bài viết",
    cancelButtonText: "Quay lại",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiPrivate
        .post(`/api/remove/remove-post?id=${postId}`)
        .then((response) => {
          if (response.data && response.data?.dataResponse == true) {
            Swal.fire("Done!", "Đã xóa bài viết thành công", "success");
          } else {
            Swal.fire("Thất bại!", "Xóa bài viết thất bại", "warning");
          }
        });
    }
  });
};
export const updatePost = async (id, post) => {
  await apiPrivate
    .post(`/api/edit/update-post?id=${id}`, post)
    .then((response) => {
      response.data;
    });
};

export const getPostsByCategory = async (slug) => {
  return await api
    .get(`/view/posts-by-category-slug?slug=${slug}`)
    .then((response) => {
      return response.data;
    });
};
