import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div>
    <motion.h2 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity:0, y:-100 }}
    transition={{ duration: 1.5 }}
    className="my-20 text-center text-4xl">Projects</motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img 
              src={project.image} 
              width={150}
              height={150}
              alt={project.title} 
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-500 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;