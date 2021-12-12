export const PRODUCTION = process.env.PRODUCTION === "true";

export const GITHUB_CLIENT_ID =
    PRODUCTION ? `${process.env.GITHUB_CLIENT_ID_PRODUCTION}`
        : `${process.env.GITHUB_CLIENT_ID_DEVELOPMENT}`;

export const GITHUB_CLIENT_SECRET =
    PRODUCTION ? `${process.env.GITHUB_CLIENT_SECRET_PRODUCTION}`
        : `${process.env.GITHUB_CLIENT_SECRET_DEVELOPMENT}`;
