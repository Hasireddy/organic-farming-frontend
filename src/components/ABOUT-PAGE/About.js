//import React, { useContext } from "react";
//import { themeContext } from "./Context";
import Experience from "./Experience";
import Works from "./Works";
import "./About.css";

function About() {

  return (
    <div className="About " >
      <br />
      <Experience />
   {/*    <Works /> */}

      <div className='weAre'>
        <h1>WE ARE WEB DEVELOPERS FROM WBS-CODING-SCHOOL</h1>
        <br />
        <div
            className="blur s-blur1"
            style={{ background: "#cc3e3ef4" }}
          ></div>
        <br />
        <div className="awesome">
          {/* dark Mode */}
          {/* <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span> */}
          <div
            className="blur s-blur1"
            style={{ background: "rgb(176, 230, 82)" }}
          ></div>
        </div>

       <br />
        <h3>We dedicated our project to encourge people to healthy lifestyle!</h3>
      </div>
 <Works />
    </div>





  )
}

export default About