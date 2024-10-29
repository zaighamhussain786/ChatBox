import React from "react";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div
      disabled={loading}
      onClick={logout}
      className="btn btn-circle z-10 flex items-center justify-center text-red-500 bg-inherit hover:bg-red-500 hover:text-gray-300 m-0 p-0 fixed left-4 bottom-4 "
    >
      {!loading ? (
        <BiLogOut size={24} className="outline-none" />
      ) : (
        <span className="loading loading-spinner "></span>
      )}
    </div>
  );
};

export default LogoutButton;
