import { useAtom } from "jotai";
import React, { FunctionComponent } from "react";
import { binsAtom } from "../../../states/bins";
import { Bin } from "../../../types/Bin";

type BinItemProps = {
  fileName: string;
  id: number;
};

const BinItem: FunctionComponent<BinItemProps> = (props: BinItemProps) => {
  const [bins, setBin] = useAtom(binsAtom);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bin: Bin = bins.bins.filter((bin) => bin.id === props.id)[0];
    bin.fileName = e.target.value;
  };

  const removeBin = () => {
    if (bins.bins.length - 1 > 0) {
      setBin((prevState) => ({
        ...prevState,
        bins: bins.bins.filter((bin) => bin.id !== props.id),
      }));
    }
  };

  return (
    <div className="w-32 sm:w-60 flex flex-row justify-between rounded-md border-2 border-gray-700 p-2 px-3">
      <input
        className="bg-transparent truncate pr-1 sm:pr-2"
        placeholder={props.fileName}
        defaultValue={props.fileName}
        onChange={changeName}
        maxLength={35}
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
