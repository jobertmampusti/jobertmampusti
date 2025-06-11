import { motion } from 'motion/react';

function Contact() {
  return (
    <section id="contact" className="flex scroll-m-20 flex-col items-center bg-gray-800 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <h2 className="mt-4 w-140 text-lg/8">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </h2>
      </motion.div>
      <div className="mt-8 flex w-full justify-between px-36">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-47/100 rounded-xl bg-gray-900 p-6"
        >
          <h1 className="text-xl font-bold">Send Me a Message</h1>
          <div className="mt-4 flex flex-col">
            <p>Your Name</p>
            <input
              type="text"
              placeholder="Jane Doe"
              className="mt-2 rounded-lg border border-gray-500 bg-gray-800 p-2"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <p>Email</p>
            <input
              type="text"
              placeholder="jane@example.com"
              className="mt-2 rounded-lg border border-gray-500 bg-gray-800 p-2"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <p>Subject</p>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="mt-2 rounded-lg border border-gray-500 bg-gray-800 p-2"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <p>Message</p>
            <textarea
              placeholder="I’d like to discuss a potential project..."
              className="mt-2 h-30 rounded-lg border border-gray-500 bg-gray-800 p-2"
            />
          </div>
          <button className="mt-8 w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-bold hover:bg-blue-700">
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
