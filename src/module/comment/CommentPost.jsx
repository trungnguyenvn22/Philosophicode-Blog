import React, { useEffect, useState } from "react";
import { apiPrivate } from "../../service/api/axios";
import { set } from "lodash";
import Replies from "./Replies";
import { toast } from "react-toastify";
import { getCurrentUserDatail } from "../../service/userService";

const CommentPost = ({ postId }) => {
  console.log("post id:", postId);
  const [editMode, setEditMode] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState();
  const [commentContent, setCommentContent] = useState("");
  const getListComment = () => {
    apiPrivate
      .get(`/api/user/new/get-comment?postId=${postId}`)
      .then((response) => {
        setComments(response.data.dataResponseList);
        console.log("comment data", response.data);
      });
  };

  const handleCreateComment = () => {
    const comment = {
      parentId: null,
      content: commentContent,
      email: getCurrentUserDatail()?.email,
      postId: postId,
    };
    if (editMode == false) {
      if (commentContent == "") {
        toast.error("bạn cần nhập nội dung");
      } else {
        apiPrivate
          .post(`/api/user/new/add-comment`, comment)
          .then((response) => {
            console.log("comment response:", response.data);
          });
      }
      setCommentContent("");
      // setEditMode(!editMode);
    }
    setEditMode(!editMode);
    getListComment();
  };

  const handleAddReply = () => {
    console.log("comment id reply:", commentId);
    const reply = {
      parentId: commentId,
      content: replyContent,
      email: getCurrentUserDatail()?.email,
      postId: postId,
    };
    if (editMode == false) {
      if (replyContent == "") {
        toast.error("bạn cần nhập nội dung");
        return;
      } else {
        apiPrivate.post(`/api/user/new/add-comment`, reply).then((response) => {
          console.log("comment response:", response.data);
        });
      }
    }

    setEditMode(!editMode);
    setOpenReply(false);
  };

  useEffect(() => {
    getListComment();
    editMode;
  }, [postId, editMode]);

  return (
    <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div class="max-w-2xl mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <div class="mb-6">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              onChange={(e) => {
                setCommentContent(e.target.value);
              }}
              defaultValue={commentContent}
              id="comment"
              name="commentContent"
              rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
            ></textarea>
          </div>
          <button
            onClick={handleCreateComment}
            className="inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </div>
        {comments && comments.length > 0 ? (
          <div>
            {comments.map((item) => (
              <div key={item.id}>
                <div class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                  <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <img
                          class="mr-2 w-6 h-6 rounded-full"
                          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                          alt="user"
                        />
                        {item.username}
                      </p>

                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {/* <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Date updating
                      </time> */}
                      </p>
                    </div>
                    <button
                      id="dropdownComment1Button"
                      data-dropdown-toggle="dropdownComment1"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                      <span class="sr-only">Comment settings</span>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdownComment1"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p class="text-gray-500 dark:text-gray-400">{item.content}</p>
                  <div class="flex items-center mt-4 space-x-4">
                    <button
                      onClick={() => {
                        setOpenReply(!openReply);
                        setCommentId(item.id);
                      }}
                      type="button"
                      className="relative flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                    >
                      <svg
                        class="mr-1.5 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </div>
                <div>
                  {commentId == item.id && openReply == true ? (
                    <div className="mb-6">
                      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label for="comment" class="sr-only">
                          Your comment
                        </label>
                        <textarea
                          onChange={(e) => {
                            setReplyContent(e.target.value);
                          }}
                          id="comment"
                          name="commentContent"
                          rows="3"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..."
                        ></textarea>
                      </div>
                      <button
                        onClick={handleAddReply}
                        className="inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      >
                        Reply
                      </button>
                    </div>
                  ) : null}
                </div>

                <Replies commentId={item.id} openReply={openReply}></Replies>
              </div>
            ))}
            {/* {openReply == true ? (
              <div className="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    onChange={(e) => {}}
                    id="comment"
                    name="commentContent"
                    rows="3"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                  ></textarea>
                </div>
                <button className="inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Reply
                </button>
              </div>
            ) : null} */}
          </div>
        ) : (
          <div>Chưa có bình luận cho bài viết này</div>
        )}
      </div>
    </section>
  );
};

export default CommentPost;
