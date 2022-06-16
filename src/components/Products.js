import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
import '../App.css';

const Products = () => {
    return (

        < div className="container" style={{ backgroundImage: `url(${image}` }
        }>
            <div className="row">
                <h1>Products</h1>
                <p>Please fill in this form to add a Product</p>
                <hr />
                <div className="col-9">
                    <br />
                    <form>
                        <input className="form-control form-control-sm" type="text" placeholder="Product Name" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm"></input><br />

                        <div className="custom-file">
                            <input type="file" class="custom-file-input" id="customFileInput/" aria-describedby="customFileInput" />
                            {/* <label className="custom-file-label" for="customFileInput">Select file</label> */}
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="customFileInput">Upload Image</button>
                        </div>

                        <div className="row">
                            <div className="col text-left">
                                <button type="submit" className="registerbtn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-3" id="farmer" style={{ backgroundImage: `url(${image1}` }}>
                </div>
            </div>
        </div >





    );
}

export default Products;