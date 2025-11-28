const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="py-2">{channelTitle}</li>
        <li>Views: {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="shadow-lg border-4 border-red-300 rounded-xl">
      <VideoCard info={info} />
      <p className="bg-cyan-300 text-center p-1 cursor-pointer rounded-xl m-1">
        Click this Ad to know more🚀
      </p>
    </div>
  );
};

export default VideoCard;
