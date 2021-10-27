import React, { FunctionComponent } from "react";

type BinItemProps = {
  title: string;
};

const BinItem: FunctionComponent<BinItemProps> = (props: BinItemProps) => {
  return (
    <div className="w-32 sm:w-60 flex flex-row justify-between rounded-md border-2 border-gray-700 p-2 px-3 ">
      <div className="truncate pr-1 sm:pr-2">{props.title}</div>
      <img src="./images/close.svg" alt="Remove" />
    </div>
  );
};

export default BinItem;
