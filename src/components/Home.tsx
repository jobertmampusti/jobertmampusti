import { motion } from 'motion/react';

function Home() {
  return (
    <section id="home" className="flex min-h-screen scroll-m-20 flex-col py-20 text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl/16 font-bold"
      >
        Hi, I'm <span className="text-blue-400">Jobert!</span>
        <br></br> A Web Developer
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="mt-3 text-xl/8"
      >
        <p>I craft responsive websites where technology meets creativity.</p>
        <p>Fresh graduate with a passion for building digital experiences.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="mt-10 font-bold"
      >
        <a href="#projects" className="mr-3 rounded-full bg-blue-600 px-6 py-3 hover:bg-blue-700">
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-gray-700 bg-gray-800 px-6 py-3 text-blue-400 hover:bg-gray-700"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
