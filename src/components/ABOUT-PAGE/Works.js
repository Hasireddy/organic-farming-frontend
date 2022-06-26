import React, { useContext } from "react";
import Upwork from "../ABOUT-PAGE/imges/img/Upwork.png";
import grapeLeaf from "../ABOUT-PAGE/imges/grapeleaf1.png";
import wbsCoding from "../ABOUT-PAGE/imges/wbs-coding.png";
import kivi from "../../assets/fruits/kivi.png";
import lemon from "../../assets/fruits/lemon.jpg";
import raspberries from "../../assets/fruits/raspberries.jpg";
import lingonberry from "../../assets/fruits/lingonberry.jpg";
import { themeContext } from "./Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
import works  from './work.css'

function Works() {
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          {/* <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span> */}
          <div
            className="blur s-blur1"
            style={{ background: "#cc3e3ef4" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 515 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-60px" }}
          transition={{ duration: 55.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={lemon} alt=""style={{"hight":"8rem","width":"8rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={kivi} alt="" style={{"hight":"8rem","width":"8rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={wbsCoding} alt="" style={{"hight":"10rem","width":"10rem", "border":"4px black solid" , "border-radius": "100%"}} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={ raspberries} alt="" style={{"hight":"8rem","width":"8rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={lingonberry} alt="" style={{"hight":"8rem","width":"8rem"}}/>
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        <div className="w-backCircleLeft orangeCircle"></div>
        <div className="w-backCircleLeft purpleCircle"></div>
      </div>
     
    </div>
  )
}







export default Works;
