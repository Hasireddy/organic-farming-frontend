import React from "react";
import "../components/About.css";
import Uma from '../assets/uma.png';
import Isaiah from '../assets/isaiah.jpeg';
import Ercan from '../assets/ercan4.jpg';


const About = () => {
  return (
    <div id="aboutCtn">
      <div className="card mb-3">
        <div className="card-body" id="cardHeader">
          <h1 className="card-title">About Us</h1>
        </div>
      </div>
      <div className="card-deck">

        <div className="card" id="cardAbout">
          <div>
            <img className="card-img-top" id="umaPic" src={Uma} alt="Card image cap" />
          </div>
          <div className="card-body" id="cardBody">
            <div className="card-title" id="aboutTitle1">
              Uma M. Malikireddy
            </div>
            <br></br>
            <div className="skill font-weight-bold " value="address">
              Fullstack Web & App Developer
            </div>
            <div className="institute font-weight-bold">WBS Coding School</div>
            <div className="addressAbout font-weight-bold">Berlin, Germany</div>
            <div className="linkedIn font-weight-bold">https://www.linkedin.com/in/umamaheswari</div>
            <br></br>
            <div className="card-text">
              <strong>Passion</strong>: This is a longer card with supporting
              text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </div>
          </div>
        </div>

        <div className="card" id="cardAbout">
          <div>
            <img className="card-img-top" id="ercanPic" src={Ercan} alt="Card image cap" />
          </div>
          <div className="card-body">
            <div className="card-title" id="aboutTitle2">
              Ercan Yanmaz
            </div>
            <br></br>
            <div className="skill font-weight-bold " value="address">
              Fullstack Web & App Developer
            </div>
            <div className="institute font-weight-bold">WBS Coding School</div>
            <div className="addressAbout font-weight-bold">Berlin, Germany</div>
            <div className="linkedIn font-weight-bold">https://www.linkedin.com/in/ercan-yanmaz</div>
            <br></br>
            <div className="card-text">
              <strong>Passion</strong>: This is a longer card with supporting
              text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </div>
          </div>
        </div>

        <div className="card" id="cardAbout">
          <div>
            <img className="card-img-top" id="isaiahPic" src={Isaiah} alt="Card image cap" />
          </div>
          <div className="card-body">
            <div className="card-title" id="aboutTitle3">
              Isaiah Umukoro
            </div>
            <br></br>
            <div className="skill font-weight-bold " value="address">
              Fullstack Web & App Developer
            </div>
            <div className="institute font-weight-bold">WBS Coding School</div>
            <div className="addressAbout font-weight-bold">Berlin, Germany</div>
            <div className="linkedIn font-weight-bold">https://www.linkedin.com/in/umukoroisaiah</div>
            <br></br>
            <div className="card-text">
              <strong>Passion</strong>: This is a longer card with supporting
              text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </div>
          </div>
        </div>


        
        
      </div>
    </div>
  );
};

export default About;
