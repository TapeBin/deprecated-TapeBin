import { PassportStatic } from "passport";
import { Express } from "express";
import mongoose from "mongoose";
import User from "../schemas/User";
const GithubStrategy = require("passport-github2").Strategy;

module.exports = function (passport: PassportStatic, app: Express) {
  passport.use(
    new GithubStrategy(
      {
        clientID: `${process.env.GITHUB_CLIENT_ID}`,
        clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
        callbackURL: `/api/auth/github/callback`,
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
            } else {
              done(null, document);
            }
          }
        );
      }
    )
  );

  app.get("/auth/github", passport.authenticate("github"));

  app.get(
    "/auth/github/callback",
    passport.authenticate("github", {
      failureRedirect: `localhost`,
    }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect(`http://localhost`);
    }
  );
};
