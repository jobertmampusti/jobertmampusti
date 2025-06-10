import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Dashboard',
    info: 'A responsive dashboard for online stores with sales analytics, inventory management, and order processing features.',
    stacks: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    repo: 'https://github.com/jobertmampusti/portfolio',
  },
  {
    title: 'Task Management App',
    info: 'A productivity app that helps users organize tasks, set priorities, and track progress with a clean, intuitive interface.',
    stacks: ['React', 'Redux', 'Firebase', 'Material UI'],
    repo: 'https://github.com/jobertmampusti/portfolio',
  },
  {
    title: 'Portfolio Website',
    info: 'A personal portfolio website showcasing skills, projects, and professional information with a modern design.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    link: 'https://portfolio-six-khaki-16.vercel.app',
    repo: 'https://github.com/jobertmampusti/portfolio',
  },
];

function Projects() {
  return (
    <section className="flex flex-col items-center bg-gray-800 py-20 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <h2 className="mt-4 w-140 text-lg/8">
          Here are some of the projects I've worked on. Each project reflects my skills in different technologies and my
          approach to problem-solving.
        </h2>
      </div>
      <div className="mt-8 flex w-full justify-between px-36">
        {projects.map((project) => (
          <article className="w-78 rounded-xl bg-gray-900">
            <div className="h-40 rounded-t-xl bg-white"></div>
            <div className="p-4">
              <h1 className="text-lg font-bold">{project.title}</h1>
              <p className="mt-1">{project.info}</p>
              <div className="mt-3 flex w-full text-[10px] text-blue-300">
                {project.stacks.map((stack) => (
                  <p className="mr-2 rounded-full bg-blue-900/30 px-2 py-1 font-bold">{stack}</p>
                ))}
              </div>
              <div className="mt-3 flex text-[11px] font-bold">
                {project.link && (
                  <a href={project.link} className="mr-4 flex items-center text-blue-400 hover:text-blue-300">
                    <ExternalLink size={16} className="mr-1" />
                    <p>Live Demo</p>
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="flex items-center hover:text-gray-300">
                    <Github size={16} className="mr-1" />
                    <p>GitHub</p>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/jobertmampusti"
        className="mt-6 flex items-center rounded-full bg-gray-700 px-6 py-3 font-bold hover:bg-gray-600"
      >
        <ExternalLink size={20} />
        <p className="ml-2">View More on GitHub</p>
      </a>
    </section>
  );
}

export default Projects;
