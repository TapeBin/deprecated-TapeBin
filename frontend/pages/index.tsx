import React from "react";
import Editor from "../components/editor/Editor";
import Navbar from "../components/navbar/Navbar";
import dynamic from "next/dynamic";
import Form from "../components/form/Form";
const DynamicEditor = dynamic(
  () => {
    return import("../components/editor/Editor");
  },
  { ssr: false }
);

const Index = (props: any) => {
  return (
    <div className="flex flex-col" style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <Form />
      <DynamicEditor />
    </div>
  );
};

export default Index;
