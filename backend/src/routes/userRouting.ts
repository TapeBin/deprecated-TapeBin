import { isAuthenticated } from "../utils/routeUtils";
import Configuration, { ConfigurationType } from "../schemas/Configuration";

const router = require("express").Router();

interface DiscordUser {
    avatar: string;
    discriminator: string;
    username: string;
    profileImage: string;
    creationDate: Date;
}

interface GithubUser {
    username: string;
    creationDate: Date;
}

router.get("/user", isAuthenticated, (req: any, res: any) => {
        if (req.user) {

            const username = req.session.username;
            const creationDate = req.user.creationDate;

            if (req.user.discordId) {
                const user = {
                    discordId: req.user.discordId,
                    avatar: req.session.avatar,
                    discriminator: req.session.discriminator,
                    profileImage: req.session.profileImage,
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
});

router.get("/user/logout", isAuthenticated, (req: any, res: any) => {
    req.logout();
    res.json({ logOut: true });
});

export default router;
