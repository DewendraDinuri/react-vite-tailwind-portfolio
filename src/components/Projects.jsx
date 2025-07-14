import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap items-start justify-center gap-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/4 max-w-2xl">
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-base leading-relaxed">{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block mr-2  px-2 py-1 bg-neutral-900 rounded text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
