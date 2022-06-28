import React, { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./Experience";
import Works from "./Works";
import "./About.css";

function About() {

  return (
    <div className="About " >
      <br />
<Experience />
 <Works />

      <div className='weAre'>
        <h1>WE ARE WEB DEVELOPERS FROM WBS-CODING-SCHOOLS</h1>
        <br />
        <h3>We dedicated our project to encourge people to healthy lifestyle!</h3>
      </div>

    </div>





  )
}

export default About