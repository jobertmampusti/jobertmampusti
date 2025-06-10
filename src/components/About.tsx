function About() {
  return (
    <section id="about" className="mx-36 flex justify-between py-20 text-white">
      {/* left section */}
      <div className="w-125">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="text-justify text-lg leading-8">
          <p className="mt-5">
            I'm a recent BSIT graduate with a specialization in web development. With a strong foundation in both
            front-end and back-end technologies, I create responsive, accessible, and user-friendly web applications.
          </p>
          <p className="mt-5">
            My journey in tech began during my university years where I discovered my passion for creating digital
            experiences that are both functional and beautiful. I'm constantly learning and adapting to new technologies
            and methodologies to stay at the forefront of web development.
          </p>
        </div>
      </div>
      {/* right section */}
      <div className="w-120 rounded-xl bg-gray-800 p-5 pb-12">
        <h1 className="text-xl font-bold">Education & Experience</h1>
        {/* container */}
        <div>
          {/* BSIT */}
          <article className="mt-5 flex">
            <div className="mt-1 mr-3 h-8 w-8 rounded-full bg-blue-900/30"></div>
            <div>
              <p className="text-lg font-bold">BS in Information Technology</p>
              <div className="text-gray-300">
                <p>Polytechnic University of the Philippines, 2023-2025</p>
                <p>Degree Awarded with Cum Laude</p>
              </div>
            </div>
          </article>
          {/* Internship */}
          <article className="mt-10 flex">
            <div className="mt-1 mr-3 h-8 w-8 rounded-full bg-blue-900/30"></div>
            <div>
              <p className="text-lg font-bold">Frontend Web Developer Intern</p>
              <div className="text-gray-300">
                <p>Unified Internship Incorporated, 2023</p>
                <p>Developed Responsive Web Page Layouts</p>
              </div>
            </div>
          </article>
          {/* DICT */}
          <article className="mt-10 flex">
            <div className="mt-1 mr-3 h-8 w-8 rounded-full bg-blue-900/30"></div>
            <div>
              <p className="text-lg font-bold">Diploma in Information Technology</p>
              <div className="text-gray-300">
                <p>Polytechnic University of the Philippines, 2020-2023</p>
                <p>With Hands on Experience in OJT</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
