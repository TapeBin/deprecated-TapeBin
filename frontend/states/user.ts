import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: false,
  username: undefined,
  githubId: undefined,
  discordId: undefined,
  profileImage: "/images/avatar.svg",
});
