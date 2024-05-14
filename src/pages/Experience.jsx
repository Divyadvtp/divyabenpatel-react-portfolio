import React from "react";

export default function Experience({ pageRefs }) {
  const workExperience = [
    {
      experience: {
        companyName: "CISWP, Waterloo, ON",
        jobTitle: "Research Assistant (Co-op)",
        duration: "May 2023 - Aug 2023",
        responsibilities: {
          responsibility1:
            "Responsible for designing, developing, and testing a MERN stack-based data entry system. A further test was performed using Jest to verify the functionality of the data management system.",
          responsibility2:
            "Enhance data accuracy by designing and implementing intuitive data entry forms and integrating chart libraries (Apex Chart, Chart.js, D3.js) for highlighting report presentation.",
          responsibility3:
            "In collaboration with researchers, developed a Research Data Management System and Dashboard iteratively, addressing evolving requirements and enhancing the effectiveness of research data management.",
          responsibility4:
            "Improved system performance and user experience by leveraging MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, and Material UI.",
        },

      },
    },
    {
      experience: {
        companyName: "Orail Services PVT. LTD., Surat, India",
        jobTitle: "Frontend Developer",
        duration: "July 2017 - Dec 2020",
        responsibilities: {
          responsibility1:
            "Improved user engagement for a Diamond & Jewelry Industry Cloud-based ERP by developing pixel-perfect UIs.",
          responsibility2:
            "Designed prototype and built responsive and user-friendly B2B and B2C Ecommerce websites, and mail templates, ensuring cross-browser compatibility and lowering bounce rates.",
          responsibility3:
            "Conducted unit testing to validate functionality and enhance user experience.",
          responsibility4:
            "Significantly Reduced load time and enhanced performance through lazy loading, code splitting, and catching strategies",
          responsibility5:
            "Improved website performance by implementing optimization techniques such as lazy loading and code splitting.",
          responsibility6:
            "Developed the UI/UX for Optigo App CRM, collaborating with QA to ensure high-quality front-end development.",
          responsibility7:
            "Managed projects individually as well as in collaboration using Agile/Scrum methodologies along with consulting client for requirement gathering.",
          responsibility8:
            "Provided training and mentoring to two frontend developers, fostering an environment where continuous learning and improvement is encouraged.",
          responsibility9:
            "Technologies used: JavaScript, jQuery, React, C#, Material UI, Jest, version control (Git), Webpack.",
        },
      },
    },
    {
      experience: {
        companyName: "Junior Developer, Bangaluru, India",
        jobTitle: "Map System",
        duration: "Jan 2017 - June 2017",
        responsibilities: {
          responsibility1:
            "A successful conversion of flash games to HTML5 improved accessibility and engagement for users.",
          responsibility2:
            "Designed and developed customer-centric website using HTML5, CSS, Javascript, JQuery, implemented SEO best practices, and increased website traffic.",
          responsibility3:
            "Front-end elements have been optimized for loading speed and performance scalability, which results in an improved user experience.",
        },
      } 
    },
  ];

  return (
    <section id="experience-section" className="experience-flex-container" ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}>
      <div className="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="wh-svg-correct"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
        </svg>
        <h2>Work Experience</h2>
      </div>
      <div className="inner-content">
        <div className="flex-item">
          {workExperience.map((work, index) => {
             return(
              <div className="inner-flex-item" key={index}>
              <div className="experience-heading-flex">
                <h2>{work.experience.companyName}</h2>
                <h2>{work.experience.jobTitle}</h2>
                <h2>{work.experience.duration}</h2>
              </div>
              <ul className="list-disc">
                {Object.keys(work.experience.responsibilities).map((key, index) => {
                  return(
                    <li key={index}>{work.experience.responsibilities[key]}</li>
                  )
                })}
               
              </ul>
            </div>
           )    
          })}
        </div>
      </div>
    </section>
  );
}
