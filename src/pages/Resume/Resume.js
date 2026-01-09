// import Emailform from "./Emailform";

import pdf from "../../public/images/Resume.pdf";
import pdf2 from "../../public/images/Certification.pdf";
// import linkin from "../../public/images/Linkedin.png";
// import resum from "../../public/images/resume.io.png";
// import git from "../../public/images/Git_logo.png";
// import gmail from "../../public/images/Gmail_logo.png";
// import github from "../../public/images/Github_logo.png";

const Resume = (props) => {
  return (
    <div className="resume">
      <br />
      <br />
      <div className="flex">
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

        <iframe
          title="Software_Engineer"
          src={pdf}
          width="70%"
          height="1200px"
        ></iframe>

        <br />
        <br />
        <br />

        <iframe
          title="GA_Certification"
          src={pdf2}
          width="70%"
          height="850px"
        ></iframe>
        <br />
        <br />

        {/* <div className="w3-container w3-center w3-animate-right resumec">
          <a
            href="https:/https://resume.io/r/MMzUgbn97/r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="imgresume"
              alt="Resume.io"
              src={resum}
              width="160"
              height="160"
            />
          </a>
          <hr className="lined2 imgresume" />

          <a
            href="https://www.linkedin.com/in/daniel-werminghausen32112333//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="imgresume"
              alt="LinkedIn"
              src={linkin}
              width="130"
              height="130"
            />
          </a>
          <hr className="lined2 imgresume" />

          <a
            href="https://github.com/dani888ni888?tab=overview&from=2021-11-01&to=2021-11-09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="imgresume github"
              alt="GitHub"
              src={github}
              width="160"
              height="100"
            />
          </a>
          <hr className="lined2 imgresume" />

          <a href="mailto:Daniel.werminghausen@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              className="imgresume"
              alt="Email"
              src={gmail}
              width="130"
              height="80"
            />
          </a>
        </div>

        <br />

        <div className="textbox">
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <div className="flexbuttons">
                  <a
                    href="https://www.linkedin.com/in/daniel-werminghausen32112333/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="imgresume2"
                      alt="LinkedIn"
                      src={linkin}
                      width="75"
                      height="75"
                    />
                  </a>

                  <a
                    href="https:/https://resume.io/r/MMzUgbn97/r/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="imgresume2"
                      alt="Resume.io"
                      src={resum}
                      width="80"
                      height="80"
                    />
                  </a>

                  <a
                    href="https://github.com?tab=overview&from=2021-11-01&to=2021-11-09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="imgresume2"
                      alt="GitHub"
                      src={git}
                      width="70"
                      height="70"
                    />
                  </a>

                  <a href="mailto:Daniel.werminghausen@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img
                      className="imgresume2"
                      alt="Email"
                      src={gmail}
                      width="110"
                      height="75"
                    />
                  </a>

                  <b className="mobilemail">
                    <br />
                    Email:
                    <a href="mailto:Daniel.werminghausen@gmail.com"> Daniel.werminghausen@gmail.com </a>
                  </b>
                </div>

                <b className="mobilemail2">
                  <br />
                  Email:
                  <a href="mailto:Daniel.werminghausen@gmail.com"> Daniel.werminghausen@gmail.com </a>
                </b>
                <br />
                Send me a Message:
                <Emailform />
              </div>
            </div>
          </div>
        </div> */}

        <br />
      </div>
    </div>
  );
};

export default Resume;
