import React from "react";
import Logo from "../Logo";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-14 py-5">
      <div className="flex flex-row items-center space-x-1">
        <Logo />
        <p className="text-deepGreen font-bold text-2xl">The Creator</p>
      </div>
    </div>
  );
};

export default Topbar;
