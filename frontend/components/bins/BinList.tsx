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
          <BinItem fileName={bin.fileName} id={bin.id} key={bin.id} />
        ))}
      <button className="rounded-md py-2 px-4 border-2 border-transparent hover:border-2 hover:border-proColor">
        +
      </button>
    </>
  );
};

export default BinList;
