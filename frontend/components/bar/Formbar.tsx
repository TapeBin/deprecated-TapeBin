import React from "react";
import Footer from "../footer/Footer";
import Button from "../form/Button";
import Input from "../form/Input";
import Selector, { SelectOption } from "../select/Selector";
import languages from "../../utils/json/languages.json";
import { ActionMeta } from "react-select";

const Formbar = () => {
  const languagesArray = [];

  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      // TODO fix this with like a type or something
      // @ts-ignore
      languagesArray.push({ label: key, value: languages[key] });
    }
  }

  const onChange = (
    option: SelectOption | null,
    actionMeta: ActionMeta<SelectOption>
  ) => {};

  return (
    <div className="w-[280px] h-full bg-background text-gray-100 border-r-2 border-gray-700">
      <div className="w-full h-full flex flex-col py-5 px-8 space-y-6 items-center">
        <div className="font-lobster text-5xl">Bin</div>
        <div className="w-full h-full flex flex-col space-y-6">
          <Input label="Title" />
          <Selector options={languagesArray} onChange={onChange} />
          <Input label="Description" />
          <Button text="Save" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Formbar;
