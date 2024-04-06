import { LeafPoll } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

const PollDisplay = ({ polls }) => {
  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center",
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4 w-32 mx-auto">Created Polls</h2>
      {polls.map((poll, index) => (
        <div
          key={index}
          className=" w-1/2 mx-auto border-2 border-gray-300 border-b-[#ADFE8E] rounded-md shadow-md p-4 mb-4"
        >
          <h3 className="text-xl font-medium mb-2">{poll.question}</h3>
          <LeafPoll
            type="multiple"
            question="What you wanna ask?"
            results={poll.results}
            theme={customTheme}
            isVoted={false}
          />
        </div>
      ))}
    </div>
  );
};

export default PollDisplay;
