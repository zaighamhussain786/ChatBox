import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessageContainer = ({ isMobile }) => {
  const { selectedConversation } = useConversation();

  return (
    <>
      <div className="flex 3xs:w-auto md:w-96 flex-1 flex-col  ">
        {selectedConversation ? (
          <>
            <MessageHeader isMobile={isMobile} />
            <Messages />
            <MessageInput />
          </>
        ) : (
          <NoChatSelected />
        )}
      </div>
    </>
  );
};

export default MessageContainer;
