import React from "react";
import Image001 from "../assets/832_7-300x300.jpg";
import Image002 from "../assets/watermelone.jpg";
import Image003 from "../assets/promo-3.jpg";

const Dashboard = () => {
  return (    
<div className="card-group">
  <div className="card">
    <img src={Image001} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">watermelone</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer  bg-success">
      <a href="#" className="text-white fw-bold" >Place Order here</a>
    </div>
  </div>
  <div className="card">
    <img src={Image002} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Sweet Salad</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer  bg-success">
      <a href="#" className="text-white fw-bold">Place Order here</a>
    </div>
  </div>
  <div className="card">
    <img src={Image003} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Fresh Orange</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer  bg-success">
      <a href="#" className="text-white fw-bold">Place Order here </a>
    </div>
  </div>
</div>

  )
};

export default Dashboard;




