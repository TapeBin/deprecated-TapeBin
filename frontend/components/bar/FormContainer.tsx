import React, {FunctionComponent} from "react";
import Footer from "../footer/Footer";
import {useAtom} from "jotai";
import {pageAtom} from "../../pages/_app";

type FormContainerProps = {
    title: string;
}

const FormContainer: FunctionComponent<FormContainerProps> = (props) => {
    const [page] = useAtom(pageAtom);


    return (
        <>
            {!page.isBarHidden && <div
                className="w-[280px] flex-none overflow-y-auto h-full bg-background text-gray-100 border-r-2 border-gray-700">
                <div className="w-full h-full flex flex-col py-5 px-8 space-y-6 items-center justify-between">
                    <div className="flex flex-col space-y-6 items-center">
                        <div className="font-lobster text-5xl">{props.title}</div>
                        <div className="w-full h-full flex flex-col space-y-6">
                            {props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>}
        </>
    )
};

export default FormContainer;
