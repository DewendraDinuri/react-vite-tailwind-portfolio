import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// -------------------------
// Motion Variants Constants
// -------------------------
const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// -------------------------
// Projects Component
// -------------------------
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      {/* Section Heading */}
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // triggers every time 50% is in view
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap items-start justify-center gap-8"
          >
            {/* Image Section - left to right */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Text Section - right to left */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="w-full lg:w-3/4 max-w-2xl"
            >
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-base leading-relaxed">
                {project.description}
              </p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block mr-2 px-2 py-1 bg-neutral-900 rounded text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
