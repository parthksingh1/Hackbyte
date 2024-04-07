import { useState } from "react";
import axios from "axios";

const AnswerQuestion = () => {
  const [answerText, setAnswerText] = useState("");

  const handleSubmit = async (e) => {
    console.log("Answer submitted:", answerText);
    e.preventDefault();

    try {
      const response = await axios.post(
        `/api/v1/questions/:answerId/answers`,
        {
          text: answerText,
        }
      );

      console.log("Answer submitted:", response.data);

      setAnswerText("");
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <div className="text-2xl font-semibold mb-4 text-black">Your Answer</div>
      <form>
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Answer:
          </label>
          <textarea
            id="question"
            className="bg-white text-black mt-1 p-2 block w-full border-1 border-purple-500 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            rows="4"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
          >
            Submit Answer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerQuestion;
