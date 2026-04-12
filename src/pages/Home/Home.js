import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import JS       from "../../public/images/JS_logo.png";
import HTML     from "../../public/images/html_logo.png";
import CSS      from "../../public/images/Css_logo.png";
import REACT    from "../../public/images/React.svg";
import NODE     from "../../public/images/nodejs_logo.png";
import DJPython from "../../public/images/Python_logo.png";
import DJANGO   from "../../public/images/django_logo.png";
import MongoDb  from "../../public/images/MongoDB-logo.png";
import PostgreSQL from "../../public/images/postgresql.png";
import Material  from "../../public/images/materialize.png";
import Firebase  from "../../public/images/firebase.png";
import Git       from "../../public/images/Git_logo.png";
import TS        from "../../public/images/typescript_logo.png";
import Tailwind  from "../../public/images/tailwind_logo.png";
import PLSQL     from "../../public/images/plsql_logo.png";
import JQuery    from "../../public/images/jquery_logo.png";

import Recommend from "./Recommend";

const skills = [
  { src: JS,         alt: "JavaScript"  },
  { src: HTML,       alt: "HTML5"       },
  { src: CSS,        alt: "CSS3"        },
  { src: REACT,      alt: "React"       },
  { src: NODE,       alt: "Node.js"     },
  { src: DJPython,   alt: "Python"      },
  { src: DJANGO,     alt: "Django"      },
  { src: MongoDb,    alt: "MongoDB"     },
  { src: PostgreSQL, alt: "PostgreSQL"  },
  { src: Material,   alt: "Materialize" },
  { src: Firebase,   alt: "Firebase"    },
  { src: Git,        alt: "Git"         },
  { src: TS,         alt: "TypeScript"  },
  { src: Tailwind,   alt: "Tailwind CSS"},
  { src: PLSQL,      alt: "PL/SQL"      },
  { src: JQuery,     alt: "jQuery"      },
];

const HeroBackground =
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2670&auto=format&fit=crop";

const Home = () => {
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlow((g) => ({ ...g, active: false }));
  }, []);

  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-24"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `linear-gradient(rgba(5,15,30,0.65), rgba(5,15,30,0.78)), url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Mouse spotlight glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle 550px at ${glow.x}% ${glow.y}%, rgba(59,130,246,0.18) 0%, transparent 70%)`,
            opacity: glow.active ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* ── Desktop: title + buttons in normal flow (hidden on mobile) ── */}
        <div className="hidden md:flex flex-col relative z-10 items-center text-center px-8 w-full max-w-5xl">
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span className="role">Software Engineer</span>
                <span>Daniel Werminghausen</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>
                "Any sufficiently advanced technology is indistinguishable from magic."
                <br />– Arthur C. Clarke
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-10 justify-center">
            <a
              href="#section2"
              className="px-8 py-4 rounded-xl border-2 border-white/70 text-white font-bold text-sm tracking-wide
                         hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              Technical Skills
            </a>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-xl border-2 border-white/70 text-white font-bold text-sm tracking-wide
                         hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              Projects
            </Link>
            <a
              href="#section3"
              className="px-8 py-4 rounded-xl border-2 border-white/70 text-white font-bold text-sm tracking-wide
                         hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm"
            >
              Recommendations
            </a>
          </div>
        </div>

        {/* ── Mobile hero layout (hidden on md+) ── */}
        <div className="md:hidden relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 space-y-6">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase">Software Engineer</p>
          <h1 className="text-4xl font-bold text-white leading-tight">
            Daniel<br />
            <span className="text-blue-400">Werminghausen</span>
          </h1>
          <p className="text-white/70 text-sm italic max-w-xs leading-relaxed">
            "Any sufficiently advanced technology is indistinguishable from magic."
            <br /><span className="not-italic text-white/50">– Arthur C. Clarke</span>
          </p>
          <div className="flex flex-col w-full max-w-xs gap-3 pt-2">
            <a
              href="#section2"
              className="w-full py-3 rounded-xl border-2 border-white/60 text-white font-semibold text-sm tracking-wide
                         hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Technical Skills
            </a>
            <Link
              to="/projects"
              className="w-full py-3 rounded-xl border-2 border-white/60 text-white font-semibold text-sm tracking-wide
                         hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Projects
            </Link>
            <a
              href="#section3"
              className="w-full py-3 rounded-xl border-2 border-white/60 text-white font-semibold text-sm tracking-wide
                         hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Recommendations
            </a>
          </div>
        </div>

        {/* ── Scroll indicator — always visible at bottom center ── */}
        <a
          href="#section2"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group px-4 py-2"
          aria-label="Scroll down"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white transition-colors duration-200">
            Scroll
          </span>
          <div className="relative w-0.5 h-10 sm:h-12 bg-white/25 overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 w-full bg-white rounded-full animate-scroll-line"
              style={{ height: "40%" }}
            />
          </div>
          <svg
            className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-200 -mt-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ── Technical Skills ── */}
      <section id="section2" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-12 rounded-full" />

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
              {skills.map(({ src, alt }) => (
                <div key={alt} className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 p-2
                                  group-hover:shadow-md group-hover:border-blue-200 transition-all duration-200">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-500 text-center leading-tight font-medium">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recommendations ── */}
      <section
        id="section3"
        className="py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.93), rgba(255,255,255,0.93)), url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 tracking-tight">
            Recommendations
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full" />
          <p className="text-center text-gray-500 mb-10 text-sm">Click any name to read the full recommendation</p>
          <Recommend />
        </div>
      </section>
    </>
  );
};

export default Home;
