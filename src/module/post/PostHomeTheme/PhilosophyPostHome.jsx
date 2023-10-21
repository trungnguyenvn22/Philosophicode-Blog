import React, { useEffect, useState } from "react";
import PostThemeOne from "./PostThemeOne";
import { getPostsByCategory } from "../../../service/PostService";

const PhilosophyPostHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPostsByCategory("philosophy").then((response) => {
      console.log(response);

      setData(response.dataResponseList);
    });
  }, []);
  return (
    <div className="flex flex-wrap max-w-[72%] mx-auto">
      {data && data.length > 0
        ? data
            .slice(0, 8)
            .map((post) => (
              <PostThemeOne {...post} key={post.title}></PostThemeOne>
            ))
        : null}
    </div>
  );
};

export default PhilosophyPostHome;
