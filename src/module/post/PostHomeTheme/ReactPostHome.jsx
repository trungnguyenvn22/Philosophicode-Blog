import React, { useEffect, useState } from "react";
import PostThemeImgText from "./PostThemeImgText";
import PostThemeText from "./PostThemeText";
import { getPostsByCategory } from "../../../service/PostService";

const ReactPostHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPostsByCategory("reactjs").then((response) => {
      setData(response.dataResponseList);
    });
  }, []);
  return (
    <div className="max-w-[70%] mx-auto">
      <div className="flex">
        {data && data.length > 0
          ? data
              .slice(0, 3)
              .map((post) => (
                <PostThemeImgText key={post.id} {...post}></PostThemeImgText>
              ))
          : null}
      </div>
      <div className="flex flex-wrap">
        {data && data.length > 0
          ? data
              .slice(3, 12)
              .map((post) => (
                <PostThemeText key={post.id} {...post}></PostThemeText>
              ))
          : null}
      </div>
    </div>
  );
};

export default ReactPostHome;
