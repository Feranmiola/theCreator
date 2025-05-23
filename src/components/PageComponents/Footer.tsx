import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1192px] flex items-center justify-center flex-col space-y-[5rem]">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <p className="text-deepGreen text-[56px] fnot-bold">
            We are waiting for you to contact us
          </p>
          <p className="text-deepGreen text-xl">
            You can write to us at any time and get an instant response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
