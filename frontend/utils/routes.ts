export const PRODUCTION = process.env.PRODUCTION === "true";

export const FRONT_END_ROUTE = PRODUCTION ? "https://tapeb.in" : "http://localhost";
export const BACK_END_ROUTE = PRODUCTION ? "https://tapeb.in" : "http://host.docker.internal";