import React from "react";
import Editor from "../components/editor/Editor";
import Navbar from "../components/navbar/Navbar";
import dynamic from "next/dynamic";
const DynamicEditor = dynamic(
  () => {
    return import("../components/editor/Editor");
  },
  { ssr: false }
);

const Index = (props: any) => {
  return (
    <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
    </div>
  );
};

export default Index;
