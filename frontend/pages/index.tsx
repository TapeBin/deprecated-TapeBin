import React, { useEffect } from "react";
import Navbar from "../components/bar/Navbar";
import dynamic from "next/dynamic";
import Topbar from "../components/bar/Topbar";
import Formbar from "../components/bar/Formbar";
import BinList from "../components/bins/BinList";
// import { useMatomo } from "@datapunt/matomo-tracker-react";
const DynamicEditor = dynamic(
  () => {
    return import("../components/editor/Editor");
  },
  { ssr: false }
);


const Index = () => {
  // const { trackPageView } = useMatomo();

  // useEffect(() => {
  //   trackPageView({
  //     documentTitle: "Index",
  //   });
  // }, []);


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
