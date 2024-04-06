import React, { useState } from 'react';

const Poll = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState('');
    const [createdPolls, setCreatedPolls] = useState([]);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleOptionChange = (event) => {
        setNewOption(event.target.value);
    };

    const addOption = () => {
        setOptions([...options, newOption]);
        setNewOption('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPoll = { question, options };
        setCreatedPolls([...createdPolls, newPoll]);
        setQuestion('');
        setOptions([]);
    };

    const renderPoll = (poll) => (
        <div className="p-4 border border-gray-300 rounded-md mt-4">
            <h3>{poll.question}</h3>
            <fieldset className="space-y-2">
                {poll.options.map((option, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="poll-choice"
                            value={option}
                        />
                        <label htmlFor={`option-${index}`} className="ml-2 text-gray-700">
                            {option}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="w-6/12 mx-auto flex flex-col space-y-4 px-4 py-8 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-bold">Create Poll</h2>
            <div className="flex flex-col">
                <label htmlFor="question" className="mb-2 text-sm">
                    Question:
                </label>
                <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={handleQuestionChange}
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <h3 className="text-lg font-medium">Options:</h3>
            <div className="flex flex-col space-y-2">
                {options.map((option, index) => (
                    <p key={index} className="text-gray-700">{option}</p>
                ))}
                <div className="flex space-x-2">
                    <label htmlFor="newOption" className="text-sm mb-1">
                        Add Option:
                    </label>
                    <input
                        type="text"
                        id="newOption"
                        value={newOption}
                        onChange={handleOptionChange}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                    <button
                        type="button"
                        onClick={addOption}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none hover:text-black focus:ring-1 focus:ring-yellow-100"
                    >
                        Add Option
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-1 focus:ring-yellow-100"
            >
                Create Poll
            </button>
            {createdPolls.length > 0 && (
                <div className="mt-4">
                    <h2>Created Polls</h2>
                    {createdPolls.map((poll) => renderPoll(poll))}
                </div>
            )}
        </form>
    );
};

export default Poll;
