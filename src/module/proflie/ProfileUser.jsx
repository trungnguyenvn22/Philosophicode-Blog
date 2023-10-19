import React, { useEffect, useState } from "react";

const ProfileUser = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    const date = "2023/10/07 15:02:58";
    const formatDate = new Date(date).toLocaleDateString("vi-VI");
    setDate(formatDate);
  });
  return (
    <div>
      <h3>
        day la thoi gian o Viet Nam:
        {date}
      </h3>
    </div>
  );
};

export default ProfileUser;
