import { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const Nav = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    const instances = M.Sidenav.init(elems);
    
    // Optional: return cleanup
    return () => {
      instances.forEach(instance => instance.destroy());
    };
  }, []);

  // Function to close sidenav when a link is clicked
  const closeSidenav = () => {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.getInstance(elem);
    if (instance) instance.close();
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <a href="/" className="brand-logo center"><b>Portfolio</b></a>

          <button
            type="button"
            data-target="mobile-demo"
            className="sidenav-trigger btn-flat"
            aria-label="Open navigation menu"
          >
            <i className="material-icons">menu</i>
          </button>

          <ul className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Contact Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/" onClick={closeSidenav}>Home</Link></li>
        <li><Link to="/about" onClick={closeSidenav}>About</Link></li>
        <li><Link to="/resume" onClick={closeSidenav}>Contact Me</Link></li>
        <li><Link to="/projects" onClick={closeSidenav}>Projects</Link></li>
        <hr />
        <li>
          <a href="https://www.linkedin.com/in/daniel-werminghausen32112333/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/dani888" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <hr />
        <li>
          <a href="https://dng-travel.netlify.app/" target="_blank" rel="noreferrer">
            Demo Site 1
          </a>
        </li>
        <li>
          <a href="https://nerd-dump.netlify.app/" target="_blank" rel="noreferrer">
            Demo Site 2
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
