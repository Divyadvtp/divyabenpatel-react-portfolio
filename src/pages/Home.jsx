import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact  from "./Contact";


function Home({ pageRefs }) {
  
  
  return (
    <main className="homeContainer container" ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
      <section id="home-section" className="home-flex-container">
      
        
        <div className="inner-content">
        <div className="heroText">
            <h1>
              Divyaben <br /> Patel.
            </h1>
            <h3>
              Frontend Developer{" "}
              <span className="home-skills"> | JavaScript, TypeScript, React, Figma</span>{" "}
            </h3>
            <p className="myDescription">
              I am fond of crafting robust and scalable frontend products,
              ensuring excellent user experience.
            </p>
            {/* <div className="downloadCVBtn">
              <img
                className="emptyCircleBtn"
                src="img/emptyCircle.png"
                alt=""
              />
              <img
                className="downloadCvArrow"
                src="img/filledArrowCircle.png"
                alt=""
              />
              <p className="textDownloadCv">Download CV</p>
            </div> */}
        </div>
        <div className="heroImg">
            <img src="img/heroImageWithOutLine.png" alt="" />
        </div>
        </div>
      </section>
      <Skills pageRefs={pageRefs} />
      <Experience pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Education pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
    </main>
  );
}

export default Home;
