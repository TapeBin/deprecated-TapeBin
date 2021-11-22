export function isLoggedIn(req: any, res: any, next: any) {
  if (req.isAuthenticated())
    next();
  else res.redirect("http://frontend");
}
