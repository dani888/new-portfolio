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
            <i className="material-icons">person</i>Jacob Taormina, Senior Software Engineer @ Bonterra
          </div>
          <div className="collapsible-body">
            <span>
              "Daniel was a great coworker and someone I really enjoyed working with. He was thoughtful 
              in how he approached problems, asked insightful questions, and consistently took the time 
              to understand requirements before jumping into solutions. He communicated clearly, collaborated 
              well with the team, and was always willing to help when others needed support. Daniel brought 
              a positive attitude to the team and took pride in his work. Working alongside him made the team 
              better, and I wish him nothing but success in whatever he takes on next."
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Harini Rajappa, Director of Engineering @ Bonterra
          </div>
          <div className="collapsible-body">
            <span>
              "Daniel was part of my team and contributed to some of our top client projects. 
              I truly appreciated his positive attitude, thoughtful communication, and collaborative spirit. 
              He was a pleasure to work with, and I wish him every success in his next opportunity."
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">person</i>Paul Cadle, Manager @ Bonterra
          </div>
          <div className="collapsible-body">
            <span>
              "Daniel was a pleasure to work with at Bonterra. He always prioritized 
              what was best for the customer, and valued the success of our team as a 
              whole. I admire his diligence in his work, and he routinely would take 
              on extra tasks that were critical to achieving the team and department goals.
              Daniel had positive relationships with all of the developers on our team as 
              well as cross-functionally, and worked well with all involved parties to 
              decipher unclear information/requirements and obtain what was needed to 
              produce a quality product. I had fun collaborating with Daniel, and really enjoyed 
              seeing his growth throughout our time together at Bonterra. I wish Daniel all the 
              best in his next position!"
            </span>
          </div>
        </li>
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
