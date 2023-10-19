import React, { useEffect, useState } from "react";
import { Table } from "../../components/Elements/table";
import DashboardHeading from "../dashboard/DashboardHeading";
import { ActionDelete, ActionUpdate } from "../../components/action";
import Swal from "sweetalert2";
import { getAllPost, handleDeletePost } from "../../service/PostService";
import Search from "../search/Search";
import { useNavigate } from "react-router-dom";

const PostManage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      getAllPost().then((response) => {
        console.log("response: ", response);

        setData(response.dataResponseList);
      });
    } catch (err) {
      console.log(err);
    }
    return () => {};
  }, []);
  return (
    <div className="max-w-[90%] mx-auto">
      <DashboardHeading
        title="Post Manage"
        desc="Update and Delete"
      ></DashboardHeading>
      <div className="m-5">
        <Search></Search>
      </div>
      <div>
        <Table>
          <thead className="bg-gray-200">
            <tr>
              <th className="align-middle whitespace-nowrap px-7 py-5 font-semibold text-left">
                Id
              </th>
              <th className="align-middle whitespace-nowrap px-7 py-5 font-semibold text-left">
                Post
              </th>
              <th className="align-middle whitespace-nowrap px-7 py-5 font-semibold text-left">
                Category
              </th>
              <th className="align-middle whitespace-nowrap px-7 py-5 font-semibold text-left">
                Author
              </th>
              <th className="align-middle whitespace-nowrap px-7 py-5 font-semibold text-left">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0
              ? data.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td className="!pr-[100px] align-middle whitespace-nowrap px-7 py-4">
                      <div className="flex items-center gap-x-3">
                        <img
                          src={item.image}
                          alt=""
                          className="w-[66px] h-[55px] rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <time className="text-sm text-gray-500">Date:</time>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-gray-500">{item.categoryName}</span>
                    </td>
                    <td className="align-middle whitespace-nowrap">
                      <span className="text-gray-500">{item.authorName}</span>
                    </td>

                    <td>
                      <div className="flex items-center text-gray-500 gap-x-3">
                        {/* <ActionView
                        onClick={() => navigate(`/${post.slug}`)}
                      ></ActionView> */}
                        <ActionUpdate
                          // onClick={() =>
                          //   navigate(`/manage/update-post?id=${post.id}`)
                          // }
                          onClick={() => {
                            navigate(`/dashboard/update-post/post/${item.id}`);
                          }}
                        ></ActionUpdate>
                        <ActionDelete
                          onClick={() => {
                            handleDeletePost(item.id);
                            console.log("delete");
                          }}
                          // onClick={() => handleDeletePost(post.id)}
                        ></ActionDelete>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
            <tr>
              <td>1</td>
              <td className="!pr-[100px] align-middle whitespace-nowrap px-7 py-4">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-[66px] h-[55px] rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">Title</h3>
                    <time className="text-sm text-gray-500">Date:</time>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-gray-500">CategoryName</span>
              </td>
              <td className="align-middle whitespace-nowrap">
                <span className="text-gray-500">Author</span>
              </td>

              <td>
                <div className="flex items-center text-gray-500 gap-x-3">
                  {/* <ActionView
                        onClick={() => navigate(`/${post.slug}`)}
                      ></ActionView> */}
                  <ActionUpdate

                  // onClick={() =>
                  //   navigate(`/manage/update-post?id=${post.id}`)
                  // }
                  ></ActionUpdate>
                  <ActionDelete
                    onClick={() => {
                      handleDeletePost();
                      console.log("delete");
                    }}
                    // onClick={() => handleDeletePost(post.id)}
                  ></ActionDelete>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PostManage;
