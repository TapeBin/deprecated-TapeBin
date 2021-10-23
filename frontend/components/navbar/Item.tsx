import React, { FunctionComponent } from "react";
import Link from "next/link";

type ItemProps = {
  link: string;
  text: string;
};

const Item: FunctionComponent<ItemProps> = (props: ItemProps) => {
  return (
    <Link href={props.link}>
      <a className="rounded sm:border-2 sm:p-2 sm:px-3 border-transparent outline-none  hover:border-3 hover:border-gray-600">
        {props.text}
      </a>
    </Link>
  );
};

export default Item;
