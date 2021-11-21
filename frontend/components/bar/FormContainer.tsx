import React, { FunctionComponent } from "react";
import Footer from "../footer/Footer";

type FormContainerProps = {
  title: string;
}

const FormContainer: FunctionComponent<FormContainerProps> = (props) => {

  return (
    <div className="w-[280px] h-full bg-background text-gray-100 border-r-2 border-gray-700">
      <div className="w-full h-full flex flex-col py-5 px-8 space-y-6 items-center">
        <div className="font-lobster text-5xl">{props.title}</div>
        <div className="w-full h-full flex flex-col space-y-6">
          {props.children}
        </div>
        <Footer/>
      </div>
    </div>
  )
};

export default FormContainer;
