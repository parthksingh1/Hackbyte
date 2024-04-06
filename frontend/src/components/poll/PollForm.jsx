import { useState } from 'react';
import 'react-leaf-polls/dist/index.css';

// eslint-disable-next-line react/prop-types
const PollForm = ({ onPollSubmit }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState('');

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

    const removeOption = (index) => {
        const updatedOptions = [...options];
        updatedOptions.splice(index, 1);
        setOptions(updatedOptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPoll = { question, options };
        onPollSubmit(newPoll);
        setQuestion('');
        setOptions([]);
    };

    return (
        <form onSubmit={handleSubmit} className="w-6/12 my-4 mx-auto flex flex-col space-y-4 px-4 py-8 shadow-md border-2 border-b-[#ADFE8E] rounded-lg">
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
                    className="p-2 border bg-white text-black border-purple-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <h3 className="text-lg font-medium">Options:</h3>
            <div className="flex flex-col space-y-2">
                {options.map((option, index) => (
                    <div key={index} className="flex space-x-2 items-center">
                        <p className="text-gray-700 bg-white">{option}</p>
                        <button
                            type="button"
                            onClick={() => removeOption(index)}
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400 focus:outline-none focus:ring-1 focus:ring-red-100"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className="flex items-center space-x-2">
                    <label htmlFor="newOption" className="text-sm mb-1 text-white">
                        Add Option:
                    </label>
                    <input
                        type="text"
                        id="newOption"
                        value={newOption}
                        onChange={handleOptionChange}
                        className="p-2 border bg-white text-black border-purple-500 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <button
                        type="button"
                        onClick={addOption}
                        className="px-3 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring-1 focus:ring-yellow-100"
                    >
                        Add Option
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring-1 focus:ring-yellow-100"
            >
                Create Poll
            </button>
        </form>
    );
};

export default PollForm;
