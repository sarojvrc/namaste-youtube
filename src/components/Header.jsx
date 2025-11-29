import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  MENU_ICON,
  YOUTUBE_LOGO,
  USER_ICON,
  YouTube_Search_Suggestion_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const youTubeSearchQuery = async () => {
    const searchData = await fetch(YouTube_Search_Suggestion_API + searchQuery);
    const searchJSON = await searchData.json();
    setSuggestion(searchJSON[1]);
    dispatch(
      cacheResults({
        [searchQuery]: searchJSON[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        youTubeSearchQuery();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleClick()}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src={MENU_ICON}
        />
        <img
          className="h-10 mx-2 cursor-pointer"
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="border border-gray-400 rounded-l-full w-1/2 px-5 p-2"
            type="text"
            placeholder="🔍 Search anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="cursor-pointer border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white shadow-lg py-2 px-2 w-[34.5rem] rounded-lg border border-gray-200">
            <ul>
              {suggestion.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 px-2 shadow-sm hover:bg-gray-100 rounded-lg"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
