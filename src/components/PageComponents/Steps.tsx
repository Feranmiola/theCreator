import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col space-y-10 w-full items-center justify-center">
      <div className="w-[973px] flex justify-between">
        <div className="flex flex-col space-y-1 w-[453px]">
          <p className="text-[34px] text-deepGreen font-bold tracking-tighter">
            1# Research & Analysis
          </p>
          <p className="text-xl text-deepGreen tracking-tight ">
            Our agency's research-driven approach involves gathering insights
            into our clients' industries, competitors, and target audiences to
            develop tailored strategies that deliver exceptional results. This
            deep understanding allows us to create innovative and effective
            campaigns that resonate with our clients' audiences.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747743620/Illustration_tfqcpv.webp"
          className="w-[581px] h-auto"
        />
      </div>

      <div className="w-[973px] flex justify-between">
        <img
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747743620/Illustration_1_yu1na2.webp"
          className="w-[581px] h-auto"
        />
        <div className="flex flex-col space-y-1 w-full flex-1">
          <p className="text-[34px] text-deepGreen font-bold tracking-tighter">
            2# Concept Development
          </p>
          <p className="text-xl text-deepGreen tracking-tight ">
            Based on the brief and research, the agency's creative team
            generates ideas for the campaign. These concepts are presented to
            the client for feedback and refinement.
          </p>
        </div>
      </div>

      <div className="w-[973px] flex justify-between">
        <div className="flex flex-col space-y-1 w-[453px]">
          <p className="text-[34px] text-deepGreen font-bold tracking-tighter">
            3# Design & Execution
          </p>
          <p className="text-xl text-deepGreen tracking-tight ">
            Once the concept is approved, the agency's designers and developers
            bring it to life. This includes creating visual assets, writing
            copy, and developing multimedia content.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747743620/Illustration_2_vq5gnf.webp"
          className="w-[581px] h-auto"
        />
      </div>
    </div>
  );
};

export default Steps;
