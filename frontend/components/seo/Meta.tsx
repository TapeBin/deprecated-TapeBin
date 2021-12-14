import React from "react";
import { NextSeo } from "next-seo";

const Meta = (props: any) => {

    // {...{
    //     title: props.title,
    //         description: props.description,
    //         additionalMetaTags: [
    //         {
    //             property: "url",
    //             content: props.url
    //         },
    //     ]
    // }}
    return (
        <NextSeo
            title={props.title}
            description={props.description}
            titleTemplate={props.titleTemplate}
            additionalMetaTags={[
                {
                    property: "url",
                    content: props.url
                }
            ]}

        />
    );
}

export default Meta;