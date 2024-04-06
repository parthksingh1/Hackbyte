import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

const Postquestion = () => {
  return (
    <>
      <div className="border-2 border-b-yellow-400 rounded-lg max-w-[60%] p-4 flex flex-col gap-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-xl w-8 h-8 border"
            src="./avatar.png"
            alt=""
          />

          <div>- 3d ago</div>
        </div>

        <div className="title font-semibold text-lg">What is Your Name?</div>

        <div className="answer text-base text-[#777777]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a
          maxime odio rerum. Ipsam excepturi reprehenderit at aliquam tempore?
          Id ratione assumenda, voluptatum debitis, ipsa vel fugiat, dignissimos
          odit quo libero voluptate.
        </div>

        <div className="flex gap-4 items-center">
          <button className="flex gap-2 items-center">
            <ArrowUpIcon className="w-5 h-5 hover:scale-110 transition-all duration-300 ease-in-out" />{" "}
            Upvote . 25k
          </button>
          <button className="flex gap-2 items-center">
            <ArrowDownIcon className="w-5 h-5 hover:scale-110 transition-all duration-300 ease-in-out" />{" "}
            Downvote . 15k
          </button>
        </div>
      </div>
    </>
  );
};

export default Postquestion;
