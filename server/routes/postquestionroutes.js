import { Router } from "express";
import { postQuestion } from "../controllers/postquestion.js";

const PostQroutes = Router();
PostQroutes.post('/postquestions', postQuestion);


export default PostQroutes;