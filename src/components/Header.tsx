function Header() {
  return (
    <header className="text-white font-bold flex justify-between items-center py-6 mx-16">
      {/* left section */}
      <p className="text-2xl">TreBojx</p>
      {/* right section */}
      <div className="flex items-center w-2xl justify-between">
        <nav className="text-xl flex justify-around w-lg">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Skills</a>
          <a href="">Contact</a>
        </nav>
        <button className="bg-blue-600 text-xl px-6 py-2 rounded-full">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
