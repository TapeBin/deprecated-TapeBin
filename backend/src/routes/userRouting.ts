const router = require("express").Router();

function isLoggedIn(req: any, res: any, next: any) {
  if (req.isAuthenticated()) next();
  else res.redirect(process.env.FRONT_END);
}

router.get("/user", (req: any, res: any) => {
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
