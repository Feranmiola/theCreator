import React from "react";
import Logo from "../Logo";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-14 py-5">
      <div className="flex flex-row items-center space-x-1">
        <Logo />
        <p className="text-deepGreen font-bold text-2xl">The Creator</p>
      </div>

      <div className="flex flex-row items-center space-x-5">
        <p className="text-deepGreen cursor-pointer hover:font-bold transition-all ease-in-out font-medium text-xl">
          Partners
        </p>
        <p className="text-deepGreen cursor-pointer hover:font-bold transition-all ease-in-out font-medium text-xl">
          How We Work
        </p>
        <p className="text-deepGreen cursor-pointer hover:font-bold transition-all ease-in-out font-medium text-xl">
          Review
        </p>
        <p className="text-deepGreen cursor-pointer hover:font-bold transition-all ease-in-out font-medium text-xl">
          Charity
        </p>
      </div>
    </div>
  );
};

export default Topbar;
