import React from "react";
import Navbar from "../components/navbar/Navbar";
import dynamic from "next/dynamic";
import Topbar from "../components/navbar/Topbar";
import BinItem from "../components/form/binlist/BinItem";
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
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Topbar>
          <BinItem title="sdokf hjsiodfh uiosdfhuisdhf isdhf" />
          <BinItem title="sdokf hjsiod" />
        </Topbar>
        <DynamicEditor />
      </div>
    </div>
  );
};

export default Index;
