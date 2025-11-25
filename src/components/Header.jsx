import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://img.freepik.com/premium-vector/website-navigation-hamburger-menu-icons-set-flat-website-menu-icons-with-rounded-sharp-edges_1254296-1432.jpg"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
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
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
