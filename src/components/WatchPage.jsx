import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_API_KEY, YouTube_SingleVideo_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState([]);

  const getVideoData = async () => {
    const videoId = searchParam.get("v");
    const videoData = await fetch(
      YouTube_SingleVideo_API + videoId + "&key=" + Google_API_KEY
    );
    const data = await videoData.json();
    setVideoData(data.items[0]);
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="p-2 flex w-full">
        <div>
          <iframe
            className="ml-10 rounded-xl"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold text-2xl p-2 ml-10">
            {videoData?.snippet?.title}
          </h1>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="p-2 ml-10">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
