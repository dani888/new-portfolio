import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const Nav = () => {
    return (
      <>
      <nav>
        <div class="nav-wrapper grey darken-4">
        <a href="/" class="brand-logo center"><b>Portfolio</b></a>
          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="left hide-on-med-and-down">
            <li><Link to="/">
            <div>Home</div>
                </Link></li>
                <li><Link to="/about">
            <div>About</div>
                </Link></li>
                <li><Link to="/resume">
            <div>Contact Me</div>
                </Link></li>
                <li><Link to="/projects">
            <div>Projects</div>
                </Link></li>
          </ul>
      </div>
    </nav>

    <ul class="sidenav sidenav-close" id="mobile-demo">
      <li><Link to="/">
      <div>Home</div>
          </Link></li>
          <li><Link to="/about">
      <div>About</div>
          </Link></li>
          <li><Link to="/resume">
      <div>Contact Me</div>
          </Link></li>
          <li><Link to="/projects">
      <div>Projects</div>
          </Link></li>
          <hr />
          <li><Link to={{ pathname: "https://www.linkedin.com/in/daniel-werminghausen32112333/-werminghausen32112333/" }} target="_blank" >
      <div>LinkedIn</div>
          </Link></li>
          <li><Link to={{ pathname: "https://github.com/dani888" }} target="_blank" >
      <div>Github</div>
          </Link></li>
    </ul>
        </>
      );
    };

    

export default Nav;