import React from "react";
import Item from "../navbar/Item";
import Input from "./Input";

const Form = () => {
  return (
    <div className="bg-gray-800 min-w-full h-24 flex flex-row py-1 overflow-x-auto px-3 sm:px-10 space-x-5 text-white">
      <Input label="Title" />
      <Input label="File name" />
      <Input label="Description" />
    </div>
  );
};

export default Form;
