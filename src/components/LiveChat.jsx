import React, { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/nameGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "This is Namaste React Live 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col">
      {chatMessages.map((chat, index) => (
        <ChatMessages key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
