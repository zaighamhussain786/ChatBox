import React from "react";
import useConversation from "../../zustand/useConversation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { useSocketContext } from "../../context/SocketContext";

const MessageHeader = ({ isMobile }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation._id);
  const handleClick = () => {
    setSelectedConversation(null);
  };
  return (
    <>
      <div className="flex 4xs:gap-1 3xs:gap-2  2xs:gap-4 p-2 rounded-tr-xl bg-gray-600 ">
        {isMobile && (
          <span className=" text-2xl text-red-500 flex justify-center items-center">
            <PiArrowFatLinesLeftFill onClick={handleClick} />
          </span>
        )}
        <div className={`avatar ${isOnline? "online" : ""} `}>
          <div className=" 4xs:w-10 md:w-12 rounded-full bg-gray-300">
            <img src={selectedConversation.profilePic} />
          </div>
        </div>
        <div className="flex items-center font-bold text-gray-300">
          <p className="truncate 4xs:w-20 3xs:w-36 2xs:w-60 md:w-96 ">
            {selectedConversation.fullName}
          </p>
        </div>
      </div>
    </>
  );
};

export default MessageHeader;
