import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";          // Node.js
import { SiSpringboot } from "react-icons/si";      // Spring Boot
import { SiAnaconda } from "react-icons/si";        // Anaconda
import { FaAngular } from "react-icons/fa";         // Angular
import { BiLogoJava } from "react-icons/bi";        // OOP (symbolic)
import { SiMongodb } from "react-icons/si";         // MongoDB
import { GrMysql } from "react-icons/gr";           // MySQL
import { BiLogoPostgresql } from "react-icons/bi";  // PostgreSQL
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
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

      {/* Icons */}
      <motion.div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <SiSpringboot className="text-7xl text-[#6DB33F]" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <FaAngular className="text-7xl text-[#DD0031]" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <BiLogoJava className="text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <SiAnaconda className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4"
        >
          <GrMysql className="text-7xl text-[#00758F]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
