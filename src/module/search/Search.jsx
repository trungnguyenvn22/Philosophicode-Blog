import React, { useEffect, useState } from "react";
import { handleDeletePost } from "../../service/PostService";
import { api } from "../../service/api/axios";
import { Navigate, useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const handleSearchPost = () => {
    console.log("strSearch", search);
    if (search != undefined) {
      navigate(`/home/posts/${search}`);
    }
  };

  return (
    <div className="relative bg-white shadow-lg p-3 rounded-lg -mt-5 mx-[25%]">
      <span className="absolute top-1/2 -translate-y-1/2">
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="7.66669"
            cy="7.05161"
            rx="6.66669"
            ry="6.05161"
            stroke="#999999"
            strokeWidth="1.5"
          />
          <path
            d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
            stroke="#999999"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
            stroke="#999999"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        name="input-search"
        className="relative max-w-[500px] w-full text-lg ml-10 pr-16 outline-none"
        type="text"
        placeholder="Typing ..."
        onChange={(event) => {
          console.log("input: ", event.target.value);

          setSearch(event.target.value);
        }}
      />
      <button
        onClick={handleSearchPost}
        className="absolute right-3 bg-blue-500 p-1 text-white rounded-xl hover:bg-blue-400 "
      >
        Search
      </button>
    </div>
  );
};

export default Search;
