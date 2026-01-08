import { Link } from "react-router-dom";
// import Button from '@mui/material/Button'
import DaysJS from "../../public/images/30DaysJS.jpg";
import codewar from "../../public/images/codeware_logo.png";
import linkin from "../../public/images/Linkedin.png";
import freecodecamp from "../../public/images/freecodecamp.jpg";

import Carousel from "./Carousel";
const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <div className="flex">
        <div className="textbox">
          <h2>About Daniel</h2>
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                Hi my name is Daniel. I am a Software Engineer with a passion
                developing websites. I am from Germany, but grew up in
                Massachusetts Boston throughout most of my life. I am bilingual,
                speaking fluent German and English. I enjoy to travel and to run
                around Boston. My favorite source code editor is Visual Studio
                and my favored Language is JavaScript. I have graduated with a
                bachelor's degree in Computer Science from the University of
                Massachusetts Boston. I have work experience as a Web Developer
                at DreamingCode I also graduated from General Assembly's
                Software Engineering Imersive Full-time course consisting of 420
                hours. I want to join a team of passionate developers and
                together make a positive difference for the world.
              </div>
            </div>
          </div>
        </div>

        <Carousel />

        <div className="textbox">
          <h2>What Im Working On</h2>
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <div className="">
                  <p className="projp">
                    Status: Looking for Employment as a Software Engineer |
                    Front-end Developer. Check me out on{" "}
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
                  <hr />
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
