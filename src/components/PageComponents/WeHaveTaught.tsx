import React from "react";
import IconImage1 from "../IconImage1";
import LineHowTo1 from "../LineHowTo1";
import LineHowTo2 from "../LineHowTo2";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";
import JohnAvatar from "../JohnAvatar";

const WeHaveTaught = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col pb-10">
      <div className="w-[1192px] flex flex-col space-y-[5rem]">
        <div className="flex w-full flex-col space-y-2">
          <div className="h-[67px] relative flex items-center  space-x-2">
            <p className="font-bold text-[56px] text-deepGreen leading-none">
              We've taught
            </p>
            <IconImage1 />
            <p className="font-bold text-[56px] text-deepGreen leading-none">
              3,000 Creators
            </p>
          </div>
          <div className="h-[67px] relative flex items-center  space-x-2">
            <p className="font-bold text-[56px] text-deepGreen leading-none">
              how to
            </p>
            <IconImage1 />
            <p className="font-bold relative z-10 text-[56px] text-deepGreen leading-none">
              grow on any platform
            </p>
            <IconImage1 />

            <div className="absolute right-[13rem] top-2 z-0">
              <LineHowTo1 />
            </div>
          </div>
        </div>

        <div className="h-[67px] w-max relative flex items-center space-x-2">
          <p className="font-bold text-[56px] text-deepGreen leading-none">
            Now we can do it for you
          </p>

          <div className="absolute right-[20rem] top-[3.5rem] z-0">
            <LineHowTo2 />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="font-bold text-[32px] text-deepGreen leading-none">
            See what our famous clients
            <br /> write about us:
          </p>

          <div className="flex flex-row items-center space-x-3">
            <div className="rounded-full border border-brightPink cursor-pointer hover:bg-brightPink transition-all ease-in-out p-2 flex items-center justify-center">
              <ArrowLeft />
            </div>

            <div className="rounded-full border border-brightPink cursor-pointer hover:bg-brightPink transition-all ease-in-out p-2 flex items-center justify-center">
              <ArrowRight />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="w-[508px] h-[352px] bg-[#FFADF2] rounded-[16px] flex items-center justify-center">
            <div className="flex flex-col justify-evenly w-[396px] h-full">
              <JohnAvatar />
              <p className="font-medium text-[32px] text-deepGreen">John Li</p>
              <p className="leading-2 text-deepGreen text-xl">
                The Creator innovative ideas, strategic approach, and
                outstanding results have left a lasting impression on me as a
                blogger, making them a standout in the creative industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHaveTaught;
