import { AvatarIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { AnswerModal } from "./answerModal";

const Postquestion = ({ createdAt, title, content }) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  return (
    <div className="border-2 border-b-yellow-400 rounded-lg w-[60%] p-4 flex flex-col gap-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <AvatarIcon className="w-8 h-8 bg-cover" />
        <div>{formattedDate}</div> {/* Use the createdAt prop */}
      </div>

      <div className="title font-semibold text-lg">{title}</div> {/* Use the title prop */}

      <div className="answer text-base text-[#777777]">{content}</div> {/* Use the content prop */}

      <div className="flex gap-4 items-center">
        <AnswerModal />
      </div>
    </div>
  );
};

export default Postquestion;
