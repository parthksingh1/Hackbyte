import { useState } from 'react';
import axios from 'axios';

const PostQuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
       
        const response = await axios.post('http://localhost:5173/api/v1/postquestions',  {
            user:  { name: 'John Doe', email: 'scscac', password: 'sdss'},
            type: 'question', 
            content: question, 
            options: {} 
        });
        
      
        console.log('Question submitted:', response.data);
        
       
        setQuestion('');
    } catch (error) {
   
      console.error('Error submitting question:', error);
    }
    setQuestion('');
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <div className="text-2xl font-semibold mb-4">Post a Question</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <textarea
            id="question"
            className="mt-1 p-2 block w-full border border-yellow-200 rounded-md focus:outline-none focus:ring focus:ring-gray-700"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-yellow-400"
          >
            Post Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostQuestionForm;
