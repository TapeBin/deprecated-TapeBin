import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

type NotificationType = {
    maintenance: boolean;
    message: string;
    url?: string;
};

const Notification: FunctionComponent<NotificationType> = (props: NotificationType) => {
    const router = useRouter();

    const onClick = () => {
        if (props.url)
            router.push(props.url);
    };

    return (
        <div
            onClick={onClick}
            className={`w-full flex flex-row justify-between
                rounded-md border-2 p-2 px-3 text-gray-100
                transition duration-300 ${props.maintenance ? "maintenance" : "notification"}
                 transform-gpu cursor-pointer`}>
            {props.message}
        </div>
    );
}

export default Notification;