import Question from "../models/questionSchema";

export const createAnswer = async (res, req) => {
    const { questionId } = req.params;
    const { text } = req.body;

    try {
        const question = await Question.findById(questionId);
        if(!question) {
            return res.status(404).json({success: false, error: "Question not found"});
        }
        question.answers.push({text});
        await question.save();

        res.status(201).json({success: true, data: question});
    } catch (error) {
        res.status(400).json({success: false, error: error.message});
    }
}

export const upvoteAnswer = async (res, req) => {
    const { questionId, answerId } = req.params;

    try {
        const question = await Question.findById(questionId);
        if(!question) {
            return res.status(404).json({success: false, error: "Question not found"});
        }
        const answer = question.answers.id(answerId);
        if (!answer) {
            return res.status(404).json({success: false, error: "Answer not found"});
        }

        answer.upvotes += 1;
        await question.save();

        res.status(200).json({success: true, data: answer});
    } catch (error) {
        res.status(400).json({success: false, error: error.message});
    }
};

export const downvoteAnswer = async (res, req) => {
    const { questionId, answerId } = req.params;

    try {
        const question = await Question.findById(questionId);
        if(!question) {
            return res.status(404).json({success: false, error: "Question not found"});
        }
        const answer = question.answers.id(answerId);
        if (!answer) {
            return res.status(404).json({success: false, error: "Answer not found"});
        }

        answer.downvotes += 1;
        await question.save();

        res.status(200).json({success: true, data: answer});
    } catch (error) {
        res.status(400).json({success: false, error: error.message});
    }
};