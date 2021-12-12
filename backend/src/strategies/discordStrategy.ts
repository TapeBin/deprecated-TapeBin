import { PassportStatic } from "passport";
import User from "../schemas/User";
import { Express } from "express";
import * as mongoose from "mongoose";
import { FAILURE_REDIRECT, FRONT_END, isLoggedIn } from "../utils/routeUtils";

const DiscordStrategy = require("passport-discord").Strategy;
const scopes = ["identify", "email"];

module.exports = function (passport: PassportStatic, app: Express) {

  passport.use(
    new DiscordStrategy({
        clientID: `${process.env.DISCORD_CLIENT_ID}`,
        clientSecret: `${process.env.DISCORD_CLIENT_SECRET}`,
        callbackURL: `/api/auth/discord/callback`,
        scope: scopes
      },

      function (accessToken: string, refreshToken: string, profile: any, done: any) {
        User.findOne({ discordId: profile.id },
          async function (err: mongoose.Error, document: any) {
            if (err) return done(err, null);

            if (!document) {
              const newUser = new User({
                discordId: profile.id,
                username: profile.username,
                creationDate: Date.now(),
              });

              await newUser.save();
              done(null, newUser)
            } else {
              done(null, document);
            }

            app.get("/discordImage", isLoggedIn, (req: any, res: any) => {
              res.json(getAvatarURL(profile));
            });
          }
        );
      }
    )
  );

  function getAvatarURL(profile: any): string {
    if (profile.avatar) {
      const ext = profile.avatar.startsWith('a_') ? 'gif' : 'png';
      return `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${ext}`;
    }

    return `https://cdn.discordapp.com/embed/avatars/${Number(profile.discriminator) % 5}.png`;
  }

  app.get("/auth/discord", passport.authenticate("discord"));

  app.get(
    "/auth/discord/callback",
    passport.authenticate("discord", {
      failureRedirect: FAILURE_REDIRECT
    }),
    function (req, res) {
      res.redirect(FRONT_END);
    }
  );


}
