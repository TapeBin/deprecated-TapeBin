import React from "react";
import Item from "../navbar/Item";
import Input from "./Input";

const Form = () => {
  return (
    <div className="bg-gray-800 min-w-full h-20 flex flex-row items-center overflow-x-auto px-3 space-x-5 text-white">
      <Input label="Title" placeholder="Title" />
      <Input label="File name" placeholder="File name" />
      <Input label="Description" placeholder="Description" />
    </div>
  );
};

export default Form;
