import React, { Component } from "react";
import M from "materialize-css";

class Recommend extends Component {
  
  componentDidMount() {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  }

  render() {
    return (
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Nina Kim, General Assembly TA
          </div>
          <div className="collapsible-body">
            <span>
              "Daniel is naturally inquisitive and thoughtful in his ability to
              solve problems. I was always impressed by his diligence and
              eagerness to jump ahead and learn new material in an already
              intense and compact learning environment. Daniel is also skilled
              in his ability to communicate well. As a TA, it made it easy for
              me to understand his thought process and not to mention, parse
              through well written, clean and readable code. It was such a
              delight working with Daniel and I have no doubt he will find great
              success as a software engineer!"
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Daniel Hill, General Assembly
            Fellow
          </div>
          <div className="collapsible-body">
            <span>
              "Daniel was a really strong and skilled companion all throughout
              the time we worked together. We worked on a full stack project
              together, and he had no problem stepping up to the plate as a
              leader. He managed and prepared the materials perfectly and wasn't
              stubborn or opinionated about his ideas. He had no problem working
              with the languages we used such as Django, Python, JavaScript, CSS
              and HTML. He is an efficient, pleasant, and skilled person to work
              with. I look forward to cooperating with him in the future."
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Steve Braaksma, General Assembly
            Fellow
          </div>
          <div className="collapsible-body">
            <span>
              "I had the pleasure of working with Daniel on our capstone project
              for General Assembly, a trip-planning app. It was an awesome
              experience, and Daniel impressed our whole team with his
              goal-driven and positive mindset, leadership abilities and
              technical skills. He is always excited to take on a new challenge,
              learn a new skill or add a new feature, and also excelled in
              helping our team agree on our strategic direction."
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Mario Recinos, General Assembly
            Fellow
          </div>
          <div className="collapsible-body">
            <span>
              "It was an excellent experience working with Daniel on the final
              capstone project at General Assembly. Daniel is well organized,
              really knowledgeable and throughout the whole cohort was very
              supportive and a person to go to for resources."
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default Recommend;
