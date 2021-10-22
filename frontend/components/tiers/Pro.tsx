import React, { FunctionComponent } from "react";
import Link from "next/link";

type ProProps = {
  fontSize?: string | "1rem";
};

const Pro: FunctionComponent<ProProps> = (props: ProProps) => {
  return (
    <div className="font-black" style={{ fontSize: props.fontSize }}>
      <Link href="pro">
        <a className="flex space-x-3">
          <div>[ </div>
          <div className="text-proColor">PRO</div>
          <div> ]</div>
        </a>
      </Link>
    </div>
  );
};

export default Pro;
