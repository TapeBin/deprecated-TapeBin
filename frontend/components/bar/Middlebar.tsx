import React, { FunctionComponent } from "react";

const Middlebar: FunctionComponent = ({ children }) => {
  return <div className="w-full h-full flex flex-row">{children}</div>;
};

export default Middlebar;
