function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-gray-900 px-36 py-6 text-white">
      <h1 className="text-2xl font-bold">Jobert.dev</h1>
      <div className="flex w-2xl items-center justify-between">
        <nav>
          <ul className="flex w-lg justify-around">
            <li>
              <a href="" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="cursor-pointer rounded-full bg-blue-600 px-6 py-2 font-bold hover:bg-blue-700">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
