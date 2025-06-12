import { Settings, Globe, Database, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    title: 'Frontend Development',
    stacks: 'HTML5, CSS3, JavaScript (ES6+), React, Tailwind, Responsive Design, CSS Grid & Flexbox',
  },
  {
    title: 'Backend Development',
    stacks: 'Node.js, Express.js, RESTful APIs, Database Design',
  },
  {
    title: 'Database Management',
    stacks: 'MySQL, MongoDB, Database Optimization',
  },
  {
    title: 'Tools & Others',
    stacks: 'Git, GitHub, VS Code, Figma, Adobe PS, Agile Methodology',
  },
];

function Skills() {
  return (
    <section id="skills" className="flex min-h-screen flex-col items-center justify-center py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold">Skills & Technologies</h1>
        <h2 className="mt-4 w-140 text-lg/8">
          As a fresh graduate, I've developed a diverse set of skills through coursework, internships, and personal
          projects.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-12 flex w-full justify-center space-x-10 px-36"
      >
        {skills.map((skill) => (
          <article className="flex w-60 flex-col items-center rounded-xl bg-gray-800 p-4 text-center">
            <div className="my-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-900/30">
              {skill.title === 'Frontend Development' && <Globe color="#60A5FA" size={26} />}
              {skill.title === 'Backend Development' && <Settings color="#60A5FA" size={26} />}
              {skill.title === 'Database Management' && <Database color="#60A5FA" size={26} />}
              {skill.title === 'Tools & Others' && <Wrench color="#60A5FA" size={26} />}
            </div>
            <h1 className="mb-4 w-40 text-lg font-bold">{skill.title}</h1>
            <p>{skill.stacks}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
