import { Link } from "react-router-dom";
// import Button from '@mui/material/Button'
import DaysJS from "../../public/images/30DaysJS.jpg";
import codewar from "../../public/images/codeware_logo.png";
import linkin from "../../public/images/Linkedin.png";
import freecodecamp from "../../public/images/freecodecamp.jpg";
import leetcode from "../../public/images/leetcode_logo.png";

import Carousel from "./Carousel";
const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <div className="flex">
        <div className="textbox">
          <h3><b>ABOUT DANIEL</b></h3>
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    maxWidth: "900px",
                    margin: "0 auto",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    lineHeight: "1.7",
                  }}
                >
                  <p style={{ fontSize: "1.2rem", marginBottom: "30px", textAlign: "center", fontWeight: "500" }}>
                    Hi! My name is Daniel. I’m a Software Engineer with a passion for creating websites and building intuitive, user-friendly applications.
                  </p>

                  <ul style={{ listStyleType: "none", padding: 0, width: "100%" }}>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Background:</strong> Originally from Germany, raised in Boston, Massachusetts
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Languages:</strong> Bilingual in German and English
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Interests:</strong> Traveling, exploring Boston, problem-solving through code
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Development Tools:</strong> Visual Studio
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Primary Programming Language:</strong> JavaScript
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Education:</strong>
                      <ul style={{ listStyleType: "circle", paddingLeft: "20px", marginTop: "5px" }}>
                        <li>Bachelor’s degree in Computer Science, University of Massachusetts Boston</li>
                        <li>Completed General Assembly’s Software Engineering Immersive (420-hour full-time program)</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Professional Experience:</strong> Web Developer at DreamingCode
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ fontWeight: "700" }}>Career Goals:</strong> Eager to join a team of passionate developers to contribute skills and collaborate on meaningful, positive impact through technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel />

        <div className="textbox">
          <h3><b>WHAT IM WORKING ON</b></h3>
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <div className="">
                  <p className="projp">
                    <b>Status</b>: Looking for Employment. <br /> Software Engineer |
                    Front-end Developer | Full-Stack Developer. {" "}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/daniel-werminghausen32112333/-werminghausen32112333/"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Link
                    to={{ pathname: "https://javascript30.com/" }}
                    target="_blank"
                  >
                    <img
                      className="imgabout"
                      alt="i"
                      src={leetcode}
                      width="75"
                      height="75"
                    />
                  </Link>
                  <br />
                  <p className="projp">
                    Leet-Code Practice: I have been practicing coding problems
                    regularly on Leet-Code to sharpen my problem-solving skills
                    and prepare for technical interviews. 
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Link
                    to={{ pathname: "https://javascript30.com/" }}
                    target="_blank"
                  >
                    <img
                      className="imgabout"
                      alt="i"
                      src={DaysJS}
                      width="75"
                      height="75"
                    />
                  </Link>
                  <br />
                  <p className="projp">
                    30DaysJs: I am currently taking on the 30 days of Javascript
                    Coding challege. Any day I can find some spare time, I
                    attempt one problem.
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Link
                    to={{ pathname: "https://www.codewars.com/users/Danw1" }}
                    target="_blank"
                  >
                    <img
                      className="imgaboutcode"
                      alt="i"
                      src={codewar}
                      width="75"
                      height="75"
                    />
                  </Link>
                  <br />
                  <p className="projp">
                    Codewars offers a fun way to practice coding problems. Code
                    wars is a blast and makes me want to jump directly into the
                    next problem. These are great! I try to solve a a few here
                    and there.
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Link
                    to={{ pathname: "https://www.freecodecamp.org/" }}
                    target="_blank"
                  >
                    <img
                      className="imgaboutcode"
                      alt="i"
                      src={freecodecamp}
                      width="75"
                      height="75"
                    />
                  </Link>
                  <br />
                  <p className="projp">
                    FreeCodeCamp.org offers free fully immersive courses for
                    frontend development and javascript. I am currently working
                    my way through a 300 hour long Front end Development
                    certification course. It is such a great resource and would
                    definitely recommend.
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Link
                    to={{ pathname: "https://www.linkedin.com/learning/" }}
                    target="_blank"
                  >
                    <img
                      className="imgabout"
                      alt="i"
                      src={linkin}
                      width="75"
                      height="75"
                    />
                  </Link>
                  <br />
                  <p className="projp">
                    {" "}
                    I am very active on Linkedin. I like to write posts about my
                    progress. I also like to use LinkedIn Learning to take some
                    extra courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
