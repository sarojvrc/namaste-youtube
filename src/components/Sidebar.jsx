import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>🏠 Home</li>
        <li>☯️ Live</li>
        <li>🏏 Sports</li>
        <li>📰 News</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>🚘 Tata Motors</li>
        <li>🧑‍💻 JavaScript</li>
        <li>⚽ Star Sports</li>
        <li>📺 News 18</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🎥 Movie</li>
        <li>⚽ Sports</li>
        <li>📰 News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
