import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 my-2 shadow-sm bg-gray-200 rounded-2xl">
      <img className="w-8 h-8" alt="user-icon" src={USER_ICON} />
      <div className="mx-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
