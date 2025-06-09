function Header() {
  return (
    <header className="text-white flex justify-between items-center py-6 mx-16">
      {/* left section */}
      <p className="text-2xl font-bold">TreBojx</p>
      {/* right section */}
      <div className="flex items-center w-2xl justify-between">
        <nav className="text-xl flex justify-around w-lg">
          <a href="" className="hover:text-blue-400">
            Home
          </a>
          <a href="" className="hover:text-blue-400">
            About
          </a>
          <a href="" className="hover:text-blue-400">
            Projects
          </a>
          <a href="" className="hover:text-blue-400">
            Skills
          </a>
          <a href="" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
        <button className="bg-blue-600 font-bold text-xl px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
