import React from "react";
import Copyright from "../Copyright";
import InstagramIcon from "../InstagramIcon";
import FacebookIcon from "../FacebookIcon";
import LinkedinIcon from "../LinkedinIcon";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-[1192px] flex items-center justify-center flex-col space-y-[5rem]">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <p className="text-deepGreen text-[56px] font-bold">
            We are waiting for you to contact us
          </p>
          <p className="text-deepGreen text-xl">
            You can write to us at any time and get an instant response.
          </p>
        </div>

        <div className="flex flex-row w-[567px] h-[64px] bg-white rounded-[100px] items-center space-x-2 p-2">
          <input
            placeholder="Enter Your Email"
            className="bg-transparent outline-none focus:outline-none placeholder:text-[#D4D4D4] text-deepGreen w-full flex flex-1 pl-2 text-xl"
          />
          <div className="cursor-pointer bg-brightPink text-deepGreen rounded-[100px] font-semibold text-[18px] w-[102px] h-full flex items-center justify-center hover:bg-transparent border border-transparent hover:border-brightPink transition ease-in-out">
            Join
          </div>
        </div>

        <div className="w-full flex items-center justify-between flex-row">
          <div className="flex flex-row items-center space-x-1">
            <Copyright />
            <p className="text-deepGreen text-xl">Copywriting</p>
          </div>

          <div className="flex flex-row items-center space-x-5">
            <p className="font-medium text-deepGreen text-xl hover:font-bold transition-all ease-in-out cursor-pointer">
              Partners
            </p>
            <p className="font-medium text-deepGreen text-xl hover:font-bold transition-all ease-in-out cursor-pointer">
              How we work
            </p>
            <p className="font-medium text-deepGreen text-xl hover:font-bold transition-all ease-in-out cursor-pointer">
              Review
            </p>
            <p className="font-medium text-deepGreen text-xl hover:font-bold transition-all ease-in-out cursor-pointer">
              Charity
            </p>
          </div>

          <div className="flex flex-row items-center space-x-3">
            <div className="hover:scale-110 transition-all ease-in-out cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="hover:scale-110 transition-all ease-in-out cursor-pointer">
              <FacebookIcon />
            </div>
            <div className="hover:scale-110 transition-all ease-in-out cursor-pointer">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
