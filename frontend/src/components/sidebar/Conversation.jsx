import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-4 p-1 cursor-pointer ${
          isSelected ? "bg-red-500" : ""
        } `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full bg-gray-300">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex flex-1 items-center font-bold text-gray-300">
          <p className="truncate 4xs:w-16 3xs:w-36 md:w-56 ">
            {conversation.fullName}
          </p>
        </div>
      </div>

      <div className="divider h-0 m-0 p-0 "></div>
    </>
  );
};

export default Conversation;
