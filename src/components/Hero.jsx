import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50, delay: delay } 
  }
});

const Hero = () => {
  return (
    <div className="border-b-0 border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">

        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">

            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-32 lg:text-7xl text-white px-16"
            >
              Dinuri Dewendra
            </motion.h1>
            
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent px-16"
            >
              Software Engineer
            </motion.span>
            
            <motion.p 
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="my-2 max-w-lg py-6 font-light tracking-tighter text-justify px-16"
            >
              {HERO_CONTENT}
            </motion.p>

          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: 100, scaleX: -1 }}
          whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src={profilePic}
            alt="Profile Picture"
            className="max-w-[280px] md:max-w-[350px] lg:max-w-[400px] ml-24 w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
