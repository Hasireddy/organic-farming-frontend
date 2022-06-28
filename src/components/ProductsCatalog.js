import React, { useEffect, useState } from "react";
import Products from '../components/ProductsCatalog.css'
import fig from '../assets/fruits/fig.jpg'
import orange from '../assets/orange-300x300.jpg'
import cucamber from '../assets/cucumber.jpg'
import watermelone from '../assets/watermelone.jpg'
import banana from '../assets/fruits/banana.jpg'
import melone from '../assets/fruits/melone.jpg'
import cherry from '../assets/fruits/cherry.jpg'
import pomegranade from '../assets/fruits/pommegranate.jpg'
import aubergine from '../assets/fruits/aubergine.jpg'
import basil from '../assets/fruits/basil.jpg'
import springOnion from '../assets/fruits/springOnion.jpg'
import parsley from '../assets/fruits/parsley.jpg'
import onions from '../assets/fruits/onion.jpg'
import cauliflower from '../assets/fruits/cauliflower.jpg'
import lettuce from '../assets/fruits/lettuce.jpg'
import carrots from '../assets/fruits/carrots.jpg'


function ProductsCatalog() {
    // context
    const [navLinks, setNavLinks] = useState([]);
    useEffect(() => {
        const navs = [
         /*  { name: "All Products", path: "/Products" }, */
          { name: "Fruits&Vegetables", path: "/Fruits" },
          { name: "Dairy", path: "/Dairy" },
          { name: "Poultry", path: "/Poultry" },
        ];
        setNavLinks(navs);
      }, []);
    // transition
    return (
        /*  dropdown */
        <div className='container'>
            <div className="dropdown" id='dropdownProductCaltalog'>
                <a className="btn btn-success dropdown-toggle btn-lg" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                    Categories
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="/#">Fruits</a></li>
                    <li><a className="dropdown-item" href="/#">Vegetable</a></li>
                    <li><a className="dropdown-item" href="/#">Dairy</a></li>
                </ul>
            </div>
            {/* cards row 1  */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog'   style={{ backgroundImage: `url(${cherry}` }}>

                    </div >
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>

                        <h3 className="card-title-catalog">Chery</h3>

                        <p className="card-text-catalog">Price:</p>
                    </div>

                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${banana}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Banana</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${melone}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Melone</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${orange}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Orange</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>

            </div>
            {/* cards row 2 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${pomegranade}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Pomegranade</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${fig}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Fig</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${lettuce}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Lettuce</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cauliflower}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Cauliflower</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>


            </div>
            {/* cards row 3 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${onions}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Onions</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${parsley}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Parsley</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${springOnion}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">SpringOnion</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cucamber}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Cucamber</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>



            </div>
            {/* cards row 4 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${watermelone}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Watermelone</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${basil}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Basil</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${aubergine}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Aubergine</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog'style={{ backgroundImage: `url(${carrots}` }} >

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                  
                    <h3 className="card-title">Carrots</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>


            </div>
        </div>

    )
}



export default ProductsCatalog

