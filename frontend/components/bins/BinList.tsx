import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { binsAtom } from "../../states/bins";
import { editorAtom } from "../../states/editor";
import { Bin } from "../../types/Bin";
import BinItem from "../form/binlist/BinItem";

const BinList = () => {
  const [loaded, setLoaded] = useState(false);
  const [bins] = useAtom(binsAtom);
  const [editor] = useAtom(editorAtom);

  useEffect(() => {
    if (bins.bins.length === 0) {
      bins.bins.push(new Bin(0, "New File", 0, editor.mode));
    }

    setLoaded(true);
  }, []);

  return (
    <>
      {loaded &&
        bins.bins.map((bin: Bin) => (
          <BinItem title={bin.fileName} key={bin.id} />
        ))}
      <button></button>
    </>
  );
};

export default BinList;
