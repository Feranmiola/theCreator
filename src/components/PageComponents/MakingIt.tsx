import React from "react";
import MakingItBigText from "../MakingItBigText";
import MakingItIcons from "../MakingItIcons";

const MakingIt = () => {
  return (
    <div className="flex w-full py-20 flex-col items-center justify-center space-y-5">
      <p className="tracking-tight leading-none text-center text-[56px] font-bold text-deepGreen">
        Making it big on any Platform is <br />
        bigger than you think
      </p>
      <MakingItIcons />
    </div>
  );
};

export default MakingIt;
