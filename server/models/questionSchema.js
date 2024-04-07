import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }, 
});

const questionSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  answers: [answerSchema],
},
{
  timestamps: true,
  collection: "questions",
})

const Question = mongoose.model("Question", questionSchema);

export default Question;
