import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import messageAudio from "../assets/sound/messageAudio.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      if (selectedConversation?._id === newMessage.senderId) {
        newMessage.shouldShake = true;
        const messageSound = new Audio(messageAudio);
        messageSound.play();
        setMessages([...messages, newMessage]);
      }
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
