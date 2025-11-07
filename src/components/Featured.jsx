import React from 'react';
import { motion } from 'framer-motion';

// ---------------------------
// Motion Variants
// ---------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 } 
  },
  click: {
    scale: 0.9,
    rotate: 5,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

// ---------------------------
// Featured Component
// ---------------------------
function Featured() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="mt-24 text-4xl font-medium tracking-wide"
        >
          Download <span className="text-neutral-500">My CV</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-sm text-purple-400 tracking-widest mt-4 mb-6 uppercase"
        >
          PDF Available for Review
        </motion.p>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-neutral-400 mb-10 text-lg px-4"
        >
          Want to know more about my experience, education, and skills? Feel free to view my updated resume and get a full view of my professional journey.
        </motion.p>

        {/* Download Button */}
        <motion.a
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap="click"
          href="/CV/Dinuri Dewendra.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-900 text-black text-lg rounded-xl font-medium shadow-md cursor-pointer hover:text-white hover:shadow-purple-500/100 transition duration-300"
        >
          Download
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Featured;
