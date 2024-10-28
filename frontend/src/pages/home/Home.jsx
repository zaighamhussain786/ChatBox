import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  // console.log(selectedConversation);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleWidthResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleWidthResize);
    return () => {
      window.removeEventListener("resize", handleWidthResize);
    };
  }, []);

  return (
    <div className="flex bg-brown- 4xs:w-full 3xs:w-full md:w-auto 3xs:h-full 4xs:h-full  md:h-4/5 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      {!isMobile ? (
        <>
          <Sidebar /> <MessageContainer />
        </>
      ) : (
        <>
          {!selectedConversation ? (
            <Sidebar />
          ) : (
            <MessageContainer isMobile={isMobile} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
