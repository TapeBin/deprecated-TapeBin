import React, { FunctionComponent, useEffect } from "react";
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
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import FormContainer from "./FormContainer";
import {
    notifyEmptyBins,
    notifyFormattingError,
    notifyMoreThanXCharacters,
    notifySuccessfulBinCreation
} from "../../utils/notify";
import { exceedsMaxCharacters, getModeWithLanguageId, isEmptyBins } from "../../utils/binUtil";
import { beautify, canBeautify } from "../../utils/beautify/beautifier";
import Notification from "../notification/Notification";
import { pageAtom } from "../../pages/_app";

type FormbarProps = {
    isOnId?: boolean;
    title?: string;
    description?: string;
};

const Formbar: FunctionComponent<FormbarProps> = (props: FormbarProps) => {
    const router = useRouter();
    const [editor, setEditor] = useAtom(editorAtom);
    const [bins, setBins] = useAtom(binsAtom);
    const [binForm, _] = useAtom(binFormAtom);
    const [page] = useAtom(pageAtom);

    const languagesArray = [];

    useEffect(() => {
        if (props.isOnId) return;
        document.addEventListener("keydown", (event) => {
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 83) {
                event.preventDefault();
                sendBin();
            }
        });
    }, []);
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
            setEditor((prevState) => ({
                ...prevState,
                languageId: parseInt(option!!.value),
            }));

            const bin = bins.bins.find(
                (foundBin) => foundBin.id === binForm.currentBinId
            );

            if (bin) {
                bin.languageId = parseInt(option!!.value);
            }
        }
    };

    const sendBin = () => {
        if (isEmptyBins(bins.bins)) {
            notifyEmptyBins();
            return;
        }

        if (exceedsMaxCharacters(bins.bins)) {
            notifyMoreThanXCharacters();
            return;
        }

        axios(`bin/create`, { method: "POST", withCredentials: true, data: bins })
            .then((response: any) => {
                if (response.data.succeed) {
                    navigator.clipboard.writeText(`https://tapeb.in/${response.data.url}`);
                    notifySuccessfulBinCreation();
                    router.push("[id]", `/${response.data.url}`, { shallow: true });
                }
            });
    };

    const format = () => {
        const prettified = beautify(editor.text, getModeWithLanguageId(editor.languageId));
        if (!prettified) {
            notifyFormattingError();
            return;
        }

        setEditor(prevState => ({ ...prevState, text: prettified }));
    };

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBins(prevState => ({ ...prevState, title: event.target.value }));
    };

    const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBins(prevState => ({ ...prevState, description: event.target.value }));
    };

    return (
        <FormContainer title="Bin">
            {(page.notify || page.maintenance) && <Notification
                maintenance={page.maintenance}
                message={page.maintenance ? page.maintenanceNotification : page.notification}
                url={page.url}/>}
            <Input label="Title" isOnId={props.isOnId} onChange={onTitleChange} defaultValue={props.title || ""}/>
            <Selector options={languagesArray} onChange={onChange} isOnId={props.isOnId}/>
            <Input label="Description" isOnId={props.isOnId} maxLength={256} onChange={onDescriptionChange}
                   defaultValue={props.description || ""}/>
            {!props.isOnId && <Button text="Save" onClick={sendBin}/>}
            {!props.isOnId && canBeautify(editor.languageId) && <Button text={"Format"} onClick={format}/>}
        </FormContainer>
    );
};

export default Formbar;
