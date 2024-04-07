import { useState } from 'react';
import { ArrowUpIcon } from "@radix-ui/react-icons";

const ConfessionFullPage = () => {
  const [confessions, setConfessions] = useState([
    {
      id: 1,
      text: "I can't stop eating ice cream, even though I know it's bad for my health.",
      likes: 10,
      comments: [
        { id: 1, text: 'Me too!', user: 'User1' },
        { id: 2, text: 'Stay strong!', user: 'User2' },
      ]
    },
    {
      id: 2,
      text: "I cheated on my math test and I feel guilty about it.",
      likes: 5,
      comments: [
        { id: 3, text: 'You should confess.', user: 'User3' },
      ]
    },
    {
      id: 3,
      text: "I have a crush on my best friend's sibling and I don't know what to do about it.",
      likes: 15,
      comments: [
        { id: 4, text: 'Shoot your shot!', user: 'User4' },
      ]
    },
  ]);

  const handleLike = (id) => {
    setConfessions(confessions.map(confession => {
      if (confession.id === id) {
        return { ...confession, likes: confession.likes + 1 };
      }
      return confession;
    }));
  };

  const handleAddComment = (id, comment) => {
    setConfessions(confessions.map(confession => {
      if (confession.id === id) {
        return { ...confession, comments: [...confession.comments, comment] };
      }
      return confession;
    }));
  };

  return (
    <div className="container flex justify-center mx-auto py-4">
      <div className="border-2 border-b-yellow-400 rounded-lg max-w-[70%] p-4 flex flex-col gap-4 shadow-lg ">

        <h1 className="text-4xl font-bold mb-8 text-center">Confessions</h1>
        <div className="flex flex-col gap-8">
          {confessions.map((confession) => (
            <div key={confession.id} className="bg-white rounded-lg overflow-hidden shadow-xl backdrop-blur-xl border border-yellow-200">
              <div className="p-4 border-yellow-200">
                <p className="text-gray-800 font-bold text-2xl mb-4">{confession.text}</p>
                <div className="flex justify-between items-center">
                  <button onClick={() => handleLike(confession.id)} className="text-gray-600 hover:text-gray-900">
                    <ArrowUpIcon className="w-5 h-5 bg-blue hover:scale-110 transition-all duration-300 ease-in-out" />
                    {confession.likes}
                  </button>
                  <button className="text-gray-600 font-black hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2M17 21v-8H7v8" />
                    </svg>
                    {confession.comments.length}
                  </button>
                </div>
                <div className="mt-4">
                  {confession.comments.map(comment => (
                    <div key={comment.id} className="text-black mb-2">
                      <span className="font-medium">{comment.user}: </span>
                      <span className='text-xl text-gray-400'>{comment.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <input type="text" placeholder="Add a comment..." className="w-full border rounded-md p-2" onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddComment(confession.id, { id: Date.now(), text: e.target.value, user: 'User' });
                      e.target.value = '';
                    }
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfessionFullPage;






