import { useAtom } from "jotai";
import React, { FunctionComponent, useEffect, useState } from "react";
import { binsAtom } from "../../states/bins";
import { editorAtom } from "../../states/editor";
import { Bin } from "../../types/Bin";
import BinItem from "../form/binlist/BinItem";
import { getLanguageModeWithIdAsString } from "../../utils/binUtil";
import { notifyMoreThanTenBins } from "../../utils/notify";
import { MAX_BINS } from "../../utils/constants";

type BinListProps = {
  isOnId?: boolean;
};

const BinList: FunctionComponent<BinListProps> = (props: BinListProps) => {
  const [loaded, setLoaded] = useState(false);
  const [bins, setBins] = useAtom(binsAtom);
  const [editor] = useAtom(editorAtom);

  useEffect(() => {
    if (bins.bins.length === 0) {
      bins.bins.push(
        new Bin(
          0,
          "New File",
          parseInt(localStorage.getItem("mode") || "0"),
          editor.mode,
          ""
        )
      );
      // addBin();
    }
    setLoaded(true);
  }, []);

  const addBin = () => {
    if (bins.bins.length >= MAX_BINS) {
      notifyMoreThanTenBins();
      return;
    }

    const newArray: Bin[] = bins.bins;
    let max = 0;
    if (newArray.length > 0) {
      newArray.forEach((bin) => {
        if (bin.id > max) max = bin.id;
      });
    }

    max++;

    const newBin = new Bin(
      max,
      "New File",
      parseInt(localStorage.getItem("mode") || "0"),
      getLanguageModeWithIdAsString(localStorage.getItem("mode")!!)!!,
      ""
    );
    newArray.push(newBin);

    setBins((prevState) => ({ ...prevState, bins: newArray }));
  };

  return (
    <>
      {loaded &&
      bins.bins.map((bin: Bin) => (
        <BinItem fileName={bin.fileName} id={bin.id} key={bin.id} isOnId={props.isOnId}/>
      ))}
      {!props.isOnId && <button
        className="rounded-md py-2 px-4 border-2 border-transparent hover:border-2 hover:border-proColor"
        onClick={addBin}
      >
        +
      </button>}
    </>
  );
}
;

export default BinList;
