import React from "react";
import Navbar from "../components/bar/Navbar";
import Formbar from "../components/bar/Formbar";
import Topbar from "../components/bar/Topbar";
import BinList from "../components/bins/BinList";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const DynamicEditor = dynamic(
  () => {
    return import("../components/editor/Editor");
  },
  { ssr: false }
);

export const getServerSideProps: GetServerSideProps<{}, Record<"id", string>> = async ({ params }) => {
  const response = await fetch(`${process.env.BACK_END}/bin/${params!!.id}`);
  const json = await response.json();

  return {
    props: {
      bin: json.document
    }
  };
};


const ID = (props: any) => {


  return (
    <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
      <Navbar/>
      <Formbar isOnId={true}/>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Topbar>
          <BinList isOnId={true}/>
        </Topbar>
        <DynamicEditor/>
      </div>
    </div>
  )
};

export default ID;
