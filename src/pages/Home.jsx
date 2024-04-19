import React from "react";
// {/* <h1>Welcome to Divya's magical world - Your Gateway to Digital Excellence!</h1> */}
// <h2>
// {/* "Passionate Web Developer ➺ Creating Startups & Transforming Static Websites into Dynamic Magic." */}
//   A Passionate web developer specializing in startup websites. Transforming static sites into dynamic magic. Your digital success is my mission.
// </h2>

function Home() {
  return (
    <div className="homeContainer">
      <div id="section_1">
        <div className="heroImg">
          <img src="img/heroImageWithOutLine.png" alt="" />
        </div>
        <div className="heroText">
          <h1>
            Divyaben <br /> Patel.
          </h1>
          <p className="myDescription">
            I am fond of crafting robust and scalable frontend products,
            ensuring excellent user experience
          </p>
          <div className="downloadCVBtn">
            <img className="emptyCircleBtn" src="img/emptyCircle.png" alt="" />
            <img
              className="downloadCvArrow"
              src="img/filledArrowCircle.png"
              alt=""
            />
            <p className="textDownloadCv">Download CV</p>
          </div>
        </div>
      </div>
      <div id="section_2">
       
      </div>
    </div>
  );
}

export default Home;
