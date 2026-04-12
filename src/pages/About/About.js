import DaysJS      from "../../public/images/30DaysJS.jpg";
import codewar     from "../../public/images/codeware_logo.png";
import linkin      from "../../public/images/Linkedin.png";
import freecodecamp from "../../public/images/freecodecamp.jpg";
import leetcode    from "../../public/images/leetcode_logo.png";

import Carousel from "./Carousel";

const aboutItems = [
  { label: "Background",                  value: "Originally from Germany, raised in Boston, Massachusetts" },
  { label: "Languages",                   value: "Bilingual in German and English" },
  { label: "Interests",                   value: "Traveling, exploring Boston, problem-solving through code" },
  { label: "Development Tools",           value: "Visual Studio Code" },
  { label: "Primary Programming Language",value: "JavaScript" },
  {
    label: "Education",
    value: null,
    list: [
      "Bachelor's degree in Computer Science, University of Massachusetts Boston",
      "Completed General Assembly's Software Engineering Immersive (420-hour full-time program)",
    ],
  },
  { label: "Professional Experience",     value: "Web Developer at DreamingCode" },
  {
    label: "Career Goals",
    value: "Eager to join a team of passionate developers to contribute skills and collaborate on meaningful, positive impact through technology",
  },
];

const learningResources = [
  {
    img: leetcode,
    alt: "LeetCode",
    href: "https://leetcode.com/",
    title: "LeetCode Practice",
    body: "I have been practicing coding problems regularly on LeetCode to sharpen my problem-solving skills and prepare for technical interviews.",
  },
  {
    img: DaysJS,
    alt: "30 Days of JavaScript",
    href: "https://javascript30.com/",
    title: "30 Days of JavaScript",
    body: "I am currently taking on the 30 days of Javascript coding challenge. Any day I can find some spare time, I attempt one problem.",
  },
  {
    img: codewar,
    alt: "Codewars",
    href: "https://www.codewars.com/users/Danw1",
    title: "Codewars",
    body: "Codewars offers a fun way to practice coding problems. It's a blast and makes me want to jump directly into the next problem. I try to solve a few here and there.",
  },
  {
    img: freecodecamp,
    alt: "freeCodeCamp",
    href: "https://www.freecodecamp.org/",
    title: "freeCodeCamp",
    body: "freeCodeCamp offers free fully immersive courses for frontend development and JavaScript. I am currently working through a 300-hour Front End Development certification.",
  },
  {
    img: linkin,
    alt: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/",
    title: "LinkedIn Learning",
    body: "I am very active on LinkedIn. I like to write posts about my progress and use LinkedIn Learning to take extra courses.",
  },
];

const About = () => {
  const bgAbout =
    "https://images.unsplash.com/photo-1496284575094-d5b92db3890d?q=80&w=2670&auto=format&fit=crop";

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${bgAbout})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 55%",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Section heading ── */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">About Daniel</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* ── Bio card + Carousel ── */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="text-gray-700 text-base font-medium mb-6 leading-relaxed">
              Hi! My name is Daniel. I'm a Software Engineer with a passion for creating websites
              and building intuitive, user-friendly applications.
            </p>
            <ul className="space-y-4">
              {aboutItems.map(({ label, value, list }) => (
                <li key={label} className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">{label}: </span>
                  {value && <span>{value}</span>}
                  {list && (
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
                      {list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel */}
          <div className="flex flex-col gap-6">
            <Carousel />
            {/* Status badge */}
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
              <p className="font-bold text-gray-900 mb-1">Current Status</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Looking for employment — <span className="font-semibold text-gray-800">Software Engineer | Front-end Developer | Full-Stack Developer.</span>{" "}
                <a
                  href="https://www.linkedin.com/in/daniel-werminghausen32112333/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── What I'm Working On ── */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">What I'm Working On</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningResources.map(({ img, alt, href, title, body }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-4
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                  <img src={img} alt={alt} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
