import React, { useEffect } from "react";
import { useRouter } from "next/router";

const _error = () => {
    const router = useRouter();

    useEffect(() => {
            router.push("/404", undefined, {shallow: true});
    }, []);

    return (
        <></>
    );
}

export default _error;