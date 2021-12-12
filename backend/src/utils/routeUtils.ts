import { PRODUCTION } from "./secrets";

export function isLoggedIn(req: any, res: any, next: any) {
  if (req.isAuthenticated())
    next();
  else res.redirect("http://localhost");
}

export const PRODUCTION_LINK = "https://tapeb.in";
export const DEVELOPMENT_LINK = "http://localhost";

export const FRONT_END = PRODUCTION ? PRODUCTION_LINK : DEVELOPMENT_LINK;
export const FAILURE_REDIRECT = PRODUCTION ? PRODUCTION_LINK : DEVELOPMENT_LINK