import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_SERVERURL + `details/${id}`)
            // .then(response => console.log(response))
            .then((response) => {
                setProduct(response.data);
                // console.log(product);
            })
    }, [id]);

    return (
        <>
            {
                product ? (
                    <div className="farmer-contact-container" >
                        <div class="card-deck">
                            <div class="card" id="cardCtn" >
                                <div class="card-header bg-success text-white" id="headerCtn">FARM: {product.farmer.farmName}</div><br></br>
                                <div class="card-body">
                                    <div className="farm-address font-weight-bold " value="address">{product.farmer.firstname + ' ' + product.farmer.lastname}</div><br></br>
                                    <div className="farm-address font-weight-bold " value="address">{product.farmer.address}</div><br></br>
                                    <div className="farm-postcode font-weight-bold" value="postcode">{product.farmer.postcode}</div><br></br>

                                    <div className="farm-email text-primary" value="email">E-mail:{product.farmer.email}</div>
                                </div>
                                {/* <div class="card-footer">
                <button href="/" id="farmerCtn" class="text-white">Check Location</button>
              </div> */}
                            </div>

                            <div class="card" id="cardCtn" >
                                <div class="card-header bg-success text-white" id="headerCtn">PRODUCT</div><br></br>
                                <div class="card-body">

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
        </>

    )

};

export default SingleProduct;
