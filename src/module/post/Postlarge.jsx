import React, { useEffect, useState } from "react";
import postLargeImg from "../../assets/introbanner.png";
import authorImg from "../../assets/login.jpg";
import PostImage from "./PostImage";

const Postlarge = () => {
  const [post, setPost] = useState();

  useEffect(() => {}, []);
  if (post == null) return null;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2
    mt-10 px-10 md:px-15 lg:px-32 gap-8
    border-b-blue-500
    "
    >
      <PostImage
        url={postLargeImg}
        alt="largeImg"
        className="h-full"
      ></PostImage>

      <div>
        <h4 className="text-red-500">ReactJs</h4>
        <h2 className="text-[23px] font-bold mt-5">
          SEC đang cho các công ty crypto một lý do để tháo chạy khỏi nước Mỹ
        </h2>
        <h4 className="line-clamp-6 text-gray-400 mt-5">
          Câu chuyện Ủy ban Chứng khoán và Giao dịch Mỹ (SEC) thể hiện thái độ
          không mấy thiện cảm với crypto có lẽ đã quá quen thuộc với các nhà đầu
          tư trên thị trường. Điều này vô hình chung tạo nên nỗi sợ khi thấy bất
          kỳ trang tin nào có tiêu đề gắn tên SEC trong đó. Những doanh nghiệp
          phát triển theo ngành crypto sẽ luôn cảm thấy bất an về quy định tại
          Mỹ, khi đã có nhiều bên chịu ảnh hưởng nặng nề do bị SEC cáo buộc
          những vấn đề mà họ không lường trước được.
        </h4>
        <div className="mt-5 flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={authorImg}
            alt=""
          />
          <div className="ml-2">
            <h3 className="font-bold">0xChun21</h3>
            <h3 className="text-gray-500 ">Mar 23</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postlarge;
