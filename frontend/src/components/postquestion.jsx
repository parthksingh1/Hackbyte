import { ArrowUpIcon, ArrowDownIcon, AvatarIcon } from "@radix-ui/react-icons";

const Postquestion = ({ createdAt, title, content, upvotesCount, downvotesCount }) => {
  return (
    <div className="border-2 border-b-yellow-400 rounded-lg w-[60%] p-4 flex flex-col gap-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <AvatarIcon className="w-8 h-8 bg-cover" />
        <div>- {createdAt}</div> {/* Use the createdAt prop */}
      </div>

      <div className="title font-semibold text-lg">{title}</div> {/* Use the title prop */}

      <div className="answer text-base text-[#777777]">{content}</div> {/* Use the content prop */}

      <div className="flex gap-4 items-center">
        <button className="flex gap-2 items-center">
          <ArrowUpIcon className="w-5 h-5 hover:scale-110 transition-all duration-300 ease-in-out" /> Upvote . {upvotesCount}
        </button>
        <button className="flex gap-2 items-center">
          <ArrowDownIcon className="w-5 h-5 hover:scale-110 transition-all duration-300 ease-in-out" /> Downvote . {downvotesCount}
        </button>
      </div>
    </div>
  );
};

export default Postquestion;
