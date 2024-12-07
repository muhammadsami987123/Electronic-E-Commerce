import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-center items-center ">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 h-8 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
