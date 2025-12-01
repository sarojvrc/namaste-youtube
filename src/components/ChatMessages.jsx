import { USER_ICON } from "../utils/constants";

const ChatMessages = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm bg-white mb-2 rounded-lg">
      <img className="w-8 h-8" alt="user-icon" src={USER_ICON} />
        <span className="p-2 font-bold">{name}</span>
        <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
