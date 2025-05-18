import React from "react";
import Logo from "../Logo";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-14 py-8">
      <div className="flex flex-row items-center space-x-1 cursor-pointer">
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
      <div className="bg-brightPink rounded-[42px] font-semibold text-[18px] text-deepGreen hover:bg-transparent border border-transparent hover:border-brightPink flex items-center justify-center px-8 py-3 cursor-pointer transition-all ease-in-out">
        Join The Creator
      </div>
    </div>
  );
};

export default Topbar;
