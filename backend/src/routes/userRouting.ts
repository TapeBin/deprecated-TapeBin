import { isLoggedIn } from "../utils/routeUtils";
const router = require("express").Router();

router.get("/user",(req: any, res: any) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ loginFailed: true });
  }
});

router.get("/user/logout", isLoggedIn, (req: any, res: any) => {
  req.logout();
  res.json({ logOut: true });
});

export default router;
