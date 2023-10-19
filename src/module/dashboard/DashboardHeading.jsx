import React from "react";

const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="mb-10 w-full border-b-2 border-gray-200">
      <div className="flex justify-between">
        <h1 className="items-start font-bold text-2xl mb-1 text-gray-600">
          {title}
        </h1>
        <h2 className="font-medium text-xl mb-1 text-gray-400">{desc}</h2>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
