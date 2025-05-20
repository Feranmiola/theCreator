import React from "react";
import { motion } from "framer-motion";
import LeftEffects from "../LeftEffects";
import RightEffects from "../RightEffects";
import TextLine from "../TextLine";
import MainText from "../MainText";

const Hero = () => {
  return (
    <div className="flex w-full items-center justify-center h-[817px] relative flex-row">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747646072/Frame_37_duozpk.webp"
        className="w-auto h-[817px] absolute left-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center h-[817.04px] space-y-5 justify-center"
      >
        <div className="w-[997px] h-[336px] relative">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center absolute z-10 text-deepGreen font-bold text-[112px] leading-none tracking-tight"
          >
            Spark your brand's
            <br />
            imginative flair
            <br />
            with us
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute z-0 top-[7rem] left-[4rem]"
          >
            <TextLine />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-deepGreen text-xl max-w-[773px] text-center"
        >
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-row w-[567px] h-[64px] bg-white rounded-[100px] items-center space-x-2 p-2"
        >
          <input
            placeholder="Enter Your Email"
            className="bg-transparent outline-none focus:outline-none placeholder:text-[#D4D4D4] text-deepGreen w-full flex flex-1 pl-2 text-xl"
          />
          <div className="cursor-pointer bg-brightPink text-deepGreen rounded-[100px] font-semibold text-[18px] w-[102px] h-full flex items-center justify-center hover:bg-transparent border border-transparent hover:border-brightPink transition ease-in-out">
            Join
          </div>
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1747646073/Frame_36_qixyin.webp"
        className="w-[auto] h-[661px] absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Hero;
