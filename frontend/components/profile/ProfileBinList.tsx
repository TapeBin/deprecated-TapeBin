import React, { FunctionComponent } from "react";
import ProfileBin from "./ProfileBin";
import { getLanguageProperties } from "../../utils/binUtil";

type ProfileBinListProps = {
  bins: any[];
}

const ProfileBinList: FunctionComponent<ProfileBinListProps> = (props: ProfileBinListProps) => {



  return (
    <div className="mx-3 flex flex-col space-y-5 text-gray-100">
      {props.bins.map(bin =>
        <ProfileBin
          id={bin.binId}
          title={bin.title}
          description={bin.description}
          language={getLanguageProperties(bin.bins[0].languageId)}
          date={bin.creationDate}
          views={0}
        />
      )}
    </div>
  )
};

export default ProfileBinList;
