import React from 'react'
import { themeContext } from "./Context";
import "./Experience.css";

function Experience() {
  return (
    
    <div className="experience" id='experience'>
    
    <div className="achievement">
      <div className="circle" >Uma</div>
    </div>
    <div className="achievement">
      <div className="circle" >Ercan</div>
    </div>
    <div className="achievement">
      <div className="circle" >Isaiah</div>
    </div>
    <div
            className="blur s-blur1"
            style={{ background: "#3a89", "height":"200px"}}
          ></div>
  </div>
  )
}

export default Experience