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
              .slice(0, 2)
              .map((post) => (
                <PostThemeImgText key={post.title} {...post}></PostThemeImgText>
              ))
          : null}
      </div>
      <div className="flex flex-wrap">
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
        <PostThemeText></PostThemeText>
      </div>
    </div>
  );
};

export default ReactPostHome;
