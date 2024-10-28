import React, { useState } from "react";

import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (item) => {
    setSearch(item);
  };
  return (
    <>
      <div className="flex flex-2 flex-col m-0 p-3 4xs:w-full 3xs:w-full md:w-80  border-0 border-r-4 border-solid  border-r-slate-500 ">
        <SearchInput onSearch={handleSubmit} />
        <div className="overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent  m-0 p-0 mt-1 ">
          <Conversations search={search} />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
