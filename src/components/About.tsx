const experiences = [
  {
    title: 'BS in Information Technology',
    company: 'Polytechnic University of the Philippines, 2023-2025',
    description: 'Degree Awarded with Cum Laude',
  },
  {
    title: 'Frontend Web Developer Intern',
    company: 'Unified Internship Incorporated, 2023',
    description: 'Developed Responsive Web Page Layouts',
  },
  {
    title: 'Diploma in Information Technology',
    company: 'Polytechnic University of the Philippines, 2020-2023',
    description: 'With Hands on Experience in OJT',
  },
];

function About() {
  return (
    <section className="mx-36 flex justify-between py-20 text-white">
      {/* left section */}
      <div className="w-125">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="text-justify text-lg/8">
          <p className="mt-4">
            I'm a recent BSIT graduate with a specialization in web development. With a strong foundation in both
            front-end and back-end technologies, I create responsive, accessible, and user-friendly web applications.
          </p>
          <p className="mt-4">
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
        <div className="mt-5">
          {/* BSIT */}
          {experiences.map((experience) => (
            <article className="mb-10 flex">
              <div className="mt-1 mr-3 h-8 w-8 rounded-full bg-blue-900/30"></div>
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
      </div>
    </section>
  );
}

export default About;
