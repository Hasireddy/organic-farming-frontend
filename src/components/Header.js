
import '../App.css';
import image1 from "../assets/img_slider-01.jpg";
import image2 from "../assets/img_slider-02.jpg";
import image3 from "../assets/img_slider-03.jpg";

const Header = () => {
    return (

        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: `url(${image1}` }}>

                        <h1>slide1</h1>
                        <p>this is slide1</p>

                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${image2}` }}>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${image3}` }}>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>


        </>

    );
}

export default Header;



