import React, { useState } from 'react';

const ConfessionFullPage = () => {
  const [confessions, setConfessions] = useState([
    {
      id: 1,
      text: "I can't stop eating ice cream, even though I know it's bad for my health.",
      image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      likes: 10,
      comments: [
        { id: 1, text: 'Me too!', user: 'User1' },
        { id: 2, text: 'Stay strong!', user: 'User2' },
      ]
    },
    {
      id: 2,
      text: "I cheated on my math test and I feel guilty about it.",
      image: null,
      likes: 5,
      comments: [
        { id: 3, text: 'You should confess.', user: 'User3' },
      ]
    },
    {
      id: 3,
      text: "I have a crush on my best friend's sibling and I don't know what to do about it.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s',
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
    <div className="container flex justify-center mx-auto py-8">
      <div className="w-9/12 flex justify-center">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-8 text-center">Confession Page</h1>
          <div className="flex flex-col gap-8">
            {confessions.map((confession) => (
              <div key={confession.id} className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200">
                {confession.image && (
                  <img src={confession.image} alt="Confession" className="w-full h-64 object-cover rounded-t-lg" />
                )}
                <div className="p-4">
                  <p className="text-gray-800 text-xl mb-4">{confession.text}</p>
                  <div className="flex justify-between items-center">
                    <button onClick={() => handleLike(confession.id)} className="text-gray-600 hover:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                      {confession.likes}
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2M17 21v-8H7v8" />
                      </svg>
                      {confession.comments.length}
                    </button>
                  </div>
                  <div className="mt-4">
                    {confession.comments.map(comment => (
                      <div key={comment.id} className="mb-2">
                        <span className="font-semibold">{comment.user}: </span>
                        <span>{comment.text}</span>
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
        <div className="w-1/4 ml-8">
          <div className="bg-yellow-100 p-4 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
            <ul>
              <li className="text-gray-800 mb-2">Topic 1</li>
              <li className="text-gray-800 mb-2">Topic 2</li>
              <li className="text-gray-800 mb-2">Topic 3</li>
              <li className="text-gray-800 mb-2">Topic 1</li>
              <li className="text-gray-800 mb-2">Topic 2</li>
              <li className="text-gray-800 mb-2">Topic 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfessionFullPage;






