import React from "react";
import CorrectIconSvg from "../components/CorrectIconSvg";

export default function Skills({ pageRefs }) {
  const skills = [
    "JavaScript", "jQuery", 
    "React", "Redux", 
    "TypeScript", "Node.js", 
    "Express.js", "Vue.js", 
    "MongoDB", "SQL",
    "HTML", "CSS",
    "Material UI", "Tailwind", 
    "Bootstrap", "Figma",
    "Sketch", "Jest",
    "React Testing Library", "Cypress",
    "Git", "Docker", "JIRA", "Agile Development"

  ]
  return (
    <section id="skills-section" className="skills-flex-container" ref={el => pageRefs.current = { ...pageRefs.current, skills: el }}>
      <div className="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="wh-svg-correct"
        >
          <path d="M13 7H7v6h6V7z"></path>
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h2>Skills & Technologies</h2>
      </div>
      <div className="inner-content">
        <div className="row">
          {skills.map((skill, index) => {
            return(
              <div className="col" key={index}>
                <CorrectIconSvg />
                {skill}
              </div> 
            )
          })}
           
        </div>
      </div>
    </section>
  );
}

// {/* <article className="skills-article1 article-data">
//             <div className="cavalier-content1">
//               <h1>
//                 Design
//               </h1>
//               <p className="myDescription">
//                 I’m probably not a traditional  designer who can manipulate pixels by pixels,
//                 but I design a bit to transform my imaginative vision to life by designing
//                 entire layout of the system, logo, ensuring color contrast and font comply with accessibility standards and then you can catch me behind the stylesheet (~_^) to make it reality during development process.
//               </p>
//             </div>
//             <div>
//               <img src="img/LaptopCode.png" alt="" />
//             </div>
//           </article>
//           <article className="skills-article2 article-data">
//           <div>
//               <img src="img/Figma.png" alt="" />
//             </div>
//             <div className="cavalier-content2">
//               <h1>
//                 Developer
//               </h1>
//               <p className="myDescription">
//                 I’m probably not a traditional  designer who can manipulate pixels by pixels,
//                 but I design a bit to transform my imaginative vision to life by designing
//                 entire layout of the system, logo, ensuring color contrast and font comply with accessibility standards and then you can catch me behind the stylesheet (~_^) to make it reality during development process.
//               </p>
//             </div>

//           </article> */}
