function Home() {
  return (
    <section className="flex flex-col py-30 text-center text-white">
      <h1 className="text-5xl/16 font-bold">
        Hi, I'm Jobert<br></br> A Web Developer
      </h1>
      <div className="mt-3 text-xl/8">
        <p>I craft responsive websites where technology meets creativity.</p>
        <p>Fresh graduate with a passion for building digital experiences.</p>
      </div>
      <div className="mt-10 font-bold">
        <a href="" className="mr-3 rounded-full bg-blue-600 px-6 py-3 hover:bg-blue-700">
          View My Work
        </a>
        <a
          href=""
          className="rounded-full border border-gray-700 bg-gray-800 px-6 py-3 text-blue-400 hover:bg-gray-700"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
