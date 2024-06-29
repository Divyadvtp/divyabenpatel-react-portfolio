import React from "react";

export default function Projects({ pageRefs }) {
  return (
    <section
      id="project-section"
      className="project-flex-container"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
    >
      
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
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h2>Projects</h2>
      </div>
      <div className="inner-content">
        <div className="grid-container">
          <div className="grid-item item-project-1">
            <a href="https://github.com/Divyadvtp/Daly-Music-Academy" target="_blank" rel="noopener noreferrer"><img src="./img/Project_1.png" alt="" /></a>
            {/* <button className="viewMoreBtn">View More</button> */}
          </div>
          <div className="grid-item item-project-2">
            <a href="https://github.com/Divyadvtp/divyabenpatel-react-portfolio" target="_blank" rel="noopener noreferrer"><img src="./img/Project_2.png" alt="" /></a>
          </div>
          {/* <div className="grid-item">3</div>
          <div className="grid-item">4</div> */}
        </div>
      </div>
    </section>
  );
}
