import { useState } from 'react';

const ConfessionPage = () => {
    const [confessions, setConfessions] = useState([]);
    const [confession, setConfession] = useState('');

    const handleChange = (event) => {
        setConfession(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setConfessions([...confessions, confession]);
        setConfession(''); // Clear form after submit
    };

    return (
        <div className="confession-container flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">Spill the Tea</h1>
            <form onSubmit={handleSubmit} className="confession-form flex flex-col space-y-4 w-full">
                <label htmlFor="confession" className="text-gray-700 font-medium text-lg">
                    Your Secret:
                </label>
                <textarea
                    id="confession"
                    value={confession}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="confess-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">
                    Confess
                </button>
            </form>
            {confessions.length > 0 && (
                <section className="confessions mt-8">
                    <h2 className="text-2xl font-medium text-center text-blue-500">Confessions Heard</h2>
                    <ul className="list-disc pl-4 mt-2">
                        {confessions.map((confession) => (
                            <li key={confession} className="text-gray-700">
                                {confession}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default ConfessionPage;
