import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    title: 'BS in Information Technology',
    company: 'Polytechnic University of the Philippines, 2023-2025',
    description: 'Degree Awarded with Cum Laude',
    type: 'education',
  },
  {
    title: 'Frontend Web Developer Intern',
    company: 'Unified Internship Incorporated, 2023',
    description: 'Developed Responsive Web Page Layouts',
    type: 'work',
  },
  {
    title: 'Diploma in Information Technology',
    company: 'Polytechnic University of the Philippines, 2020-2023',
    description: 'With Hands on Experience in OJT',
    type: 'education',
  },
];

function About() {
  return (
    <section id="about" className="flex min-h-screen scroll-m-20 items-center px-50 text-white">
      <div className="-mt-20 flex justify-between">
        {/* left section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-49/100"
        >
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="text-justify text-lg/10">
            <p className="mt-4">
              I'm a recent BSIT graduate with a specialization in web development. With a strong foundation in both
              front-end and back-end technologies, I create responsive, accessible, and user-friendly web applications.
            </p>
            <p className="mt-4">
              My journey in tech began during my university years where I discovered my passion for creating digital
              experiences that are both functional and beautiful. I'm constantly learning and adapting to new
              technologies and methodologies to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
        {/* right section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-47/100 rounded-xl bg-gray-800 p-5"
        >
          <h1 className="text-xl font-bold">Education & Experience</h1>
          {/* container */}
          <div className="mt-5">
            {/* BSIT */}
            {experiences.map((experience) => (
              <article className="mb-10 flex">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30">
                  {experience.type === 'education' && <GraduationCap color="#60A5FA" size={20} />}
                  {experience.type === 'work' && <BriefcaseBusiness color="#60A5FA" size={20} />}
                </div>
                <div>
                  <p className="text-lg font-bold">{experience.title}</p>
                  <div className="text-gray-300">
                    <p>{experience.company}</p>
                    <p>{experience.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
