import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { atom, useAtom } from "jotai";

type MarkdownContainerProps = {
    fileName: string;
};


const MarkdownContainer: FunctionComponent<MarkdownContainerProps> = (props: MarkdownContainerProps) => {
    const [state, setState] = useState<any>();
    useEffect(() => {

        import(`../../utils/markdown/${props.fileName}.md`
            ).then(resp => {
            setState(JSON.parse(JSON.stringify(resp)).default);
        })

        //     .then(response => {
        //         fetch(response.default)
        //             .then(response => response.text())
        //             .then(text => {
        //                 setState(text)
        //             });
        //     }).catch(err => console.log(err));

    }, []);

    return (
        <ReactMarkdown children={state} remarkPlugins={[remarkGfm, remarkToc]} rehypePlugins={[rehypeRaw, rehypeSlug]}
                       className="prose w-full mr-0" />
    );
}

export default MarkdownContainer;