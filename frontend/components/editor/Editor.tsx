import React, { FunctionComponent } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";

ace.config.set("basePath", "ace/");

type EditorProps = {
  mode?: string;
  value?: string;
  readOnly?: boolean | false
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
  const [settings] = useAtom(editorAtom);

  return (
    <AceEditor
      height="100%"
      width="100%"
      value={props.value}
      setOptions={{
        useWorker: false,
        cursorStyle: "smooth",
        fontSize: settings.fontSize,
        fontFamily: settings.fontSize,
        showPrintMargin: settings.printMargin,
      }}
      theme={settings.theme}
      mode={props.mode || settings.mode}
      readOnly={props.readOnly}
    />
  );
};

export default Editor;
