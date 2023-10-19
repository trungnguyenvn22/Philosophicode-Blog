import React from "react";

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto bg-gray-100 border rounded-lg">
      <table className="w-full">{children}</table>
    </div>
  );
};

export default Table;
