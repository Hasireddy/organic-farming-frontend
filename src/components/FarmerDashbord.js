import React from 'react'

function FarmerDashbord() {
  return (
    <div>
      {/* Dropdown */}
      {/* <!-- Example single danger button --> */}
      <div className="btn-group">
        <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/#">Action</a>
          <a className="dropdown-item" href="/#">Another action</a>
          <a className="dropdown-item" href="/#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/#">Separated link</a>
        </div>
      </div>
      {/* Cards */}
      <div className="card-deck">
        <div className="card col-md-4">
          <img className="card-img-top" src="../assets/strawberry-300x300.jpg" alt="img" />
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
        <div className="card">
          <img className="card-img-top" src=".." alt="img" />
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

export default FarmerDashbord