import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import apples from "../../assets/fruits/apples.jpg";
import cherry from "../../assets/fruits/cherry.jpg";
import watermelone from "../../assets/fruits/watermelone.jpg";
import fig from "../../assets/fruits/fig.jpg";
import { themeContext } from "./Context";
const Portfolio = () => {
  //const theme = useContext(themeContext);
  /* const darkMode = theme.state.darkMode; */
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
     
      <span>Our Projects</span>
 {/* <span id="recentProjects" style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         
        {/* <SwiperSlide>
          <img src={apples} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apples} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apples} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
        <div
            className="blur s-blur1"
            style={{ background: "#edd0ff" }}
          ></div>
          <img src={fig} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={watermelone} alt="" />
        </SwiperSlide>
        <div
            className="blur s-blur1"
            style={{ background: "#14ee4a" }}
          ></div>
        <SwiperSlide>
          <img src={cherry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cherry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cherry} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fig} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={watermelone} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
