import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: false,
  username: "",
  githubId: "",
  discordId: "",
  profileImage: "/images/avatar.svg",
});
