import mongoose from "mongoose";

const bin = new mongoose.Schema({
  binId: {
    unique: true,
    required: true,
    type: String
  },
  createdAt: {
    required: true,
    type: Date
  },
  ownerId: {
    required: false,
    type: String
  },
  title: {
    required: false,
    type: String
  },
  description: {
    required: false,
    type: String
  },
  bins: [{
    id: Number,
    fileName: String,
    languageId: String,
    text: String
  }],
});

export default mongoose.model("Bin", bin);
