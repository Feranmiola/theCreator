import React from "react";

const WeDoIt = () => {
  return (
    <div className="flex w-full justify-between flex-row items-end relative h-[836px]">
      <img
        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747740523/Frame_38_uhwhmz.webp"
        className="w-auto h-[701.95px] absolute left-0"
      />

      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col space-y-10 items-center justify-center">
          <p className="tracking-tight leading-none text-center text-[56px] font-bold text-deepGreen">
            We do it for you. No more <br />
            struggling to grow on <br />
            any Platform
          </p>
          <p className="tracking-tight leading-none text-center text-[32px] font-bold text-deepGreen">
            Work with our expert strategists <br />
            writers, editors and producers to create content <br />
            that transforms your content
          </p>

          <p className="tracking-tight  text-center text-xl  text-deepGreen">
            No managing a team of freelancers or spending countless hours trying
            to <br />
            master all the skillsets Platform requires - all you need is{" "}
            <span className="font-medium">The Creator</span>
          </p>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747740523/Frame_39_j8qegb.webp"
        className="w-[483.67px] h-auto absolute right-0 bottom-0"
      />
    </div>
  );
};

export default WeDoIt;
