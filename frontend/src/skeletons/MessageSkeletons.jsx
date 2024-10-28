import React from "react";

const MessageSkeletons = () => {
  return (
    <>
      <div className="flex w-full mb-4 flex-col gap-4">
        <div className="skeleton bg-gray-600 h-24 w-full"></div>
        <div className="skeleton bg-gray-600 h-4 w-28"></div>
        <div className="skeleton bg-gray-600 h-4 w-full"></div>
        <div className="skeleton bg-gray-600 h-4 w-full"></div>
      </div>
    </>
  );
};

export default MessageSkeletons;
