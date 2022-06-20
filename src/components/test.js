import React from 'react'
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
    return (
        <div>
            <div className="card-group">
                {/* card1 */}
                <div className="card" id='cardProductCatalog' >
                    <div className="card" id='cardProductCatalog' >
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>
                        <div className='row col-6 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Cherry</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>     
                        </div >
                       
                    </div>
                </div>
                {/* card2 */}
                <div className="card" id='cardProductCatalog' >
                    <div className="card" id='cardProductCatalog' >
                        <div className="card-body-catalog " id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>
                          <div className='row row-11 row-cols-md-3 g-4 ' id='product-catalog'>
                            <h3 className="card-title-catalog">Cherry</h3>
                            <p className="card-text-catalog">Price:</p>
                        </div>   
                        </div >
                       
                    </div>
                </div>
                {/* card3 */}
                <div className="card" id='cardProductCatalog' >
                    <div className="card" id='cardProductCatalog' >
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>
                           <div className='row col-6 row-cols-md-3 g-4 ' id='product-catalog'>
                            <p className="card-title-catalog">Cherry</p>
                            <p className="card-text-catalog">Price:</p>
                            
                        </div>  
                        </div >
                       
                    </div>
                </div>
                {/* card4 */}
                <div className="card" id='cardProductCatalog' >
                    <div className="card" id='cardProductCatalog' >
                        <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cherry}` }}>
                        {/* <div className='row col-6 row-cols-md-3 g-4 ' id='product-catalog'> */}
                            <h3 className="card-title-catalog">Cherry</h3>
                            <p className="card-text-catalog">Price:</p>
                        {/* </div>      */}
                        </div >
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCatalog




