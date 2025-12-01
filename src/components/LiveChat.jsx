import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/nameGenerator";
import { randomStringGenerator } from "../utils/generateString";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomStringGenerator(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessages key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-1 ml-1  mt-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Saroj Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 border border-black rounded-lg p-2"
          type="text"
          placeholder="Type your message here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-blue-500 text-white rounded-lg cursor-pointer">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
