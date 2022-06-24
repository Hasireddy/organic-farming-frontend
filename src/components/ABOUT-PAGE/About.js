import React, { useContext } from "react";
import { themeContext } from "./Context";
import Testimonial from './Testimonial'
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Works from "./Works";


function About() {
  
  return (
    <div   className="About"
   >


      <div className='weAre'>
        <h1>WE ARE WEB DEVELOPER FROM WBS-CODING-SCHOOL</h1>
        <br />
        <h3>We dedicated our project to encourge people to healty lifestyle!</h3>
      </div>
    
      <Experience/>
        <Works/> 
       <Testimonial/>

       <Portfolio/>
     
    </div>





  )
}

export default About