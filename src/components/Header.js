import React from 'react';
import '../App.css';
import image1 from "../assets/img_slider-01.jpg";
import image2 from "../assets/img_slider-02.jpg";
import image3 from "../assets/img_slider-03.jpg";

const Header = () => {
    return (

        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: `url(${image2}` }}>
                        <div className="carousel-caption d-none d-md-block content">
                            <h1 className="jumbotron">ORGANIC AND NATURAL</h1>
                            <p className="lead">Organic farming offers an alternative agricultural system.
                                It initially began in the early in the 20th century.
                                The advent of pesticides brought in its benefits and pitfalls simultaneously.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${image3}` }}>
                        <div className="carousel-caption d-none d-md-block content">
                            <h1 className="jumbotron">SAVE OUR SOILS</h1>
                            <p className="lead">Organic farming offers an alternative agricultural system.
                                It initially began in the early in the 20th century.
                                The advent of pesticides brought in its benefits and pitfalls simultaneously.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${image1}` }}>
                        <div className="carousel-caption d-none d-md-block content">
                            <h1 className="jumbotron">ORGANIC AND NATURAL</h1>
                            <p className="lead">Organic farming offers an alternative agricultural system.
                                It initially began in the early in the 20th century.
                                The advent of pesticides brought in its benefits and pitfalls simultaneously.
                            </p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>


        </div>

    );
}

export default Header;



