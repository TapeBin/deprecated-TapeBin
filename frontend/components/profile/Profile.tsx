import React, { useEffect, useState } from "react";
import TopProfile from "./TopProfile";
import axios from "../../utils/axios";
import { AxiosResponse } from "axios";

const Profile = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/bin")
      .then((response: AxiosResponse<any>) => {
        console.log(response);
        setState(response.data);
      });
  }, []);

  return (
    <div className="flex flex-col px-[25px] py-[35px] bg-gray-800 w-full h-full ">
      <TopProfile amountOfBins={state.length}/>
    </div>
  );
};

export default Profile;
