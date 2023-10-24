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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/firebase-config";
import DashboardHeader from "../dashboard/DashboardHeader";
import ImageUpload from "../../components/Elements/image/ImageUpload";
import uploadDefaultImage from "../../assets/imgUpload.png";

const PostAddNew = () => {
  const editor = useRef(null);
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");
  const schema = yup.object({
    title: yup.string().required("Bạn chưa nhập tiêu đề bài viết"),
    slug: yup.string().required("Đường dẫn không được bỏ trống"),
  });
  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const user = getCurrentUserDatail();

  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // switch (snapshot.state) {
        //   case "paused":
        //     console.log("Upload is paused");
        //     break;
        //   case "running":
        //     console.log("Upload is running");
        //     break;
        //   default:
        //     console.log("nothing!");
        // }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageURL(downloadURL);
        });
      }
    );
  };
  const onSelectImage = (e) => {
    console.log("start function");
    const file = e.target.files[0];
    if (!file) return;

    handleUploadImage(file);
  };

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
        image: imageURL,
        slug: values.slug,
        createAt: null,
        updateAt: null,
        content: content,
        isDelete: false,
        categoryName: values.category,
        email: user.email,
      };

      console.log("values:", postData);

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
              <Label>Image:</Label>

              <label className="cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg relative overflow-hidden">
                <input
                  type="file"
                  className="hidden"
                  onChange={onSelectImage}
                />
                <div className="flex flex-col items-center text-center pointer-events-none">
                  {!imageURL && (
                    <img
                      className=""
                      src={uploadDefaultImage}
                      alt="img upload file"
                    />
                  )}
                  {imageURL && (
                    <img
                      className="w-full h-full object-cover"
                      src={imageURL}
                      alt="img upload file"
                    />
                  )}
                </div>
                <div className="absolute w-0 h-1 bg-green-400 bottom-0 left-0 transition-all"></div>
              </label>
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
