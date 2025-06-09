function Header() {
  return (
    <header className="mx-16 flex items-center justify-between py-6 text-white">
      {/* left section */}
      <p className="text-2xl font-bold">TreBojx</p>
      {/* right section */}
      <div className="flex w-2xl items-center justify-between">
        <nav className="flex w-lg justify-around text-xl">
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
        <button className="cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-xl font-bold hover:bg-blue-800">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
