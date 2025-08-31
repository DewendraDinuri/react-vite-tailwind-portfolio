import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import porfilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

// ---------------------------
// Main Variants
// ---------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeOut" },
  },
};

// Two box pop-in variants
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Small dancing motion for inner elements
const itemVariants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -5, 0],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
  },
};

const ContactMe = () => {
  return (
    <motion.section
      id="contact"
      className="w-full text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          variants={boxVariants}
          className="my-20 text-center text-4xl mb-4"
        >
          Contact <span className="text-neutral-500">Me</span>
        </motion.h2>

        <motion.p
          variants={boxVariants}
          className="text-center text-sm text-purple-900 tracking-widest mb-12 uppercase"
        >
          Let's work together
        </motion.p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* Left: Profile Box */}
          <motion.div
            variants={boxVariants}
            className="flex flex-col justify-between bg-white/10 border border-purple-900 rounded-3xl p-16 backdrop-blur-md shadow-xl text-center"
          >
            <div>
              <div className="w-32 h-32 mx-auto mb-10">
                <motion.img
                  src={porfilePic}
                  alt="KevinRush Profile Picture"
                  className="w-full h-full object-cover rounded-full shadow-md border-2 border-purple-500"
                  variants={itemVariants}
                />
              </div>
              <motion.h3
                className="text-2xl font-semibold text-purple-200"
                variants={itemVariants}
              >
                Dinuri Dewendra
              </motion.h3>
              <motion.p className="text-sm text-gray-400 mb-2" variants={itemVariants}>
                Software Engineer
              </motion.p>
              <motion.p className="text-gray-400 text-sm mb-6 text-justify" variants={itemVariants}>
                I’m open to freelance opportunities and collaborative projects where creativity meets innovation. Whether it’s building a dynamic web application, developing intelligent software solutions, or contributing to meaningful tech projects, I’m excited to bring ideas to life. Let’s connect and create something impactful together!
              </motion.p>
            </div>

            <motion.div className="space-y-1 text-sm text-gray-300 mt-4" variants={itemVariants}>
                <p>
                  <span className="text-purple-400">📞</span>{" "}
                  <a
                    href="tel:+94741036299"
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300"
                  >
                    +94 741 036 299
                  </a>
                </p>
                <p>
                  <span className="text-purple-400">✉️</span>{" "}
                  <a
                    href="mailto:dinuridewendra@gmail.com"
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300"
                  >
                  dinuridewendra@gmail.com
                </a>
              </p>
            </motion.div>

            {/* Social Media Section */}
            <motion.div className="mt-8 text-left flex gap-4 justify-center" variants={itemVariants}>
              {[
                { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/dinza-dewn/" },
                { Icon: FaYoutube, url: "https://www.youtube.com/@dinzadewen" },
                { Icon: FaFacebookF, url: "https://www.facebook.com/your-profile" },
                { Icon: FaTwitter, url: "https://twitter.com/your-profile" },
                { Icon: FaInstagram, url: "https://www.instagram.com/dinza._.dewen" },
              ].map(({ Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            variants={boxVariants}
            className="flex flex-col justify-between bg-white/10 border border-purple-900 rounded-3xl p-8 backdrop-blur-md shadow-xl space-y-6"
          >
            {["Your Name", "Your Email", "Phone Number", "Your Message"].map((label, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <label className="text-sm text-gray-300">{label}</label>
                {label === "Your Message" ? (
                  <textarea
                    rows="5"
                    className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                    placeholder="Type your message..."
                  ></textarea>
                ) : (
                  <input
                    type={label === "Your Email" ? "email" : label === "Phone Number" ? "tel" : "text"}
                    className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                    placeholder={label === "Your Name" ? "Dinuri Dewendra" : label === "Your Email" ? "you@example.com" : "+94..."}
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
