import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b-0 border-neutral-900 pb-4 lg:mb-36 lg:text-3xl">
      {/* Heading */}
      <motion.h2
        className="my-24 text-center text-4xl font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: -100 }}       // slide from left
          whileInView={{ opacity: 1, x: 0 }}      // into place
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg w-[90%] max-w-[500px]"
              src={aboutImg}
              alt="About"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}        // slide from right
          whileInView={{ opacity: 1, x: 0 }}      // into place
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 px-8 font-light tracking-tight text-justify text-base leading-relaxed text-neutral-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
