import React, { FunctionComponent, useEffect, useState } from "react";
import { LanguageProperties } from "../../utils/binUtil";
import { getFormattedDate } from "../../utils/dateUtil";
import { useRouter } from "next/router";

type ProfileBinProps = {
  id: string;
  title: string;
  description: string;
  language: LanguageProperties;
  date: Date;
  views: number;
  onClick?: () => void;
  onDelete?: () => void;
}

const ProfileBin: FunctionComponent<ProfileBinProps> = (props: ProfileBinProps) => {
  const router = useRouter();
  const [state, setState] = useState({
    color: props.language && props.language.color || "C7C7C7"
  })


  const openBin = () => {
    router.push(props.id);
  };

  return (
    <div className="flex flex-row justify-between text-gray-100 text-[17px]">
      <div className="flex flex-col space-y-1">
        {/*Title*/}
        <div className="text-binColor cursor-pointer" onClick={openBin}>
          {props.title || props.id}
        </div>

        {/*Description*/}
        <div>
          {props.description}
        </div>

        {/*Date & Views*/}
        <div className="flex flex-row space-x-2">
          {/*Date*/}
          <div className="flex flex-row items-center align-middle space-x-2">
            <img src="/images/calendar.svg" alt=""/>
            <div>
              {getFormattedDate(props.date)}
            </div>
          </div>
          {/*Views*/}
          <div className="flex flex-row items-center align-middle space-x-2">
            {/*Icon*/}
            <img src="/images/views.svg" alt=""/>
            <div>
              {props.views} views
            </div>
          </div>

        </div>

        {/*Language*/}
        <div className="flex flex-row items-center space-x-1.5">

          {/*Circle*/}
          <div style={{
            borderRadius: "50%",
            backgroundColor: `#${state.color}`,
            height: "12px",
            width: "12px"
          }}>

          </div>

          {/*Language name*/}
          <div>
            {props.language.name}
          </div>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
};

export default ProfileBin;
