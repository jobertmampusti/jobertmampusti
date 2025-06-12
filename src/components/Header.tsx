function Header() {
  return (
    <header className="sticky top-0 z-1000 flex h-20 items-center justify-between bg-gray-900 px-50 text-white">
      <h1 className="text-2xl font-bold">Jobert</h1>
      <div className="flex w-2xl items-center justify-between">
        <nav>
          <ul className="flex w-lg justify-around">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="/resume.pdf"
          download="jobert_mampusti_resume.pdf"
          className="rounded-full bg-blue-600 px-6 py-2 font-bold hover:bg-blue-700"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
