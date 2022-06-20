import React from 'react';
import Products from '../components/ProductsCatalog.css'
import tomato from '../assets/tomato-264x176.jpg'
import orange from '../assets/orange-300x300.jpg'
import cucamber from '../assets/cucumber.jpg'
import watermelone from '../assets/watermelone.jpg'
import banana from '../assets/fruits/banana.jpg'
import melone from '../assets/fruits/melone.jpg'
import cherry from '../assets/fruits/cherry.jpg'
import pomegranade from '../assets/fruits/pommegranate.jpg'


function ProductsCatalog() {
    // context


    // transition
    return (
        /*  dropdown */
        <div>
            <div className="dropdown" id='dropdownProductCaltalog'>
                <a className="btn btn-success dropdown-toggle btn-lg" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                    Dropdown link
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
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>

                    </div >
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>

                        <h3 className="card-title-catalog">Tomato</h3>

                        <p className="card-text-catalog">Price:</p>
                    </div>

                </div>
                {/* card2 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${banana}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Tomato</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${melone}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Tomato</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${orange}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Tomato</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>

            </div>
            {/* cards row 2 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${pomegranade}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Orange</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${orange}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Orange</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${orange}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Orange</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${orange}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Orange</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>


            </div>
            {/* cards row 3 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cucamber}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Cucamber</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cucamber}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Cucamber</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cucamber}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Cucamber</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cucamber}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">Cucamber</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>



            </div>
            {/* cards row 4 */}
            <div className="row row-1 row-cols-md-3 g-4" >
                {/* card1 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${watermelone}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">watermelone</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${watermelone}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">watermelone</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${watermelone}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">watermelone</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col col-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${watermelone}` }}>

                    </div>
                    <div className='col col-10 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title">watermelone</h3>
                        <p className="card-text">Price:</p>
                    </div>
                </div>


            </div>
        </div>

    )
}



export default ProductsCatalog

