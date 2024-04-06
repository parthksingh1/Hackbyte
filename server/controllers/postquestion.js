
import mongoose from "mongoose";
import Post from "../models/postschema.js";

const postQuestion = async (req, res, next) => {
    try {
      const { user, type, content, options } = req.body;
  
      const newPost = await Post.create({
        user,
        type,
        content,
        options,
        createdAt: new Date(),
        upvotes: [],
        downvotes: [],
      });
  console.log(newPost);
      if (newPost) {
        return res.json({ message: "Post created successfully", status: true });
      }
  
      return res.json({ message: "Failed to create post", status: false });
    } catch (error) {
      next(error);
    }
  };

export { postQuestion };
