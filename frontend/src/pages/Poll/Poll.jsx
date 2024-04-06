import { useState } from 'react';
import 'react-leaf-polls/dist/index.css';
import PollForm from '../../components/poll/PollForm';
import PollDisplay from '../../components/poll/PollDisplay';


const Poll = () => {
    const [createdPolls, setCreatedPolls] = useState([]);

    const handlePollSubmit = (newPoll) => {
        const resData = newPoll.options.map((option) => {
            return { text: option, votes: 0 };
        });
        setCreatedPolls([...createdPolls, { ...newPoll, results: resData }]);
    };

    return (
        <>
            <div className='border-2'>
                <PollForm onPollSubmit={handlePollSubmit} />
                {createdPolls.length > 0 && <PollDisplay polls={createdPolls} />}
            </div>
        </>
    );
};

export default Poll;