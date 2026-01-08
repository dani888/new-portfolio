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
            <h1 className="hero-title">
            <b>Welcome To <span id="colorD">Daniel's</span> Portfolio</b>
            </h1>
          </div>
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span className="role">Software Engineer</span>
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
        <Button
        className="homebut"
        href="#section2"
        variant="outlined"
        size="large"
        sx={{
          border: "2px solid black",
          color: "black",
          width: "220px",            // increase button width
          whiteSpace: "normal",      // allow text wrap
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#007BFF",
            color: "white",
            border: "4px solid #007BFF",
          },
          transition: "all 0.3s ease",
        }}
      >
        Technical Skill
      </Button>
      <br />
      <br />
  <Link to="/projects">
    <Button
      className="homebut"
      variant="outlined"
      size="large"
      sx={{
        border: "2px solid black",
        color: "black",
        minWidth: "220px",
        whiteSpace: "nowrap",
        padding: "10px 20px",
        "&:hover": {
          backgroundColor: "#007BFF",
          color: "white",
          border: "4px solid #007BFF",
        },
        transition: "all 0.3s ease",
      }}
    >
      Projects
    </Button>
  </Link>
      </div>
      <div className="main" id="section2">
        <div className="column">
          <div className="col s12 m6">
            <div className="card">
              <h4><b>TECHNICAL SKILLS</b></h4>
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
        <div className="homer2">
          {/* <div className="col s12 m6"> */}
            <div className="card">
              <h4><b>RECOMMENDATIONS</b></h4>
              <Recommend />
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Home;
