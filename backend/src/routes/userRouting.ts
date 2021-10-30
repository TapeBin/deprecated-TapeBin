const router = require("express").Router();

router.get("/user", (req: any, res: any) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ loginFailed: true });
  }
});

export default router;
