import p33  from "../../public/images/Screenshot6.png";
import p3   from "../../public/images/Screenshot1.png";
import p31  from "../../public/images/Screenshot4.png";
import p32  from "../../public/images/Screenshot5.png";
import p34  from "../../public/images/Screenshot7.png";
import p35  from "../../public/images/Screenshot8.png";
import p41  from "../../public/images/Screenshot13.png";
import p42  from "../../public/images/Screenshot14.png";
import p43  from "../../public/images/Screenshot15.png";
import p44  from "../../public/images/Screenshot16.png";
import p36  from "../../public/images/Screenshot9.png";
import p37  from "../../public/images/Screenshot10.png";
import p38  from "../../public/images/Screenshot11.png";
import p39  from "../../public/images/image7.jpg";
import p40  from "../../public/images/Screenshot12.png";

import GA        from "../../public/images/GA_logo.jpg";
import DaysJS    from "../../public/images/30DaysJS.jpg";
import UMBlogo   from "../../public/images/UMBlogo.jpg";
import air600Img    from "../../public/images/600air_screenshot.png";
import blogImg       from "../../public/images/blog_screenshot.png";
import reactLearnImg from "../../public/images/react_learn_screenshot.png";

/* ── Data ── */
const categories = [
  {
    logo: p39,
    logoHref: null,
    title: "Professional & Personal Projects",
    projects: [
      {
        img: air600Img,
        name: "600 AirSuspension Website",
        live: "https://600airdemo.netlify.app/",
        github: null,
        desc: "Modernizing the 600 AirSuspension website — a full rebuild focused on performance, design, and user experience.",
        tech: ["React 19", "Vite", "React Router DOM v7", "Tailwind CSS v4", "JavaScript (JSX)"],
      },
      {
        img: p40,
        name: "Job Finder API",
        live: null,
        github: "https://github.com/dani888/job-finder",
        desc: "A React app that scrapes job sites (LinkedIn, Glassdoor, and more), stores results in PostgreSQL, and displays them in a formatted table.",
        tech: ["PostgreSQL", "React", "JavaScript"],
      },
      {
        img: blogImg,
        name: "The Dev Blog",
        live: "https://dog-blog8.netlify.app/",
        github: null,
        desc: "A full-stack blog platform with real-time comments stored via Firebase, category filtering, and an About page powered by the Giphy API.",
        tech: ["React", "Firebase", "Giphy API", "SQL", "JavaScript"],
      },
      {
        img: reactLearnImg,
        name: "React Learning Hub",
        live: "https://react80808.netlify.app/",
        github: "https://github.com/dani888/React-learning",
        desc: "An interactive app that teaches the fundamentals of React — covering all the essential hooks, Tailwind CSS styling, and Node.js basics.",
        tech: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
      },
    ],
  },
  {
    logo: GA,
    logoHref: "https://generalassemb.ly/",
    title: "General Assembly Projects",
    projects: [
      {
        img: p33,
        name: "Triplog Django",
        live: null,
        github: "https://github.com/dani888/Triplog",
        desc: "Working with a team of four to develop a full-stack Django application. Users can document details, photos, comments, and share their travels with the public.",
        tech: ["Django", "Python", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
      },
      {
        img: p3,
        name: "React Linked User",
        note: "Not Mobile friendly just yet",
        live: "https://linked-user.netlify.app",
        github: "https://github.com/dani888/Proj3-Frontend",
        desc: "A full-stack mini LinkedIn replica where users can sign in, create profile cards that anyone can search for and look up.",
        tech: ["React", "HTML5", "CSS3", "JSX", "Firebase", "Node", "Express", "MongoDB"],
      },
      {
        img: p31,
        name: "Crud Climber App",
        live: null,
        github: "https://github.com/dani888/crud-climber-app",
        desc: "A full-stack app where users can register, log in, view climbing courses, create new courses, and track classes on a personal scheduler.",
        tech: ["Node", "Express", "HTML5", "CSS3", "MongoDB", "JavaScript", "Auth"],
      },
      {
        img: p32,
        name: "API Card Game Website",
        live: "https://card-game-app.netlify.app",
        github: "https://github.com/dani888/Wars-Card-Game-App",
        desc: "A web app where you can play the card game \"Wars\" using a classic card deck API to render and play the game.",
        tech: ["JavaScript", "HTML5", "CSS3", "jQuery"],
      },
    ],
  },
  {
    logo: DaysJS,
    logoHref: "https://javascript30.com/",
    title: "30 Day JavaScript Projects",
    projects: [
      {
        img: p34,
        name: "Drum Kit",
        live: "https://30dayjs-drumkit.netlify.app/",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/Javascript-Drum-Kit-01",
        desc: "Day 1 — A Drumkit where users press keyboard buttons to play drum sounds.",
        tech: ["JavaScript", "HTML5", "CSS3"],
      },
      {
        img: p35,
        name: "Image Basic Filter",
        live: "https://codepen.io/Dan808/full/OJxXyYb",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-Varaibles-03",
        desc: "Day 3 — A basic image filter: add spacing, change background color, and blur the image.",
        tech: ["JavaScript", "HTML5", "CSS3"],
      },
      {
        img: p41,
        name: "Dessert Flex Panel",
        live: "https://codepen.io/Dan808/full/BawzbrN",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-flex-pannel",
        desc: "Day 5 — Flex CSS design to create an image flex panel. Hungry for desserts?",
        tech: ["JavaScript", "HTML", "CSS"],
      },
      {
        img: p42,
        name: "HTML5 Canvas Paint Brush",
        live: "https://codepen.io/Dan808/full/rNGjrPW",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-07painter",
        desc: "Day 7 — An HTML5 canvas where you can draw colorful images with your mouse.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        img: p43,
        name: "CSS Mouse Effect",
        live: "https://shadow-css-mouse-effect-30dayjs.netlify.app/",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-cssTextshadow",
        desc: "Day 16 — Playing around with mouse CSS text-shadow effects.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        img: p44,
        name: "Voice Recognition",
        live: "https://30dayjs-voice-recognition.netlify.app/",
        github: "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-Speech",
        desc: "Day 20 — Playing around with the JavaScript Speech Recognition API.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
  {
    logo: UMBlogo,
    logoHref: "https://www.umb.edu/",
    title: "UMass Boston Projects",
    projects: [
      {
        img: p36,
        name: "Engineering Student Portal",
        live: null,
        github: null,
        desc: "A student portal for a professor to post projects and let students log in and vote on which projects they prefer — used to organize students into groups.",
        tech: ["PHP", "MySQL", "HTML", "CSS"],
      },
      {
        img: p37,
        name: "Crime Forecasting",
        live: null,
        github: "https://github.com/dani888/Crime-Forcasting/tree/master/term%20Project%20Crime%20Forcasting",
        desc: "Used real crime occurrence data from Boston in 2016 to create a matrix, search for number clusters, and predict future crime locations.",
        tech: ["Python"],
      },
      {
        img: p38,
        name: "Pizza Shop",
        live: null,
        github: "https://github.com/dani888/cs437/tree/master/pizza2",
        desc: "A pizza shop app where users select size and toppings, order, and see their order displayed in a table with an estimated ready time.",
        tech: ["PHP", "MySQL", "jQuery"],
      },
    ],
  },
];

/* ── Sub-components ── */
const TechBadge = ({ label }) => (
  <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs rounded-full font-medium whitespace-nowrap">
    {label}
  </span>
);

/* Regular card — used in multi-project grids */
const ProjectCard = ({ img, name, note, live, github, desc, tech }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg
                  transition-all duration-200 hover:-translate-y-1 flex flex-col h-full">
    <div className="aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
      {note && <p className="text-xs text-amber-600 font-medium italic mb-2">{note}</p>}
      <p className="text-gray-500 text-xs leading-relaxed flex-1">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {tech.map((t) => <TechBadge key={t} label={t} />)}
      </div>
      {(live || github) && (
        <div className="flex gap-2 mt-4">
          {live && (
            <a href={live} target="_blank" rel="noreferrer"
              className="flex-1 text-center py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg
                         hover:bg-blue-700 transition-colors duration-200">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              className="flex-1 text-center py-2 bg-gray-800 text-white text-xs font-semibold rounded-lg
                         hover:bg-gray-900 transition-colors duration-200">
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

/* Featured card — used when a category has only one project */
const FeaturedCard = ({ img, name, note, live, github, desc, tech }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg
                  transition-all duration-200 flex flex-col sm:flex-row">
    {/* Image — top on mobile, left side on desktop */}
    <div className="sm:w-5/12 aspect-video sm:aspect-auto overflow-hidden bg-gray-100 flex-shrink-0">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    {/* Content */}
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="font-bold text-gray-900 text-base mb-2">{name}</h3>
        {note && <p className="text-xs text-amber-600 font-medium italic mb-2">{note}</p>}
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>
        {(live || github) && (
          <div className="flex gap-2 mt-5">
            {live && (
              <a href={live} target="_blank" rel="noreferrer"
                className="flex-1 text-center py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg
                           hover:bg-blue-700 transition-colors duration-200">
                Live Demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer"
                className="flex-1 text-center py-2.5 bg-gray-800 text-white text-sm font-semibold rounded-lg
                           hover:bg-gray-900 transition-colors duration-200">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

/* Grid columns based on item count */
const gridCols = (count) => {
  if (count === 1) return "";                          // featured card, no grid needed
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  if (count === 4) return "grid-cols-1 sm:grid-cols-2";
  if (count >= 5)  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2";
};

const bgProjects =
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80";

/* ── Page ── */
const Projects = () => {
  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${bgProjects})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 55%",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Page heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Daniel's Projects</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories */}
        {categories.map(({ logo, logoHref, title, projects }) => (
          <section key={title}>

            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              {logo && logoHref && (
                <a href={logoHref} target="_blank" rel="noreferrer">
                  <img src={logo} alt={title}
                    className="w-12 h-12 rounded-xl object-contain border border-gray-200 bg-white p-1 shadow-sm" />
                </a>
              )}
              {logo && !logoHref && (
                <img src={logo} alt={title}
                  className="w-12 h-12 rounded-xl object-cover border border-gray-200 shadow-sm" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <div className="w-8 h-0.5 bg-blue-500 mt-1 rounded-full" />
              </div>
            </div>

            {/* Single project → featured horizontal card */}
            {projects.length === 1 ? (
              <FeaturedCard {...projects[0]} />
            ) : (
              <div className={`grid gap-6 items-stretch ${gridCols(projects.length)}`}>
                {projects.map((proj) => (
                  <ProjectCard key={proj.name} {...proj} />
                ))}
              </div>
            )}

          </section>
        ))}

      </div>
    </div>
  );
};

export default Projects;
