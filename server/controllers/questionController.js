import mongoose from "mongoose";
import Question from "../models/questionSchema.js";

// @route POST /api/v1/questions
export const postQuestion = async (req, res) => {
  console.log(req.body);
  const {userId, text} = req.body;
  try {
    const question = await Question.create({userId, text});
    res.status(201).json({success: true, data: question});
  } catch (error) {
    res.status(400).json({success: false, error: error.message});
  }
};

// @route GET /api/v1/questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}, { userId: 0 }).lean();
    res.status(200).json({success: true, data: questions});
  } catch (error) {
    res.status(400).json({success: false, error: error.message});
  }
}