import { LeafPoll } from 'react-leaf-polls';
import 'react-leaf-polls/dist/index.css';

const PollDisplay = ({ polls }) => {
    const customTheme = {
        textColor: 'black',
        mainColor: '#00B87B',
        backgroundColor: 'rgb(255,255,255)',
        alignment: 'center'
    };

    return (
        <div className="mt-4">
            <h2 className="text-lg font-semibold mb-4 w-32 mx-auto">Created Polls</h2>
            {polls.map((poll, index) => (
                <div key={index} className=" w-1/2 mx-auto border border-gray-300 rounded-md shadow-md p-4 mb-4">
                    <h3 className="text-lg font-medium mb-2">{poll.question}</h3>
                    <LeafPoll
                        className="mt-4"
                        type='multiple'
                        theme={customTheme}
                        results={poll.results}
                    />
                </div>
            ))}
        </div>
    );
};

export default PollDisplay;
