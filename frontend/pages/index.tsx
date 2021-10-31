import React from "react";
import Navbar from "../components/bar/Navbar";
import dynamic from "next/dynamic";
import Topbar from "../components/bar/Topbar";
import BinItem from "../components/form/binlist/BinItem";
import Middlebar from "../components/bar/Middlebar";
import Formbar from "../components/bar/Formbar";
import BinList from "../components/bins/BinList";
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
      <Formbar />
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Topbar>
          <BinList />
        </Topbar>
        <DynamicEditor />
      </div>
    </div>
  );
};

export default Index;
