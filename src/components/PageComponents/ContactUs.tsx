import React from "react";
import LineContact from "../LineContact";
import ContactUsTexts from "../ContactUsTexts";

const ContactUs = () => {
  return (
    <div className="w-full h-[666px] relative flex items-center justify-center flex-col space-y-10">
      <div className="absolute left-0 bottom-0 z-0">
        <LineContact />
      </div>
      <div className="relative w-[992px] h-[134px]">
        <p className="z-10 absolute text-center leading-none tracking-tight w-full font-bold text-[56px] text-deepGreen">
          Contact us today to explore
          <br />
          partnership opportunities!
        </p>
        <div className="absolute right-[9.5rem] bottom-2">
          <ContactUsTexts />
        </div>
      </div>

      <div className="w-[1192px] h-[340px] roudned-[24px] bg-white z-10"></div>
    </div>
  );
};

export default ContactUs;
