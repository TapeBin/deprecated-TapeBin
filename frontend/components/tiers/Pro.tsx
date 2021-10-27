import React, { FunctionComponent } from "react";
import Link from "next/link";

type ProProps = {
  fontSize?: string;
};

const Pro: FunctionComponent<ProProps> = (props: ProProps) => {
  return (
    <div
      className="font-black rounded sm:border-2 sm:p-2 border-transparent outline-none  hover:border-3 hover:border-gray-600"
      style={{ fontSize: props.fontSize }}
    >
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

Pro.defaultProps = {
  fontSize: "1rem",
};

export default Pro;
