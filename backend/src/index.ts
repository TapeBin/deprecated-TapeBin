import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const PORT = 5001 || process.env.PORT;

app.use(
  cors({
    origin: `${process.env.FRONT_END}`,
    credentials: true,
  })
);

mongoose
  .connect(
    `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`
  )
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(`Database error: ${err}`));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
