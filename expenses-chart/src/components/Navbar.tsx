import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="bg-cyan fixed top-0 inset-x-0">
      <div className="h-20 max-w-[1024px] w-full mx-auto flex items-center justify-between px-4">
        <h1 className="text-lg font-bold text-brown-50">Logo</h1>

        <button onClick={() => setShowNavbar(!showNavbar)} className="cursor-pointer text-brown-50 sm:hidden">
          <VscThreeBars size={28} />
        </button>

        <nav className={`
          absolute right-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-around items-center bg-soft-red ${showNavbar ? "translate-x-0" : "translate-x-full"} transition-transform duration-300
          sm:relative sm:bg-cyan sm:flex-row sm:top-0 sm:h-auto sm:translate-x-0 sm:w-auto sm:gap-20 sm:transition-none
        `}>
          <a href="">Início</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </header>
  );
}