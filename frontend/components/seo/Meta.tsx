import React from "react";
import { NextSeo } from "next-seo";

const Meta = (props: any) => {

    return (
        <NextSeo
            title={props.title}
            description={props.description}
            titleTemplate={props.titleTemplate}
            additionalMetaTags={[
                {
                    property: "url",
                    content: props.url
                },
                {
                    property: "og:image",
                    content: "https://cdn.discordapp.com/attachments/759883351754145803/920448321104011294/logo_1.png"
                },
                {
                    property: "theme-color",
                    content: "#00C2FF"
                },
                {
                    property: "og:site_name",
                    content: "TapeBin"
                }
            ]}

        />
    );
}

export default Meta;