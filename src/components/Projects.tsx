import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'AgriCTRL+',
    info: 'AgriCTRL+ is a web platform for the NFA, digitizing rice supply chain tracking from procurement to distribution with real-time updates.',
    stacks: ['React', 'Express', 'Tailwind CSS', 'ICP'],
    link: 'https://agrictrl.online',
  },
  {
    title: 'CRUD with JWT auth',
    info: 'A boilerplate for efficient CRUD operations, reinforced with JWT for secure, token-based authorization and streamlined data management.',
    stacks: ['Node', 'Express', 'MongoDB', 'JWT'],
    repo: 'https://github.com/jobertmampusti/express-mongodb-jwt',
  },
  {
    title: 'Portfolio Website',
    info: 'A personal portfolio website showcasing skills, projects, and professional information with a modern design.',
    stacks: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide'],
    link: 'https://portfolio-six-khaki-16.vercel.app',
    repo: 'https://github.com/jobertmampusti/portfolio',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen scroll-m-10 flex-col items-center justify-center bg-gray-800 py-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold">My Projects</h1>
        <h2 className="mt-4 w-140 text-lg/8">
          Here are some of the projects I've worked on. Each project reflects my skills in different technologies and my
          approach to problem-solving.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-8 flex w-full justify-center space-x-10 px-36"
      >
        {projects.map((project) => (
          <article className="w-78 rounded-xl bg-gray-900">
            <div className="h-45 rounded-t-xl bg-white"></div>
            <div className="p-5">
              <h1 className="text-lg font-bold">{project.title}</h1>
              <p className="mt-1">{project.info}</p>
              <div className="mt-3 flex w-full text-[10px] text-blue-300">
                {project.stacks.map((stack) => (
                  <p className="mr-2 rounded-full bg-blue-900/30 px-2 py-1 font-bold">{stack}</p>
                ))}
              </div>
              <div className="mt-3 flex text-[11px] font-bold">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="mr-4 flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <p>Live Demo</p>
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" className="flex items-center hover:text-gray-300">
                    <Github size={16} className="mr-1" />
                    <p>GitHub</p>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <a
          href="https://github.com/jobertmampusti"
          target="_blank"
          className="mt-8 flex items-center rounded-full bg-gray-700 px-6 py-3 font-bold hover:bg-gray-600"
        >
          <ExternalLink size={20} />
          <p className="ml-2">View More on GitHub</p>
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
