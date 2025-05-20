import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col space-y-10 w-full items-center justify-center">
      <div className="w-[973px] flex justify-between">
        <div className="flex flex-col space-y-1 w-[453px]">
          <p className="text-[36px] text-deepGreen font-bold tracking-tight">
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
    </div>
  );
};

export default Steps;
