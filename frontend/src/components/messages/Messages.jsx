import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeletons from "../../skeletons/MessageSkeletons";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);
  // console.log(messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="p-3 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1">
      {loading && [...Array(2)].map((_, idx) => <MessageSkeletons key={idx} />)}

      {!loading && messages.length === 0 && (
        <>
          <h1 className="text-center text-gray-300">
            Send a message to start conversation
          </h1>
          <div className="w-full flex justify-center items-center">
            <HiChatBubbleBottomCenterText className="w-10 h-10 mt-4 text-center text-red-500 rounded-full bg-gray-600 p-1 border-solid animate-jump" />
          </div>
        </>
      )}

      {!loading &&
        messages &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
