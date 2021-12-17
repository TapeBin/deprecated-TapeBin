import { isLoggedIn } from "../utils/routeUtils";
const router = require("express").Router();

interface DiscordUser {
  avatar: string;
  discriminator: string;
  username: string;
  creationDate: Date;
}

interface GithubUser {
  username: string;
  creationDate: Date;
}

router.get("/user",(req: any, res: any) => {

  if (req.user) {
    const username = req.session.username;
    const creationDate = req.user.creationDate;
    if (req.user.discordId) {
      const user = {
        discordId: req.user.discordId,
        avatar: req.session.avatar,
        discriminator: req.session.discriminator,
        username: username,
        creationDate: creationDate
      } as DiscordUser;
      res.json(user);
    } else {
      const user = {
        githubId: req.user.githubId, username, creationDate
      } as GithubUser;
      res.json(user);
    }

  } else { // Login failed
    res.json({ loginFailed: true });
  }

  // if (req.user) {
  //   console.log(req.user);
  //   res.json(req.user);
  // } else {
  //   res.json({ loginFailed: true });
  // }
});

router.get("/user/logout", isLoggedIn, (req: any, res: any) => {
  req.logout();
  res.json({ logOut: true });
});

export default router;
