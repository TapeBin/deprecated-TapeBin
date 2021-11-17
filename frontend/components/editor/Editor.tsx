import React, { FunctionComponent } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";
import { binsAtom } from "../../states/bins";
import { binFormAtom } from "../../states/binForm";

ace.config.set("basePath", "ace/");

type EditorProps = {
  mode?: string;
  value?: string;
  readOnly?: boolean | false;
  onChange?: (value: string) => void;
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
  const [settings] = useAtom(editorAtom);
  const [bins] = useAtom(binsAtom);
  const [binForm] = useAtom(binFormAtom);

  const onChange = (value: string) => {
    const currentBin = bins.bins.find(
      (foundBin) => foundBin.id === binForm.currentBinId
    );
    if (currentBin) {
      currentBin.text = value;
    }
    console.log(value);
  };

  return (
    <AceEditor
      height="100%"
      width="100%"
      value={settings.text}
      setOptions={{
        useWorker: false,
        fontSize: settings.fontSize,
        fontFamily: settings.fontSize,
        showPrintMargin: settings.printMargin,
      }}
      theme={settings.theme}
      mode={props.mode || settings.mode}
      readOnly={props.readOnly}
      onChange={onChange}
    />
  );
};

export default Editor;
