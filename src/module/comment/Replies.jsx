import React, { useEffect, useState } from "react";
import { api, apiPrivate } from "../../service/api/axios";

const Replies = ({ commentId, openReply }) => {
  const [replies, setReplies] = useState([]);

  const getRepliesByCommentId = () => {
    apiPrivate
      .get(`/api/user/new/get-replies?commentId=${commentId}`)
      .then((response) => {
        console.log("replies:", response.data);
        setReplies(response.data.dataResponseList);
      });
  };
  useEffect(() => {
    getRepliesByCommentId();
  }, [commentId]);
  return (
    <div>
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

      {replies && replies.length > 0
        ? replies.map((r) => (
            <div
              class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
              key={r.id}
            >
              <div class="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      class="mr-2 w-6 h-6 rounded-full"
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                      alt="user"
                    />
                    {/* {getListRepliesByComment(item.id).username} */}
                    {r.username}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {/* <time
                      pubdate
                      datetime="2022-02-12"
                      title="February 12th, 2022"
                    >
                      Feb. 12, 2022
                    </time> */}
                  </p>
                </div>
                {/* <button
                  id="dropdownComment2Button"
                  data-dropdown-toggle="dropdownComment2"
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                </button> */}
              </div>
              <p class="text-gray-500 dark:text-gray-400">{r.content}</p>
              <div class="flex items-center mt-4 space-x-4"></div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Replies;
