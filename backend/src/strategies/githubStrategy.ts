import { PassportStatic } from "passport";
import { Express } from "express";
import mongoose from "mongoose";
import User from "../schemas/User";
import { FAILURE_REDIRECT, FRONT_END } from "../utils/routeUtils";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../utils/secrets";
const GithubStrategy = require("passport-github2").Strategy;

module.exports = function (passport: PassportStatic, app: Express) {
  passport.use(
    new GithubStrategy(
      {
        clientID: `${GITHUB_CLIENT_ID}`,
        clientSecret: `${GITHUB_CLIENT_SECRET}`,
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
      failureRedirect: FAILURE_REDIRECT,
    }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect(FRONT_END);
    }
  );
};
