import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore.jsx';

const PostQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const authStore = useAuthStore();

const handleSubmit = async (e) => {
  console.log(authStore);
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3001/api/v1/postquestions', {
      userId: authStore.userProfile.sid,
      text: question,
      answers: [],
    });

    console.log('Question submitted:', response.data);

    setQuestion('');
  } catch (error) {
    console.error('Error submitting question:', error);
  }
};

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <div className="text-2xl font-semibold mb-4 text-black">Post a Question</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
            Question:
          </label>
          <textarea
            id="question"
            className="bg-white text-black mt-1 p-2 block w-full border-1 border-purple-500 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
          >
            Post Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostQuestionForm;
