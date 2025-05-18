import React from "react";
import MakingItBigText from "../MakingItBigText";
import MakingItIcons from "../MakingItIcons";

const MakingIt = () => {
  return (
    <div className="flex w-full py-20 flex-col items-center justify-center space-y-5">
      <MakingItBigText />
      <MakingItIcons />
    </div>
  );
};

export default MakingIt;
