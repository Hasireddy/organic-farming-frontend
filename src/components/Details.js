import React, { useState } from 'react';
import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';


const Details = () => {


    const [{ ProductName, Description, Price, Category, FarmAddress, postcode }, setFormState] = useState({
        ProductName: '',
        Description: '',
        Price: '',
        Category: '',
        FarmAddress: '',
        postcode: ''
    });


    const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            if (!ProductName || !Description || !Price || !Category || !FarmAddress || !postcode) return toast.error('Please enter all Fields!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            const res = await fetch('http://localhost:5000/auth/productdetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProductName,
                    Description,
                    Price,
                    Category,
                    FarmAddress,
                    postcode
                })
            });
            const { product, error } = await res.json();
            if (product) {
                toast.success('Product added successfully.', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return localStorage.setItem('data', product);

            }
            if (error) {
                return toast.error(error, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
                );
            }
        }
        catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };


    return (
        <>
            < div className="container" style={{ backgroundImage: `url(${image}` }}>
                <div className="row">
                    <h1>Products</h1>
                    <p>Please fill in this form to add a Product</p>
                    <hr />
                    <div className="col-8">
                        <br />
                        <form onSubmit={handleSubmit}>
                            <input className="form-control form-control-sm" type="text" title="Please 
                            enter string" pattern="[a-zA-Z]*" placeholder="ProductName" aria-label=".form-control-sm" id='ProductName' maxLength={255} minLength={4} value={ProductName} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm" id='Description' value={Description} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm" id='Price' value={Price} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm" id='Category' value={Category} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="FarmAddress" aria-label=".form-control-sm" id='FarmAddress' value={FarmAddress} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="postcode" aria-label=".form-control-sm" id='postcode' value={postcode} onChange={handleChange}></input><br />

                            {/* <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input input-group-lg" id="inputGroupFile02" />
                                <label className="custom-file-label" for="inputGroupFile02">Choose file</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text" id="">Upload</span>
                            </div>
                            </div> */}
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
            </div>
            <ToastContainer />
        </>


    );
}

export default Details;