import React from 'react';
import FarmerDashbord from './FarmerDashbord.css'
function FarmersDashbord() {
    return (
        <div>
            {/* Dropdown */}
            <div classNameName="dropdown show">
                <a classNameName="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>

                <div classNameName="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a classNameName="dropdown-item" href="/#">Action</a>
                    <a classNameName="dropdown-item" href="/#">Another action</a>
                    <a classNameName="dropdown-item" href="/#">Something else here</a>
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
        </div>
    )
}

export default FarmersDashbord