import pdf  from "../../public/images/Resume.pdf";
import pdf2 from "../../public/images/Certification.pdf";

const bgResume =
  "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=2670&auto=format&fit=crop";

const Resume = () => {
  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${bgResume})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ── Heading ── */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Resume &amp; Contact</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* ── Bio card ── */}
        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-blue-500">
          <p className="text-gray-700 text-base leading-relaxed">
            Software engineer with a strong background in web development and computer science.
            I'm a collaborative team player who enjoys tackling challenging problems and
            continuously improving my skills. I value lifelong learning and adapt quickly to
            new technologies and evolving requirements.
          </p>
        </div>

        {/* ── Contact links ── */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/daniel-werminghausen32112333/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm
                       hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/dani888"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold text-sm
                       hover:bg-gray-900 transition-colors duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={pdf}
            download
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-sm
                       hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <a
            href={pdf2}
            download
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-400 text-gray-600 rounded-xl font-semibold text-sm
                       hover:bg-gray-600 hover:text-white hover:border-gray-600 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Certification
          </a>
        </div>

        {/* ── Resume PDF (desktop) ── */}
        <div className="hidden md:block">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Software_Engineer_Resume"
              src={pdf}
              className="w-full"
              style={{ height: "1100px" }}
            />
          </div>
        </div>

        {/* ── Certification PDF (desktop) ── */}
        <div className="hidden md:block">
          <h2 className="text-xl font-bold text-gray-800 mb-4">General Assembly Certification</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="GA_Certification"
              src={pdf2}
              className="w-full"
              style={{ height: "820px" }}
            />
          </div>
        </div>

        {/* ── Mobile view links ── */}
        <div className="md:hidden space-y-3">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl font-semibold
                       hover:bg-blue-700 transition-colors duration-200"
          >
            📄 View Resume (PDF)
          </a>
          <a
            href={pdf2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gray-700 text-white rounded-xl font-semibold
                       hover:bg-gray-800 transition-colors duration-200"
          >
            📄 View Certification (PDF)
          </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;
