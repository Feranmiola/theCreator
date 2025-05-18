import React from "react";
import LeftEffects from "../LeftEffects";
import RightEffects from "../RightEffects";
import TextLine from "../TextLine";
import MainText from "../MainText";

const Hero = () => {
  return (
    <div className="flex w-full items-end justify-between flex-row">
      <LeftEffects />

      <div className="flex flex-col items-center h-[817.04px] space-y-5 justify-center ">
        <MainText />

        <p className="text-deepGreen text-xl max-w-[773px] text-center">
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.{" "}
        </p>

        <div className="flex flex-row w-[567px] h-[64px] bg-white  rounded-[100px] items-center space-x-2 p-2">
          <input
            placeholder="Enter Your Email"
            className="bg-transparent outline-none focus:outline-none placeholder:text-[#D4D4D4] text-deepGreen w-full flex flex-1 pl-2 text-xl"
          />
          <div className="cursor-pointer bg-brightPink text-deepGreen rounded-[100px] font-semibold text-[18px] w-[102px] h-full flex items-center justify-center hover:bg-transparent border border-transparent hover:border-brightPink transition ease-in-out">
            Join
          </div>
        </div>
      </div>

      <RightEffects />
    </div>
  );
};

export default Hero;
