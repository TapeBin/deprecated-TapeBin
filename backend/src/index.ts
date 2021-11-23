import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import User from "./schemas/User";
import userRouting from "./routes/userRouting";
import binRouting from "./routes/binRouting";
const githubStrategy = require("./strategies/githubStrategy");
const app = express();
const PRODUCTION = process.env.PRODUCTION === "true";

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: PRODUCTION,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
  return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {
  User.findById(id, (err: mongoose.Error, document: any) => {
    return done(null, document);
  });
});

githubStrategy(passport, app);

app.use(userRouting);
app.use(binRouting);

mongoose
  .connect(
    `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`
  )
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(`Database error: ${err}`));


app.set("trust proxy", true);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
