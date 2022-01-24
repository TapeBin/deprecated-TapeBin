import { getCookieConsentValue } from "react-cookie-consent";

export const PRODUCTION = false;

export const FRONT_END_ROUTE = PRODUCTION ? "https://tapeb.in" : "http://localhost";
export const BACK_END_ROUTE = PRODUCTION ? "https://tapeb.in" : "http://host.docker.internal";

export const isCookieConsent = (): boolean => {
    return getCookieConsentValue() === "true";
}