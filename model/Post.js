import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    description: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    author: {
      type: String,
      unique: true,
      required: true,
    },
    likes: {
      type: Number,
    },
    dislike: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", PostSchema);
export default Post