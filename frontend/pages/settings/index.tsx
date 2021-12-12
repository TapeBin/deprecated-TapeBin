import React, { useEffect, useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Topbar from "../../components/bar/Topbar";
import dynamic from "next/dynamic";
import Settingsbar from "../../components/bar/Settingsbar";

const DynamicEditor = dynamic(
    () => {
        return import("../../components/editor/Editor");
    },
    { ssr: false }
);

const TEXT = `function reverse(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}
`;


const Index = () => {
    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
            <Navbar/>
            <Settingsbar/>
            <div className="flex flex-col w-full h-full overflow-hidden">
                <Topbar>
                </Topbar>
                <DynamicEditor value={TEXT} mode={"javascript"}/>
            </div>
        </div>
    )
};

export default Index;
