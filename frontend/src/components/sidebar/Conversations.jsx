import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = ({ search }) => {
  const { loading, conversations } = useGetConversations();
  // console.log(conversations);

  const searchFilteredUsers = Array.isArray(conversations)
    ? conversations.filter((conversation) =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="divider p-0 m-0 mt-0 "></div>
      {searchFilteredUsers &&
        searchFilteredUsers.length > 0 &&
        searchFilteredUsers.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}
    </>
  );
};

export default Conversations;
