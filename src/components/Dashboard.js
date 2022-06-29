import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from 'axios';

const Dashboard = ({ isAuthenticated, farmertoken }) => {
  // if (isAuthenticated) { return <Navigate to='/Dashboard' /> }
  // console.log(isAuthenticated, farmertoken);
  const [products, setProducts] = useState(null);

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

  const updateProduct = () => {
    axios.put(
      'http://localhost:5000/details',
      {
        headers: {
          authorization: farmertoken,
        },
      }
    );

  }

  const deleteProduct = async (id) => {

    // console.log(id)
    // axios.delete(
    //   `http://localhost:5000/auth/deleteProductByFIdPId/${id}`,
    //   {
    //     headers: {
    //       authorization: farmertoken,
    //     },
    //   }
    // );

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
                    <a href="#" className="text-white">Read More
                    </a>
                    <button>Update</button>
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




