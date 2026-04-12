import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/",        label: "Home" },
  { to: "/about",   label: "About" },
  { to: "/resume",  label: "Contact Me" },
  { to: "/projects",label: "Projects" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className="text-white font-bold text-xl tracking-widest hover:text-blue-400 transition-colors duration-200"
          >
            Portfolio
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-stretch h-16">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="flex items-stretch">
                <Link
                  to={to}
                  className={`flex items-center px-6 text-sm font-bold tracking-wide transition-all duration-200 ${
                    isActive(to)
                      ? "bg-blue-600 text-white"
                      : "text-gray-200 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                isActive(to)
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}

          <hr className="border-gray-600 my-2" />

          <a
            href="https://www.linkedin.com/in/daniel-werminghausen32112333/"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-semibold text-blue-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dani888"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-semibold text-blue-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            GitHub
          </a>

          <hr className="border-gray-600 my-2" />

          <a
            href="https://dng-travel.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            Demo Site 1
          </a>
          <a
            href="https://nerd-dump.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            Demo Site 2
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
