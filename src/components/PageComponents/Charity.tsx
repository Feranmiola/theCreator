import React from "react";
import IconsRack from "../IconsRack";

const Charity = () => {
  return (
    <div className="flex w-full items-center justify-center py-20">
      <div className="flex w-[1192px] h-[515px] flex-row items-center justify-between">
        <div className="h-full rounded-[16px] bg-brightPink w-[580px] flex flex-col justify-evenly items-center">
          <IconsRack />

          <p className="text-deepGreen text-xl w-[412px]">
            We've participated in events for children's education, health
            initiatives, and disaster relief. We're dedicated to ongoing
            involvement and exploring new opportunities.
          </p>
        </div>

        <div className="w-[580px] h-full bg-white rounded-[16px] p-10 flex flex-col space-y-2">
          <p className="font-bold text-deepGreen text-[56px]">Charity</p>
          <p className="text-deepGreen text-xl w-[412px]">
            Our creative agency supports charities globally, using our skills in
            branding, marketing, and social media to make a positive impact on
            local communities and raise awareness about important causes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charity;
