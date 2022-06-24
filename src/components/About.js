import React from 'react'
import { ReactDOM } from 'react';
import AboutCss from './AboutCss.css'
import banana from '../assets/fruits/banana.jpg'
import cherry from '../assets/fruits/cherry.jpg'
import { motion } from "framer-motion";
import { Context } from 'react';
import themeContext from 'react'
import { useContext } from 'react';
import { Link } from 'react-scroll'
import Navbar from './Navbar';
function About() {

  //  const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>

      <div className="works" id="works" />
      {/* left side */}

      <div className="w-left">
        <div className="awesome" />

        <span>Brands & Clients</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing
          <br />
          Lorem ispum is simpley dummy text of printing Lorem ispum is simpley dummy
          text
          <br />
          Simpley dummy text of printingLorem
          <br />
          Lorem ispum is simpley dummy text of printing
        </spane>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">Hire Me</button>
        </Link>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        >

        </div>
        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        />
        <div className="w-secCircle">
          <img src={cherry} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={cherry} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={cherry} alt="" />
        </div>{" "}
        <div className="w-secCircle">
          <img src={cherry} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={cherry} alt="" />
        </div>
        <motion.div />
        {/* background Circles */}
        <div className="w-backCircle blueCircle">
          <div className="w-backCircle yellowCircle">
          </div>
        </div>
      </div>
    </div>





  )
}

export default About