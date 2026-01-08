import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import JS from "../../public/images/JS_logo.png";
import HTML from "../../public/images/html_logo.png";
import CSS from "../../public/images/Css_logo.png";
import REACT from "../../public/images/React.svg";
import NODE from "../../public/images/nodejs_logo.png";
import DJPython from "../../public/images/Python_logo.png";
import DJANGO from "../../public/images/django_logo.png";
import MongoDb from "../../public/images/MongoDB-logo.png";
import PostgreSQL from "../../public/images/postgresql.png";
import material from "../../public/images/materialize.png";
import firebase from "../../public/images/firebase.png";
import Git from "../../public/images/Git_logo.png";

import Recommend from "./Recommend";

const Home = (props) => {
  return (
    <>
      <div className="homer">
        <br />
        <br />
        <br />
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
        </div>
        <div className="flex">
          <div className="w3-container w3-center w3-animate-top">
            <h2>
              Welcome To <span id="colorD">Daniel's</span> Porfolio
            </h2>
          </div>
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span>Software Engineer</span>
                <span>Daniel Werminghausen</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>
                “Any sufficiently advanced technology is indistinguishable from
                magic.” – Arthur C. Clarke
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div class="w3-container w3-center w3-animate-left">
          <Button
            className="homebut"
            href="#section2"
            variant="outlined"
            size="large"
          >
            Technical Skill
          </Button>
          <br />
          <br />
        </div>
        <div class="w3-container w3-center w3-animate-right">
          <Link to="/projects">
            <Button
              className="homebut"
              href="#section2"
              variant="outlined"
              size="large"
            >
              Projects
            </Button>
          </Link>
        </div>
      </div>
      <div className="main" id="section2">
        <div className="column">
          <div className="col s12 m6">
            <div className="card">
              <h4>Technical Skills:</h4>
              <img
                className="imghome"
                alt="i"
                src={JS}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={HTML}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={CSS}
                width="80"
                height="95"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={REACT}
                width="100"
                height="80"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={NODE}
                width="100"
                height="80"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghomepy"
                alt="i"
                src={DJPython}
                width="110"
                height="75"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={DJANGO}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={MongoDb}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={PostgreSQL}
                width="90"
                height="95"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={material}
                width="90"
                height="95"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={firebase}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
              <img
                className="imghome"
                alt="i"
                src={Git}
                width="100"
                height="100"
              />
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      {/* <br /> */}
      <div className="column">
        <div className="col s12 m6">
          <div className="card ">
            <h4>Recommendations:</h4>
            <Recommend />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
