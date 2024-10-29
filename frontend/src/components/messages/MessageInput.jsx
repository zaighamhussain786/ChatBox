import React, { useState } from "react";

import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" relative ">
        <input
          id="message"
          type="text"
          autoComplete="off"
          className="bg-gray-600 rounded-br-xl  outline-none text-gray-300 w-full p-3 pr-14 "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className=" absolute text-red-500 h-full inset-y-0 4xs:end-2 md:end-3 flex items-center justify-center p-0 m-0 ">
          <button
            disabled={loading}
            type="submit"
            className=" p-1 items-center m-0 bg-gray-700 text-center border-solid rounded-full "
          >
            {!loading ? (
              <RiSendPlaneFill size={24} />
            ) : (
              <div className="loading loading-spinner flex items-center justify-center "></div>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
