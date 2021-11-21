import React, { FunctionComponent } from "react";

const Topbar: FunctionComponent = ({ children }) => {
  return (
    <div className="h-[70px] bg-background text-gray-100 px-4 overflow-x-auto flex flex-row space-x-4 items-center border-b-2 border-gray-700">
      {children}
    </div>
  );
};

export default Topbar;
