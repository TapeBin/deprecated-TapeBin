import React, { FunctionComponent } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { userAtom } from "../../states/user";

type ProfileIconProps = {
    src: string;
    alt: string;
    onClick?: () => void;
};

const ProfileIcon: FunctionComponent<ProfileIconProps> = (
    props: ProfileIconProps
) => {
    const [user] = useAtom(userAtom);
    return (
        <>
            {props.src && <Image
                src={user.isLoggedIn && `${props.src}` || props.src}
                alt={props.alt}
                className="h-[35px] cursor-pointer rounded-2xl"
                onClick={props.onClick}
                height={35}
                width={35}

            />}
        </>
    );
};

export default ProfileIcon;
