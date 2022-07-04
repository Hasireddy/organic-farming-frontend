import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [farmerId, setFarmerId] = useState('');
    const [farmerOtherProds, setFarmerOtherProds] = useState(null);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_SERVERURL + `details/${id}`)
            // .then(response => console.log(response))
            .then((response) => {
                setProduct(response.data);
                setFarmerId(response.data.farmer._id);

            })
    }, [id]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_SERVERURL + `details/getAllProductsByFarmerId/${farmerId}`)
            // .then(response => console.log(response))cd 
            .then((response) => {
                setFarmerOtherProds(response.data.farmerProducts);
            })
    }, [farmerId]);

    // console.log("farmerOtherProds");

    // console.log(farmerOtherProds);

    return (
        <>
            {
                product ? (
                    <div className="farmer-contact-container" >
                        <div className="card-deck">
                            <div className="card" id="cardCtn" >
                                <div className="card-header bg-success text-white" id="headerCtn">FARM: {product.farmer.farmName}</div><br></br>
                                <div className="card-body">
                                    <div className="farm-address font-weight-bold " value="address">{product.farmer.firstname + ' ' + product.farmer.lastname}</div><br></br>
                                    <div className="farm-address font-weight-bold " value="address">{product.farmer.address}</div><br></br>
                                    <div className="farm-postcode font-weight-bold" value="postcode">{product.farmer.postcode}</div><br></br>

                                    <div className="farm-email text-primary" value="email">E-mail:{product.farmer.email}</div>
                                </div>
                                {/* <div class="card-footer">
                <button href="/" id="farmerCtn" class="text-white">Check Location</button>
              </div> */}
                            </div>

                            <div className="card" id="cardCtn" >
                                <div className="card-header bg-success text-white" id="headerCtn">PRODUCT</div><br></br>
                                <div className="card-body">

                                    <div className="farm-address font-weight-bold " value="pname">Product : {product.ProductName}</div><br></br>
                                    <div className="farm-address font-weight-bold " value="pname">Category : {product.Category}</div><br></br>
                                    <div className="farm-address font-weight-bold " value="pdescription"> Description : {product.Description}</div><br></br>
                                    <div className="farm-postcode font-weight-bold" value="price">Price : {product.Price}euros</div><br></br>

                                    <div className="farm-email text-primary" value="email"><img src={process.env.REACT_APP_SERVERURL + product.Image.path} alt="product" /></div>
                                </div>
                                {/* <div class="card-footer">
                <button href="/" id="farmerCtn" class="text-white">Check Location</button>
              </div> */}
                            </div>


                        </div>

                    </div >) : (<div><h1>No Farms found</h1></div>)}

            <div className="row row-1 row-cols-md-3 g-4">
                <h1>Our Products</h1>
                {farmerOtherProds ? (
                    farmerOtherProds.map((item) => (


                        <div className="col-12 col-md-3 col-lg-3" key={item._id}>

                            <div
                                id="rowProductCatalog"
                                style={{
                                    backgroundImage: `url(${process.env.REACT_APP_SERVERURL} +${item.Image.path}`,
                                }}
                            >
                                <img
                                    src={process.env.REACT_APP_SERVERURL + item.Image.path}
                                    alt="salad leaf"
                                    style={{ width: "25vh", height: "25vh" }}
                                />
                            </div>
                            <div
                                className="col col-9 row-cols-md-3 g-4 "
                                id="product-catalog"
                            >
                                <h3 className="card-title-catalog">{item.ProductName}</h3>
                                <h3 className="card-title-catalog">{item.Category}</h3>

                                <p className="card-text-catalog">Price:{item.Description} euros</p>

                                <p className="card-text-catalog">Price:{item.Price} euros</p>

                            </div>

                        </div>

                    ))
                ) : (
                    <div>
                        <h1>Sorry No Products added Yet</h1>
                    </div>
                )}
            </div>
        </>

    )

};

export default SingleProduct;