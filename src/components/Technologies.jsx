import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiAnaconda, SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

// Floating animation for individual icons
const iconVariants = (duration) => ({
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2.5 },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 3 },
    { icon: <SiSpringboot className="text-7xl text-[#6DB33F]" />, duration: 5 },
    { icon: <FaAngular className="text-7xl text-[#DD0031]" />, duration: 2 },
    { icon: <BiLogoJava className="text-7xl text-orange-700" />, duration: 6 },
    { icon: <SiAnaconda className="text-7xl text-green-500" />, duration: 4 },
    { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 3 },
    { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, duration: 6 },
    { icon: <GrMysql className="text-7xl text-[#00758F]" />, duration: 4 }
  ];

  return (
    <div className="border-b-0 border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Tech Stack Container - pop in on scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techStack.map((item, i) => (
          <motion.div
            key={i}
            variants={iconVariants(item.duration)}
            animate="animate" // floating animation
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
