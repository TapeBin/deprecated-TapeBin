import { useAtom } from "jotai";
import React, { FunctionComponent, useState } from "react";
import { binFormAtom } from "../../../states/binForm";
import { binsAtom } from "../../../states/bins";
import { editorAtom } from "../../../states/editor";
import { Bin } from "../../../types/Bin";

type BinItemProps = {
  fileName: string;
  id: number;
  isOnId?: boolean;
};

const BinItem: FunctionComponent<BinItemProps> = (props: BinItemProps) => {
  const [bins, setBin] = useAtom(binsAtom);
  const [binForm, setBinForm] = useAtom(binFormAtom);
  const [_, setEditor] = useAtom(editorAtom);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bin: Bin = bins.bins.filter((bin) => bin.id === props.id)[0];
    bin.fileName = e.target.value;
  };

  const removeBin = () => {
    if (bins.bins.length - 1 > 0) {
      const filteredBins = bins.bins.filter((bin) => bin.id !== props.id);
      setBin((prevState) => ({
        ...prevState,
        bins: filteredBins,
      }));

      const firstBin = filteredBins[0];
      setBinForm((prevState) => ({
        ...prevState,
        currentBinId: firstBin.id,
      }));
      setEditor((prevState) => ({
        ...prevState,
        languageId: firstBin.languageId,
        text: firstBin.text,
      }));
    }
  };

  const binClick = () => {
    const currentBin = bins.bins.filter((bin) => bin.id === props.id)[0];

    setBinForm((prevState) => ({ ...prevState, currentBinId: props.id }));

    setEditor((prevState) => ({
      ...prevState,
      languageId: currentBin.languageId,
      text: currentBin.text,
    }));

  };

  return (
    <div
      style={{
        borderColor: binForm.currentBinId === props.id ? "#00C2FF" : "#404040",
      }}
      className="w-32 sm:w-60 flex flex-row justify-between rounded-md border-2 border-gray-700 p-2 px-3 cursor-pointer"
    >
      <input
        className="h-full bg-transparent truncate m-auto
        rounded focus:outline-none focus:border focus:border-gray-500
        px-2 py-1
        "
        placeholder={props.fileName}
        defaultValue={props.fileName}
        onChange={changeName}
        maxLength={35}
        onClick={binClick}
        onKeyDown={(event) => {
          if (props.isOnId) event.preventDefault();
        }}
        // disabled={props.isOnId}
      />
      <img
        src="./images/close.svg"
        alt="Remove"
        className="cursor-pointer"
        onClick={removeBin}
      />
    </div>
  );
};

export default BinItem;
