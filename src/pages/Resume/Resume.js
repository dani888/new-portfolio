import pdf from "../../public/images/Resume.pdf";
import pdf2 from "../../public/images/Certification.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <br />
      <br />
      <div className="flex">
        {/* Intro text */}
        <div className="textbox">
          <h3 id="h1resume"><b>DANIEL RESUME & CONTACT</b></h3>
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <div>
                  Software engineer with a strong background in web development and computer science. I’m a collaborative team player who enjoys tackling challenging problems and continuously improving my skills. I value lifelong learning and adapt quickly to new technologies and evolving requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* Desktop iframe */}
        <iframe
          title="Software_Engineer"
          src={pdf}
          className="pdf-desktop"
          width="70%"
          height="1200px"
        ></iframe>

        <br />
        <br />
        <br />

        <iframe
          title="GA_Certification"
          src={pdf2}
          className="pdf-desktop"
          width="70%"
          height="850px"
        ></iframe>

        {/* Mobile buttons */}
        <div className="pdf-mobile">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            📄 View Resume (PDF)
          </a>
          <br />
          <a href={pdf2} target="_blank" rel="noopener noreferrer">
            📄 View Certification (PDF)
          </a>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Resume;
