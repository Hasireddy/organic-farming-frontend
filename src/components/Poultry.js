import React from 'react'
import Products from '../components/ProductsCatalog.css'
import chicken from '../assets/Poultry/chicken.jpg'
import chickenEgg from '../assets/Poultry/chickenEggs.jpg'
import cow from '../assets/Poultry/cow.jpg'
import duck from '../assets/Poultry/duck.jpg'
import duckEgg from '../assets/Poultry/duckEggs.jpg'
import fish from '../assets/Poultry/fish.jpg'
import goat from '../assets/Poultry/goat.jpg'
import pig from '../assets/Poultry/pig.jpg'
import sheep from '../assets/Poultry/sheep.jpg'
import turkey from '../assets/Poultry/turkey.jpg'
import queil from '../assets/Poultry/quail.jpg'
import queilEggs from '../assets/Poultry/quailEggs.jpg'


function Poultry() {
    return (
        <div>
            <div className='container'>
                <div className="dropdown" id='dropdownProductCaltalog'>
                    <a className="btn btn-success dropdown-toggle btn-lg" href="/Fruits" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                        Categories
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {/* <li><a className="dropdown-item" href="/Products"> Our Products</a></li> */}
                        <li><a className="dropdown-item" href="/Fruits">Fruits&Vegetables</a></li>
                        <li><a className="dropdown-item" href="/Dairy">Dairy</a></li>
                        <li><a className="dropdown-item" href="/Poultry">Poultry</a></li>
                    </ul>
                </div>
                {/* cards row 1  */}
                <div className="row row-1 row-cols-md-3 g-4" >
                    {/* card1 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${chicken}` }}>

                        </div >
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>

                            <h3 className="card-title-catalog">Chicken</h3>

                            <p className="card-text-catalog">Price:</p>
                        </div>

                    </div>
                    {/* card2 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${chickenEgg}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">ChickenEgg</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                    {/* card3 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cow}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Cow</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${duck}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Duck</h3>
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
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${duckEgg}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">DuckEgg</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${fish}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Fish</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                    {/* card3 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${turkey}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Turkey</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="card" >


                        </div>
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${sheep}` }}>

                        </div>
                        <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Sheep</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Poultry