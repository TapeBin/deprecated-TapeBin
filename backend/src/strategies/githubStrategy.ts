import { PassportStatic } from "passport";
import { Express } from "express";
import mongoose from "mongoose";
import User from "schemas/User";
const GithubStrategy = require("passport-github2").Strategy;

module.exports = function (passport: PassportStatic, app: Express) {
  passport.use(
    new GithubStrategy(
      {
        clientID: `${process.env.GITHUB_CLIENT_ID}`,
        clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
        callbackURL: `${process.env.BACK_END}/auth/github/callback`,
      },
      function (_: any, __: any, profile: any, done: any) {
        User.findOne(
          { githubId: profile.id },
          async function (err: mongoose.Error, document: any) {
            if (err) return done(err, null);

            if (!document) {
              const newUser = new User({
                githubId: profile.id,
                username: profile.username,
                creationDate: Date.now(),
              });

              await newUser.save();
              done(null, newUser);
            }
            done(null, document);
          }
        );
      }
    )
  );

  app.get("/auth/github", passport.authenticate("github"));

  app.get(
    "/auth/github/callback",
    passport.authenticate(
      "github",
      { failureRedirect: `${process.env.FRONT_END}`, session: true },
      function (req, res) {
        res.redirect(`${process.env.FRONT_END}`);
      }
    )
  );
};