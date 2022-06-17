import React from 'react';
import ProductsCatalog from './ProductsCatalog .css'
import Navbar from './Navbar';
import Footer from './Footer'



function ProductCatalog() {
    return (
        <div>
            <Navbar />
            {/* Dropdown */}
            <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/#">Action</a>
                    <a className="dropdown-item" href="/#">Another action</a>
                    <a className="dropdown-item" href="/#">Something else here</a>
                </div>
                {/* Cards */}
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="..." alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductCatalog