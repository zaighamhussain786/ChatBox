import React from "react";
import { RiRobot2Fill } from "react-icons/ri";
import { useAuthContext } from "../../context/AuthContext";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className=" flex gap-3  justify-center flex-col items-center min-w-96 h-full p-4">
      <h1 className="items-center text-xl text-gray-300 font-bold">Welcome</h1>
      <div className="flex w-auto justify-center items-center bg-gray-600 rounded-br-3xl rounded-tl-3xl pl-2 pr-4 py-6 text-red-500 font-bold ">
        <div className=" h-10 w-10 ">
          <img src={authUser.profilePic} alt="" />
        </div>
        <div className="max-w-64 truncate">{authUser.fullName}</div>
      </div>
      <h1 className="text-gray-400">Select a chat to start</h1>
      <RiRobot2Fill className=" w-16 h-16 text-red-500 rounded-full bg-gray-600 p-3 border-solid animate-jump " />
    </div>
  );
};

export default NoChatSelected;
