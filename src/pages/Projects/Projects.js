import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import p3 from "../../public/images/Screenshot1.png";
import p31 from "../../public/images/Screenshot4.png";
import p32 from "../../public/images/Screenshot5.png";
import p33 from "../../public/images/Screenshot6.png";
import p34 from "../../public/images/Screenshot7.png";
import p35 from "../../public/images/Screenshot8.png";
import p36 from "../../public/images/Screenshot9.png";
import p37 from "../../public/images/Screenshot10.png";
import p38 from "../../public/images/Screenshot11.png";

import p39 from "../../public/images/image7.jpg";
import p40 from "../../public/images/Screenshot12.png";
import p41 from "../../public/images/Screenshot13.png";
import p42 from "../../public/images/Screenshot14.png";
import p43 from "../../public/images/Screenshot15.png";
import p44 from "../../public/images/Screenshot16.png";

import GA from "../../public/images/GA_logo.jpg";
import DaysJS from "../../public/images/30DaysJS.jpg";
import UMBlogo from "../../public/images/UMBlogo.jpg";

const Projects = (props) => {
  return (
    <div className="projects">
      <br />
      <br />
      <div className="flex">
        <div className="textbox3">
          <h2><b>DANIEL'S PROJECTS</b></h2>
          <div class="column">
            <div class="col s12 m6">
              <div class="card">
                <h4>
                  <a href="https://generalassemb.ly/">
                    <img
                      className="GAlogo"
                      alt="i"
                      src={GA}
                      width="75"
                      height="75"
                    />
                  </a>
                  <br />
                  General Assembly Projects
                </h4>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p33}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://triplogapp.herokuapp.com/"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Triplog Django
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{ pathname: "https://github.com/dani888/Triplog" }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  Working with a team of four people to develop a full-stack
                  Django application. This application allows users to document
                  and log and details, photos, comments, and share their travels
                  with the public. Technologies: Django, Python, PostgreSQL,
                  HTML5, CSS3, JavaScript
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="LinkedUser"
                  src={p3}
                  width="400"
                  height="300"
                />
                <br />
                (Not Mobile friendly just yet) <br />
                <a
                  href="https://linked-user.netlify.app"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  React Linked User
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{ pathname: "https://github.com/dani888/Proj3-Frontend" }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  This is a full-stack mini Linked-In replica where users can
                  sign in and create user card profiles that anyone can search
                  for and lookup. As a user, you can view other users' profile
                  cards and come into contact with them. Technologies: React,
                  HTML5, CSS3, JSX, Firebase, Node, Express, MongoDB
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="Crudclimber"
                  src={p31}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://crudclimber.herokuapp.com/"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Crud Climber App
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname: "https://github.com/dani888/crud-climber-app",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  This is a full-stack application that allows the user to
                  register and log in. A user can view all available climbing
                  courses on the main page as well as create a new climbing
                  course that other users will see once they log in. Each user
                  can add any courses they like to their own scheduler page,
                  where they can keep track of their classes. Technologies:
                  Node, Express, HTML5, CSS3, MongoDB, JavaScript,
                  Authentication
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="cardgame"
                  src={p32}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://card-game-app.netlify.app"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  API Card Game Website
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname: "https://github.com/dani888/Wars-Card-Game-App",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  Creating a web application where you can play the card game
                  "wars". Using a classic card deck API to render and use the
                  cards for the game. Technologies: JavaScript, HTML5, CSS3,
                  JQuery
                </p>
                <hr className="lined" />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="col s12 m6">
              <div class="card">
                <h4>
                  <a href="https://javascript30.com/">
                    <img
                      className="GAlogo"
                      alt="i"
                      src={DaysJS}
                      width="75"
                      height="75"
                    />
                  </a>
                  <br />
                  30 Day JavaScript projects
                </h4>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p34}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://30dayjs-drumkit.netlify.app/"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Drum Kit Javascript
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/Javascript-Drum-Kit-01",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  Started the 30DaysJavaScript challenge and for the first
                  challenge we created simple Drumkit where users can press the
                  according buttons on thier keyboard to play drum sounds. It's
                  so much fun! Check it out. Technologies: Javascript, HTML5,
                  CSS3
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p35}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://codepen.io/Dan808/full/OJxXyYb"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Image Basic Filter JS
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-Varaibles-03",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my third day of 30DaysJavaScript challenge we created a
                  basic image filter where you can add spacing, background color
                  and blur the image. Great javascript excercise. Technologies:
                  Javascript, HTML5, CSS3
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p41}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://codepen.io/Dan808/full/BawzbrN"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dessert Flex Pannel
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-flex-pannel",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my fifth day of 30DaysJavaScript challenge we worked with
                  Flex css design to create an image flex panel. Hungry for
                  Desserts? Technologies: javaScript, HTML, CSS
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p42}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://codepen.io/Dan808/full/rNGjrPW"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  HTML5 Canvas paint brush
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-07painter",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my seventh day of 30DaysJavaScript challenge we create a
                  HTML5 canvas where you can use your mouse to draw colorful
                  images. Feel free to try it out! Technologies: HTML CSS
                  JavaScript
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p43}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://shadow-css-mouse-effect-30dayjs.netlify.app/"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  CSS-Mouse-Effect
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-cssTextshadow",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my Sixteenth day fo 30DaysJavaScript challenge we played
                  around with mouse css effects. Technologies: HTML CSS
                  JavaScript
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p44}
                  width="400"
                  height="300"
                />
                <br />
                <a
                  href="https://30dayjs-voice-recognition.netlify.app/"
                  class="underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Voice Recognition
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/dani888-30DayJS/tree/master/30DayJs-Speech",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my twentieth day fo 30DaysJavaScript challenge we played
                  around with javascript voice recognition feature.
                  Technologies: HTML CSS JavaScript
                </p>
                <hr className="lined" />
                <br />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="col s12 m6">
              <div class="card">
                <h4>
                  <a href="https://www.umb.edu/">
                    <img
                      className="GAlogo"
                      alt="i"
                      src={UMBlogo}
                      width="75"
                      height="75"
                    />
                  </a>
                  <br />
                  UMass Boston Projects
                </h4>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p36}
                  width="400"
                  height="300"
                />
                <br />
                Software Engineering Group Project
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my computer engineering course at the university of
                  Massachusetts Boston, my team and I created a student web
                  portal as part of a group project. The student portal was for
                  our professor to post projects so that students can log in
                  vote on which projects they prefer. This tool helped the
                  Professor to organize students into groups for team projects.
                  The technology stack: PHP, MySQL, HTML, and CSS.
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p37}
                  width="400"
                  height="300"
                />
                <br />
                CrimeForcasting Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/Crime-Forcasting/tree/master/term%20Project%20Crime%20Forcasting",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my Python course, as a final project we used real live
                  data about crime occurences from a part of Boston in 2016. We
                  created a matrix to display our final result. We search for
                  number cluster and can assume future crimes to appear.
                  Technologies: Python
                </p>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p38}
                  width="200"
                  height="300"
                />
                <br />
                Pizza Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888/cs437/tree/master/pizza2",
                  }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  For my Database course at UMB. We created a Pizza shop
                  application. A user would be able to select a size, choose
                  from many toppings, and order a pizza. Once the customer
                  orders a pizza, the data would be added to a table displaying
                  to the user what they ordered and when the pizza is ready.
                  Technologies: Php, Mysql, JQuery
                </p>
                <hr className="lined" />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="col s12 m6">
              <div class="card">
                <h4>
                  <img
                    className="GAlogo"
                    alt="i"
                    src={p39}
                    width="75"
                    height="75"
                  />
                  <br />
                  Personal Projects
                </h4>
                <hr className="lined" />
                <br />
                <img
                  className="imgproj"
                  alt="i"
                  src={p40}
                  width="400"
                  height="300"
                />
                <br />
                Job Finder API&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={{ pathname: "https://github.com/dani888/job-finder" }}
                  target="_blank"
                >
                  <Button variant="contained">Github</Button>
                </Link>
                <br />
                <hr className="lined" />
                <p className="projp">
                  This is a React application that scrapes Job websites such as
                  LinkedIn, Glassdoor, and many more. Once it has scraped the
                  data it will store the data in PostgreSQL database and display
                  jobs in a nicly formated table for the user to check out jobs
                  and apply. Technologies: PostgreSQL, React, JavaScript
                </p>
                <hr className="lined" />
                <br />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Projects;
