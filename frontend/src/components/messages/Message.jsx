import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleBg = fromMe ? "bg-red-500" : "bg-gray-700";

  const messageShake = message.shouldShake ? "shake" : "";

  // console.log("senderid", message?.senderId);
  // console.log("auth", authUser?._id);
  // console.log(message);

  // Format the timestamp to show both date and time
  const formattedDateTime = message.createdAt
    ? new Date(message.createdAt).toLocaleString("en-US", {
        dateStyle: "medium", // Example: Oct 25, 2024
        timeStyle: "short", // Example: 5:30 PM
      })
    : "";

  // console.log(message.createdAt);

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-300">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>

        <div
          className={`chat-bubble text-gray-300 ${bubbleBg} ${messageShake} break-words`}
        >
          {message.message}
        </div>
        <div className="chat-footer text-xs opacity-50 text-gray-300 ">
          {formattedDateTime}
        </div>
      </div>
    </>
  );
};

export default Message;
