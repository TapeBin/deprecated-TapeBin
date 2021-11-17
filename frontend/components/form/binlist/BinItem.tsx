import { useAtom } from "jotai";
import React, { FunctionComponent, useState } from "react";
import { binFormAtom } from "../../../states/binForm";
import { binsAtom } from "../../../states/bins";
import { editorAtom } from "../../../states/editor";
import { Bin } from "../../../types/Bin";

type BinItemProps = {
  fileName: string;
  id: number;
};

const BinItem: FunctionComponent<BinItemProps> = (props: BinItemProps) => {
  const [bins, setBin] = useAtom(binsAtom);
  const [binForm, setBinForm] = useAtom(binFormAtom);
  const [editor, setEditor] = useAtom(editorAtom);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bin: Bin = bins.bins.filter((bin) => bin.id === props.id)[0];
    bin.fileName = e.target.value;
  };

  const getBin = (): Bin => {
    return bins.bins.filter((bin) => bin.id === props.id)[0];
  };

  const removeBin = () => {
    if (bins.bins.length - 1 > 0) {
      setBin((prevState) => ({
        ...prevState,
        bins: bins.bins.filter((bin) => bin.id !== props.id),
      }));
      const firstBin = bins.bins[0];
      console.log(firstBin);
      console.log(firstBin.id);
      setBinForm((prevState) => ({
        ...prevState,
        currentBinId: 0,
      }));
      console.log(binForm);
      setEditor((prevState) => ({
        ...prevState,
        mode: firstBin.languageExtension,
        text: firstBin.text,
      }));
      console.log("test");
    }
  };

  const binClick = () => {
    setBinForm((prevState) => ({ ...prevState, currentBinId: props.id }));
    setEditor((prevState) => ({
      ...prevState,
      mode: getBin().languageExtension,
      text: getBin().text,
    }));
    // console.log(props.id);
    console.log("Asdasdasdasda");
  };

  return (
    <div
      style={{
        borderColor: binForm.currentBinId === props.id ? "#00C2FF" : "#404040",
      }}
      className="w-32 sm:w-60 flex flex-row justify-between rounded-md border-2 border-gray-700 p-2 px-3 cursor-pointer"
    >
      <input
        className="bg-transparent truncate pr-1 sm:pr-2"
        placeholder={props.fileName}
        defaultValue={props.fileName}
        onChange={changeName}
        maxLength={35}
        onClick={binClick}
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
