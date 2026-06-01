import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Sebastian Graham
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <Link
            to="/"
            className="hover:text-cyan-400 transition-colors"
          >
            Portfolio
          </Link>

          <Link
            to="/materials"
            className="hover:text-cyan-400 transition-colors"
          >
            Materials
          </Link>

          {isHome && (
            <>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </a>

              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}