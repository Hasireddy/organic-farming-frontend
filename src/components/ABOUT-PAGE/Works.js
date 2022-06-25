import React, { useContext } from "react";
import Upwork from "../ABOUT-PAGE/imges/img/Upwork.png";
import Fiverr from "../ABOUT-PAGE/imges/img/fiverr.png";
import Amazon from "../ABOUT-PAGE/imges/img/amazon.png";
import Shopify from "../ABOUT-PAGE/imges/img/Shopify.png";
import Facebook from "../ABOUT-PAGE/imges/img/Facebook.png";
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
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
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
