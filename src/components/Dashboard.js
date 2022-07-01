import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import Update from './Update.js';

const Dashboard = ({ isAuthenticated, farmertoken }) => {
  // if (isAuthenticated) { return <Navigate to='/Dashboard' /> }
  // console.log(isAuthenticated, farmertoken);
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getFarmerProducts()
  }, [farmertoken]);

  const getFarmerProducts = async e => {
    try {

      // e.preventDefault();
      console.log('here');
      const res = await fetch("http://localhost:5000/auth/getProductsByFarmerId", {
        method: "GET",
        headers: {
          authorization: farmertoken //farmertoken is logintoken
        },
      });
      const { farmerProducts, error } = await res.json();

      if (farmerProducts) {
        toast.success("Products retrieved successfully.", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setProducts(farmerProducts);
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
        });
      }


    } catch (error) {
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



  const deleteProduct = async (id) => {

    const res = await fetch(`http://localhost:5000/auth/deleteProductByFIdPId/${id}`, {
      method: "delete",
      headers: {
        authorization: farmertoken //farmertoken is logintoken
      },
    });
    const { success, error } = await res.json();
    console.log(success);
    if (success) {
      toast.success("success", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // getFarmerProducts();
      // setProducts(farmerProducts);
      window.location.reload(false);
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
      });
    }


  };
  const UpdateProduct = async (id) => {

    navigate('/Update', { state: { id: id, farmertoken: farmertoken } });
  };
  return (
    <>
      < div className="container">
        <h1>Welcome to your Homepage </h1>
        <a class="button" href="/Details">Add Product</a>
        {
          products ? (products.map(item =>
            < div className="row">

              <div className="col">

                <div className="card h-100" class="shadow p-3 mb-5 bg-body rounded">

                  <img src={"http://localhost:5000/" + item.Image.path} className="card-img-top" alt="salad leaf" style={{ width: "100px", height: "100px" }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.ProductName}</h5>
                    <p className="card-text">{item.Description}</p>
                  </div>
                  <div className="card-footer bg-success">
                    <a href="#" className="text-white">Read More:{item._id}
                    </a>
                    <button onClick={async () => { await UpdateProduct(item._id); }}>Update</button>
                    <button onClick={async () => { await deleteProduct(item._id); }}>Delete</button>
                  </div>
                </div>
              </div>
            </div>)) : (<div><h1>No Prodcuts found</h1></div>)
        }

      </div>
      <ToastContainer />
    </>

  )
};

export default Dashboard;




