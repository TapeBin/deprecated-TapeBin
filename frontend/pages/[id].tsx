import React, { useEffect } from "react";
import Navbar from "../components/bar/Navbar";
import Formbar from "../components/bar/Formbar";
import Topbar from "../components/bar/Topbar";
import BinList from "../components/bins/BinList";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { useAtom } from "jotai";
import { binsAtom } from "../states/bins";
import { editorAtom } from "../states/editor";
import { binFormAtom } from "../states/binForm";
import { getLanguageModeWithIdAsString } from "../utils/binUtil";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const DynamicEditor = dynamic(
  () => {
    return import("../components/editor/Editor");
  },
  { ssr: false }
);

export const getServerSideProps: GetServerSideProps<{}, Record<"id", string>> = async ({ params }) => {
  const response = await fetch(`http://host.docker.internal/api/bin/${params!!.id}`);
  const json = await response.json();

  return {
    props: {
      bin: json,
      id: params!!.id
    }
  };

};


const ID = (props: any) => {
  const [_, setBin] = useAtom(binsAtom);
  const [__, setEditor] = useAtom(editorAtom);
  const [___, setBinForm] = useAtom(binFormAtom);
  const { trackPageView } = useMatomo();


  useEffect(() => {
    const bin = props.bin;
    setBin({
      title: bin.title,
      description: bin.description,
      bins: bin.bins
    });

    setBinForm({
      currentBinId: bin.bins[0].id
    });

    setEditor(prevState => ({
      ...prevState,
      mode: getLanguageModeWithIdAsString(bin.bins[0].languageId)!!,
      text: bin.bins[0].text
    }));

    trackPageView({
      documentTitle: `${props.id}`,
    });

  }, [props.bin]);

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
