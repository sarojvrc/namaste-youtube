import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { MENU_ICON, YOUTUBE_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

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
          className="h-8 mx-2 cursor-pointer"
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>

      <div className="col-span-10 px-10">
        <input
          className="border border-gray-400 rounded-l-full w-1/2 px-2"
          type="text"
          placeholder="Search anything"
        />
        <button className="cursor-pointer border border-gray-400 px-5 bg-gray-100 rounded-r-full">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
