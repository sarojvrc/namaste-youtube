import { commentsData } from "../utils/commentsData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="w-[1000px]">
      <h1 className="font-bold text-xl">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
