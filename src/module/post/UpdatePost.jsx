import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/Elements/field";
import { Label } from "../../components/Elements/label";
import { Input } from "../../components/Elements/input";
import { Button } from "../../components/Elements/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "../../service/api/axios";
import { update } from "lodash";
import { updatePost } from "../../service/PostService";

const UpdatePost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { id } = useParams();
  const [postData, setPostData] = useState();

  const { control, handleSubmit, register, reset, setValue } = useForm({
    mode: "onChange",
    defaultValues: async () => {
      await api.get(`/view/get-post?id=1`).then((response) => {
        console.log("data", response.data);
        if (response?.data) {
          return {
            title: response.data.dataResponse.title,
          };
        }
      });
    },
  });

  const handleUpdatePost = (values) => {
    try {
      const post = {
        title: values.title,
        description: values.description,
        image: values.image,
        slug: values.slug,
        content: content,
        categoryName: values.category,
      };

      updatePost(id, post).then((response) => {
        console.log(response);
      });

      //   addNewPost(JSON.stringify(postData));
      //   toast.success("Thêm thành công bài viết!");
    } catch (err) {
      console.log(err);
      toast.error("Thêm bài viết thất bại, thử lại!");
    }
  };
  useEffect(() => {
    const getPostById = async (id) => {
      await api.get(`/view/get-post?id=${id}`).then((response) => {
        console.log("data", response.data);
        if (response?.data) {
          setPostData(response.data.dataResponse);
        }
      });
    };
    getPostById(id);
    if (postData) {
    }
  }, [id]);
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="w-full">
        <DashboardHeading
          title="Post Update"
          desc="Update post content"
        ></DashboardHeading>
      </div>
      <div className="p-3 ">
        <form onSubmit={handleSubmit(handleUpdatePost)}>
          <div className="grid grid-cols-2 gap-x-10 mb-10">
            <Field>
              <Label htmlFor="post-title">Post Title:</Label>
              <Input
                name="title"
                placeholder="Enter title ..."
                type="text"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Slug</Label>
              <Input
                name="slug"
                type="text"
                placeholder="Enter your slug..."
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Category</Label>
              <Input
                name="category"
                type="text"
                placeholder="Enter"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Image public:</Label>
              <Input
                name="image"
                type="text"
                placeholder="Enter your slug..."
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="post-title">Post Description:</Label>
              <Input
                name="description"
                placeholder="Enter description ..."
                type="text"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Button type="submit">Update Post</Button>
            </Field>
          </div>
          <Label>Content</Label>
          <div className=" border-b-2 border-gray-500">
            <JoditEditor
              ref={editor}
              value={postData ? postData.content : content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
