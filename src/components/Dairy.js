import Products from '../components/ProductsCatalog.css'
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
function Dairy() {
  return (
    <div>
        <div>
            <div className='container'>
                <div className="dropdown" id='dropdownProductCaltalog'>
                    <a className="btn btn-success dropdown-toggle btn-lg" href="/Fruits" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
                        Categories
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="/Products"> All Products</a></li>
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
                    <div className="card-body" id='rowProductCatalog'   style={{ backgroundImage: `url(${watermelone}` }}>

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
                </div>

        </div>
    </div>
  )
}

export default Dairy