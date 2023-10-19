import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label className="font-medium mb-1" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default Label;
