import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Ercan3 from "../../components/ABOUT-PAGE/imges/Ercan3.jpg";
import profilePic2 from "../../components/ABOUT-PAGE/imges/profile2.jpg";
import profilePic3 from "../../components/ABOUT-PAGE/imges/profile3.jpg";
import profilePic4 from "../../components/ABOUT-PAGE/imges/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Ercan3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
    <div className="t-heading"></div>
    <div
            className="blur s-blur1"
            style={{ background: "#c9ef23" }}
          ></div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
             <button className="next" id="test-button" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
           
              </div>
              <button className="prev" id="test-button" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                
            </SwiperSlide>
            
          );
        })}
      </Swiper>
     
    </div>
  );
};

export default Testimonial;
