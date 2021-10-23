import React from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";

ace.config.set("basePath", "ace/");

const Editor = () => {
  return (
    <AceEditor
      height="100%"
      width="100%"
      setOptions={{
        useWorker: false,
        cursorStyle: "smooth",
      }}
    />
  );
};

export default Editor;
