import { PRODUCTION } from "./secrets";

export function isAuthenticated(req: any, res: any, next: any) {
    if (req.isAuthenticated())
        next();
     else res.redirect(FRONT_END);
}

export const PRODUCTION_LINK = "https://tapeb.in";
export const DEVELOPMENT_LINK = "http://localhost";

export const FRONT_END = PRODUCTION ? PRODUCTION_LINK : DEVELOPMENT_LINK;
export const FAILURE_REDIRECT = PRODUCTION ? PRODUCTION_LINK : DEVELOPMENT_LINK