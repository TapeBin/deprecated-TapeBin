import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import User from "schemas/User";
const app = express();
const PORT = 5001 || process.env.PORT;

app.use(
  cors({
    origin: `${process.env.FRONT_END}`,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: !!process.env.PRODUCTION,
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

mongoose
  .connect(
    `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`
  )
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(`Database error: ${err}`));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
