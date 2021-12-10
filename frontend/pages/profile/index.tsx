import React, { useEffect, useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Profile from "../../components/profile/Profile";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { userAtom } from "../../states/user";

const Index = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [isLoggedIn, _] = useState(user.isLoggedIn);

  useEffect(() => {
    if(!isLoggedIn)
      router.push("/");
  }, []);

  return (
     <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
       {isLoggedIn && <Profile />}
    </div>
  );
};

export default Index;
