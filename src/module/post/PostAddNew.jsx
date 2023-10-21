import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../../components/Elements/field";
import { Label } from "../../components/Elements/label";
import { Input } from "../../components/Elements/input";
import DashboardHeading from "../dashboard/DashboardHeading";
import JoditEditor from "jodit-react";
import { Button } from "../../components/Elements/button";
import { getCurrentUserDatail } from "../../service/userService";
import { addNewPost } from "../../service/PostService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DashboardHeader from "../dashboard/DashboardHeader";
const PostAddNew = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const schema = yup.object({
    title: yup.string().required("Must Have title"),
    slug: yup.string().required("Must Have slug"),
    image: yup.string().required("Must Have image link"),
  });
  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const user = getCurrentUserDatail();

  useEffect(() => {
    const errArr = Object.values(errors);
    if (errArr.length > 0) {
      toast.error(errArr[0]?.message);
    }
  }, [errors]);

  const handleAddNewPost = (values) => {
    try {
      const postData = {
        title: values.title,
        description: values.description,
        image: values.image,
        slug: values.slug,
        createAt: null,
        updateAt: null,
        content: content,
        isDelete: false,
        categoryName: values.category,
        email: user.email,
      };

      addNewPost(JSON.stringify(postData));
      toast.success("Thêm thành công bài viết!");
    } catch (err) {
      console.log(err);
      toast.error("Thêm bài viết thất bại, thử lại!");
    }
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="w-full">
        <DashboardHeading
          title="Add post"
          desc="Add post content"
        ></DashboardHeading>
      </div>
      <div className="p-3 ">
        <form onSubmit={handleSubmit(handleAddNewPost)}>
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
              <Button type="submit">Create Post</Button>
            </Field>
          </div>
          <Label>Content</Label>
          <div className=" border-b-2 border-gray-500">
            <JoditEditor
              ref={editor}
              value={content}
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

export default PostAddNew;
