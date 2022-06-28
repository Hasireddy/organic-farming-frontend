import Products from '../components/ProductsCatalog.css'
import butter from '../assets/Dairy/butter.jpg'
import cream from '../assets/Dairy/cream.jpg'
import custard from '../assets/Dairy/custard.jpg'
import drymilk from '../assets/Dairy/dryMilk.jpg'
import ghee from '../assets/Dairy/ghee.jpg'
import milk from '../assets/Dairy/milk.jpg'
import pudding from '../assets/Dairy/pudding.jpg'
import yogurt from '../assets/Dairy/yogurt.jpg'
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
                    <div className="card-body" id='rowProductCatalog'   style={{ backgroundImage: `url(${butter}` }}>

                    </div >
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>

                        <h3 className="card-title-catalog">Butter</h3>

                        <p className="card-text-catalog">Price:</p>
                    </div>

                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${cream}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Cream</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${custard}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Custard</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${drymilk}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">DryMilk</h3>
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
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${ghee}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Ghee</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${milk}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Milk</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${pudding}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Pudding</h3>
                        <p className="card-text-catalog">Price:</p>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="card" >


                    </div>
                    <div className="card-body" id='rowProductCatalog' style={{ backgroundImage: `url(${yogurt}` }}>

                    </div>
                    <div className='col col-9 row-cols-md-3 g-4 ' id='product-catalog'>
                        <h3 className="card-title-catalog">Yogurt</h3>
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