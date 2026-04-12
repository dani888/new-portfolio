import { useState } from "react";

const recommendations = [
  {
    name: "Jacob Taormina",
    title: "Senior Software Engineer @ Bonterra",
    body: `"Daniel was a great coworker and someone I really enjoyed working with. He was thoughtful
in how he approached problems, asked insightful questions, and consistently took the time
to understand requirements before jumping into solutions. He communicated clearly, collaborated
well with the team, and was always willing to help when others needed support. Daniel brought
a positive attitude to the team and took pride in his work. Working alongside him made the team
better, and I wish him nothing but success in whatever he takes on next."`,
  },
  {
    name: "Harini Rajappa",
    title: "Director of Engineering @ Bonterra",
    body: `"Daniel was part of my team and contributed to some of our top client projects.
I truly appreciated his positive attitude, thoughtful communication, and collaborative spirit.
He was a pleasure to work with, and I wish him every success in his next opportunity."`,
  },
  {
    name: "Paul Cadle",
    title: "Manager @ Bonterra",
    body: `"Daniel was a pleasure to work with at Bonterra. He always prioritized
what was best for the customer, and valued the success of our team as a whole. I admire his
diligence in his work, and he routinely would take on extra tasks that were critical to
achieving the team and department goals. Daniel had positive relationships with all of the
developers on our team as well as cross-functionally, and worked well with all involved
parties to decipher unclear information/requirements and obtain what was needed to produce
a quality product. I had fun collaborating with Daniel, and really enjoyed seeing his growth
throughout our time together at Bonterra. I wish Daniel all the best in his next position!"`,
  },
  {
    name: "Nina Kim",
    title: "General Assembly TA",
    body: `"Daniel is naturally inquisitive and thoughtful in his ability to solve problems.
I was always impressed by his diligence and eagerness to jump ahead and learn new material
in an already intense and compact learning environment. Daniel is also skilled in his ability
to communicate well. As a TA, it made it easy for me to understand his thought process and
not to mention, parse through well written, clean and readable code. It was such a delight
working with Daniel and I have no doubt he will find great success as a software engineer!"`,
  },
  {
    name: "Daniel Hill",
    title: "General Assembly Fellow",
    body: `"Daniel was a really strong and skilled companion all throughout the time we worked
together. We worked on a full stack project together, and he had no problem stepping up to
the plate as a leader. He managed and prepared the materials perfectly and wasn't stubborn or
opinionated about his ideas. He had no problem working with the languages we used such as
Django, Python, JavaScript, CSS and HTML. He is an efficient, pleasant, and skilled person
to work with. I look forward to cooperating with him in the future."`,
  },
  {
    name: "Steve Braaksma",
    title: "General Assembly Fellow",
    body: `"I had the pleasure of working with Daniel on our capstone project for General
Assembly, a trip-planning app. It was an awesome experience, and Daniel impressed our whole
team with his goal-driven and positive mindset, leadership abilities and technical skills.
He is always excited to take on a new challenge, learn a new skill or add a new feature,
and also excelled in helping our team agree on our strategic direction."`,
  },
  {
    name: "Mario Recinos",
    title: "General Assembly Fellow",
    body: `"It was an excellent experience working with Daniel on the final capstone project
at General Assembly. Daniel is well organized, really knowledgeable and throughout the whole
cohort was very supportive and a person to go to for resources."`,
  },
];

const Recommend = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {recommendations.map(({ name, title, body }, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          {/* Header */}
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left
                       hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-xs text-gray-500">{title}</p>
              </div>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Body */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed italic whitespace-pre-line">
                {body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
