import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type MarkdownContainerProps = {
    fileName: string;
};

const MarkdownContainer: FunctionComponent<MarkdownContainerProps> = (props: MarkdownContainerProps) => {
    const [state, setState] = useState<any>();
    useEffect(() => {

        import(`../../utils/markdown/${props.fileName}.md`
            ).then(resp => setState(JSON.parse(JSON.stringify(resp)).default))

        //     .then(response => {
        //         fetch(response.default)
        //             .then(response => response.text())
        //             .then(text => {
        //                 setState(text)
        //             });
        //     }).catch(err => console.log(err));

    }, []);

    return (
        <ReactMarkdown children={state} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="prose w-full mr-0"/>
    );
}

export default MarkdownContainer;