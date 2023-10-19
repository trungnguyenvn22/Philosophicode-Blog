import React from "react";
import bannerImg from "../../assets/introbanner.png";
import Search from "../search/Search";
import Postlarge from "../post/Postlarge";
import SeeAll from "../category/SeeAll";
import PostItem from "../post/PostItem";
import PostAll from "../post/PostAll";
import { api } from "../../service/api/axios";

const HomeBanner = () => {
  return (
    <div className=" px-[70px] md:px-[100px] flex justify-center flex-col mt-10">
      <img className=" rounded-2xl " src={bannerImg} alt="" />
      <Search></Search>
    </div>
  );
};

export default HomeBanner;
