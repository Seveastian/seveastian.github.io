import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Sebastian Graham
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <Link to="/">Portfolio</Link>
          <Link to="/materials">Materials</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>

            <Link
              to="/materials"
              onClick={() => setMenuOpen(false)}
            >
              Materials
            </Link>

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}