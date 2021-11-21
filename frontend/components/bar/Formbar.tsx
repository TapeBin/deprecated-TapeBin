import React, { FunctionComponent } from "react";
import Footer from "../footer/Footer";
import Button from "../form/Button";
import Input from "../form/Input";
import Selector, { SelectOption } from "../select/Selector";
import languages from "../../utils/json/languages.json";
import linguist from "../../utils/json/linguist.json";
import { ActionMeta } from "react-select";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";
import { binsAtom } from "../../states/bins";
import { binFormAtom } from "../../states/binForm";
import { Bin } from "../../types/Bin";
import axios from "axios";
import { useRouter } from "next/router";
import FormContainer from "./FormContainer";

type FormbarProps = {
  isOnId?: boolean;
};

const Formbar: FunctionComponent<FormbarProps> = (props: FormbarProps) => {
  const router = useRouter();
  const [editor, setEditor] = useAtom(editorAtom);
  const [bins, setBins] = useAtom(binsAtom);
  const [binForm, _] = useAtom(binFormAtom);
  const languagesArray = [];

  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      // TODO fix this with like a type or something
      // @ts-ignore
      languagesArray.push({ label: key, value: languages[key] });
    }
  }

  const onChange = (
    option: SelectOption | null,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    if (linguist.hasOwnProperty(option!!.value)) {
      console.log(editor.text);
      // @ts-ignore
      const languageExtension = linguist[option!!.value].aceMode;
      setEditor((prevState) => ({
        ...prevState,
        mode: option!!.value,
      }));

      const bin = bins.bins.find(
        (foundBin) => foundBin.id === binForm.currentBinId
      );

      if (bin) {
        bin.languageId = parseInt(option!!.value);
        bin.languageExtension = languageExtension;
        // console.log(bin.text);
        console.log(editor.text);
      }
    }
  };

  const sendBin = () => {
    axios(`${process.env.BACK_END}/bin/create`, { method: "POST", withCredentials: true, data: bins })
      .then((response: any) => {
        if (response.data.succeed) {
          navigator.clipboard.writeText(`https://tapeb.in/${response.data.url}`);
          router.push("[id]", `/${response.data.url}`, {shallow: true});
        }
      });
  };

  return (
    <FormContainer title="Bin">
          <Input label="Title" isOnId={props.isOnId}/>
          <Selector options={languagesArray} onChange={onChange} isOnId={props.isOnId}/>
          <Input label="Description" isOnId={props.isOnId}/>
          {!props.isOnId && <Button text="Save" onClick={sendBin}/>}
    </FormContainer>
  );
};

export default Formbar;
