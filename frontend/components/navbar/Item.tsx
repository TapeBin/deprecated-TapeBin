import React, { FunctionComponent } from "react";
import Link from "next/link";

type ItemProps = {
  link: string;
  text: string;
};

const Item: FunctionComponent<ItemProps> = (props: ItemProps) => {
  return (
    <Link href={props.link}>
      <a style={{ color: "white" }}>{props.text}</a>
    </Link>
  );
};

export default Item;
