import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { binsAtom } from "../../states/bins";
import { editorAtom } from "../../states/editor";
import { Bin } from "../../types/Bin";
import BinItem from "../form/binlist/BinItem";

const BinList = () => {
  const [loaded, setLoaded] = useState(false);
  const [bins, setBins] = useAtom(binsAtom);
  const [editor] = useAtom(editorAtom);

  useEffect(() => {
    if (bins.bins.length === 0) {
      bins.bins.push(new Bin(0, "New File", 0, editor.mode, ""));
    }
    setLoaded(true);
  }, []);

  const addBin = () => {
    const newArray: Bin[] = bins.bins;
    let max = 0;
    if (newArray.length > 0) {
      newArray.forEach((bin) => {
        if (bin.id > max) max = bin.id;
      });
    }

    max++;

    const newBin = new Bin(max, "New File", 0, editor.mode, "");
    newArray.push(newBin);

    setBins((prevState) => ({ ...prevState, bins: newArray }));
  };

  return (
    <>
      {loaded &&
        bins.bins.map((bin: Bin) => (
          <BinItem fileName={bin.fileName} id={bin.id} key={bin.id} />
        ))}
      <button
        className="rounded-md py-2 px-4 border-2 border-transparent hover:border-2 hover:border-proColor"
        onClick={addBin}
      >
        +
      </button>
    </>
  );
};

export default BinList;
