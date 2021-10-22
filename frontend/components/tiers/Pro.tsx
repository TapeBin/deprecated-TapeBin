import React, { FunctionComponent } from "react";

type ProProps = {
  fontSize?: string | "1rem";
};

const Pro: FunctionComponent<ProProps> = (props: ProProps) => {
  return (
    <div
      className="font-bold flex space-x-3"
      style={{ fontSize: props.fontSize }}
    >
      <div>[ </div>
      <div className="text-proColor">PRO</div>
      <div> ]</div>
    </div>
  );
};

export default Pro;
