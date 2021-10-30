import mongoose from "mongoose";

const user = new mongoose.Schema({
  githubId: {
    required: false,
    type: String,
  },
  discordId: {
    required: false,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  creationDate: {
    required: true,
    type: Date,
  },
});

export default mongoose.model("User", user);
