import React from "react";
import Input from "../form/Input";

const Formbar = () => {
  return (
    <div className="w-[280px] h-full bg-background text-gray-100">
      <div className="w-full h-full flex flex-col py-5 px-8 items-center">
        <div className="font-lobster text-5xl">Bin</div>
        <Input label="Title" />
        <Input label="File name" />
        <Input label="Language" />
        <Input label="Description" />
      </div>
    </div>
  );
};

export default Formbar;
