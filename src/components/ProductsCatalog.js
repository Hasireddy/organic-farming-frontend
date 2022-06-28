import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Products from '../components/ProductsCatalog.css'
import fig from '../assets/fruits/fig.jpg'
import orange from '../assets/orange-300x300.jpg'
import cucamber from '../assets/cucumber.jpg'
import watermelone from '../assets/watermelone.jpg'
import banana from '../assets/fruits/banana.jpg'
import melone from '../assets/fruits/melone.jpg'
import cherry from '../assets/fruits/cherry.jpg'
import pomegranade from '../assets/fruits/pommegranate.jpg'
import currantfruit from '../assets/fruits/currant-fruit.jpg'
import lemon from '../assets/fruits/lemon.jpg'
import peach from '../assets/fruits/peach.jpg'
import lingonberry from '../assets/fruits/lingonberry.jpg'
import grapes from '../assets/fruits/pink-grapes.jpg'
import rasberries from '../assets/fruits/raspberries.jpg'
import apples from '../assets/fruits/apples.jpg'
import kivi from '../assets/fruits/kivi.png'
import axios from 'axios';

function ProductsCatalog() {
    // context
    const [navLinks, setNavLinks] = useState([]);
    useEffect(() => {
        const navs = [
            { name: "All Products", path: "/Products" },
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
                <a className="btn btn-success dropdown-toggle btn-lg" href="/ProductsCatalog" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                    Categories
                </a>

                <ul class="dropdown-menu dropdown-menu-end">
                    {navLinks.map((d, i) => (
                        <li key={i}>
                            <Link to={d.path}>
                                <button class="dropdown-item" type="button">
                                    {d.name}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* cards row 1  */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>

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
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${lemon}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Lemon</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${lingonberry}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Lingonberry</h3>
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
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${grapes}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Grapes</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${rasberries}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Rasberries</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${apples}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Apples</h3>
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
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${peach}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Peach</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${currantfruit}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Currantfruit</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${kivi}` }} >

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>

                        <h3 className="card-title">Kivi</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>


            </div>
        </div>

    )
}



export default ProductsCatalog

