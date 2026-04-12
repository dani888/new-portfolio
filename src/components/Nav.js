import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About" },
  { to: "/resume",   label: "Contact Me" },
  { to: "/projects", label: "Projects" },
];

const externalLinks = [
  { href: "https://www.linkedin.com/in/daniel-werminghausen32112333/", label: "LinkedIn" },
  { href: "https://github.com/dani888",                                label: "GitHub" },
  { href: "https://dng-travel.netlify.app/",                           label: "Demo Site" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const linkBase = "flex items-center px-4 text-sm tracking-wide transition-all duration-200 border-b-2";
  const activeClass = "text-white font-bold border-blue-500";
  const inactiveClass = "text-gray-400 font-medium border-transparent hover:text-white hover:border-gray-500";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center h-16 gap-8">

          {/* Brand */}
          <Link
            to="/"
            className="text-white font-bold text-xl tracking-widest hover:text-blue-400 transition-colors duration-200 flex-shrink-0"
          >
            Portfolio
          </Link>

          {/* Desktop — internal nav links (left group) */}
          <ul className="hidden md:flex items-stretch h-16 flex-1">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="flex items-stretch">
                <Link
                  to={to}
                  className={`${linkBase} ${isActive(to) ? activeClass : inactiveClass}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop — external links (right group) */}
          <ul className="hidden md:flex items-stretch h-16 flex-shrink-0">
            {/* Divider */}
            <li className="flex items-center pr-2">
              <span className="h-5 w-px bg-gray-600" />
            </li>

            {externalLinks.map(({ href, label }) => (
              <li key={href} className="flex items-stretch">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkBase} text-xs ${inactiveClass}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden ml-auto text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 border-l-2 ${
                isActive(to)
                  ? "text-white font-bold border-blue-500 bg-gray-700"
                  : "text-gray-400 font-medium border-transparent hover:text-white hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}

          <hr className="border-gray-600 my-2" />

          {externalLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 border-l-2 border-transparent
                         hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
