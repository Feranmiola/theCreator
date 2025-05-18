import React from "react";
import LineContact from "../LineContact";
import ContactUsTexts from "../ContactUsTexts";

const ContactUs = () => {
  return (
    <div className="w-full h-[666px] relative flex items-center justify-center flex-col space-y-10">
      <div className="absolute left-0 bottom-0 z-0">
        <LineContact />
      </div>
      <ContactUsTexts />

      <div className="w-[1192px] h-[340px] roudned-[24px] bg-white z-10"></div>
    </div>
  );
};

export default ContactUs;
