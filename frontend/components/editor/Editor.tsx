import React, { FunctionComponent } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";
import { binsAtom } from "../../states/bins";
import { binFormAtom } from "../../states/binForm";
import { getLanguageModeWithIdAsString } from "../../utils/binUtil";

ace.config.set("basePath", "ace/");

type EditorProps = {
  mode?: string;
  value?: string;
  readOnly?: boolean | false;
  onChange?: (value: string) => void;
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
  const [settings, setEditor] = useAtom(editorAtom);
  const [bins] = useAtom(binsAtom);
  const [binForm] = useAtom(binFormAtom);

  const onChange = (value: string) => {
    setEditor(prevState => ({...prevState, text: value}))
    const currentBin = bins.bins.find(
      (foundBin) => foundBin.id === binForm.currentBinId
    );
    if (currentBin) {
      currentBin.text = value;
    }
  };

  return (
    <AceEditor
      height="100%"
      width="100%"
      value={props.value || settings.text}
      setOptions={{
        useWorker: false,
        fontSize: settings.fontSize,
        fontFamily: settings.fontFamily,
        showPrintMargin: settings.printMargin,
        tabSize: settings.tabWidth
      }}
      theme={settings.theme}
      mode={props.mode || getLanguageModeWithIdAsString(settings.mode) || settings.mode}
      readOnly={props.readOnly}
      onChange={onChange}
    />
  );
};

export default Editor;
