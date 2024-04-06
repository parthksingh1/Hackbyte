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
        setConfession('');
    };

    return (
        <>

            <div className="confession-container w-6/12 mx-auto flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold font-serif text-center mb-6 ">Spill the Tea</h1>
                <form onSubmit={handleSubmit} className="confession-form  flex flex-col space-y-4 w-full">
                    <label htmlFor="confession" className="text-gray-700 font-medium text-lg">
                        Your Secret:
                    </label>
                    <textarea
                        id="confession"
                        value={confession}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-300 p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button type="submit" className="confess-button bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">
                        Confess
                    </button>
                </form>
                {confessions.length > 0 && (
                    <section className="confessions mt-8">
                        <h2 className="text-2xl font-medium text-center ">Confessions Heard</h2>
                        <ul className="list-disc pl-4 mt-2">
                            {confessions.map((confession) => (
                                <p key={confession} className="text-gray-700">
                                    {confession}
                                </p>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </>
    );
};

export default ConfessionPage;
