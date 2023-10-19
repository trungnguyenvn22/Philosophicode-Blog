import React, { useEffect, useState } from "react";
import PostThemeOne from "./PostThemeOne";
import PostThemeLarge from "./PostThemeLarge";
import { getPostsByCategory } from "../../../service/PostService";
import { iteratee } from "lodash";

const JavaPostHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPostsByCategory("java").then((response) => {
      console.log(response);

      setData(response.dataResponseList);
    });
  }, []);
  return (
    <div className="flex max-w-[70%] mx-auto my-10">
      <div>
        {data && data.length > 0
          ? data.map((post) => (
              <PostThemeLarge {...post} key={post.title}></PostThemeLarge>
            ))
          : null}
      </div>

      <div>
        <PostThemeOne></PostThemeOne>
        <PostThemeOne></PostThemeOne>
        <PostThemeOne></PostThemeOne>
        <PostThemeOne></PostThemeOne>
      </div>
    </div>
  );
};

export default JavaPostHome;
