import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  type: {
    type: String,
    enum: ["question", "poll", "confession"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  options: [{ type: String }],

  upvotes: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      option: { type: Number },
    },
  ],
  downvotes: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      option: { type: Number },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
