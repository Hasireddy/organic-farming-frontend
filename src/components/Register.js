import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
import "../App.css";

const Register = () => {
  const [
    {
      firstname,
      lastname,
      email,
      password,
      address,
      certificationNum,
      postcode,
    },
    setFormState,
  ] = useState({
    firstname1: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    certificationNum: "",
    postcode: "",
  });

  const diffToast = () => {
    toast.success("Registration Successful", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !firstname ||
        !lastname ||
        !email ||
        !password ||
        !address ||
        !certificationNum ||
        !postcode
      )
        return toast.error("Please enter all Fields!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          address,
          certificationNum,
          postcode,
        }),
      });
      const { token, error } = await res.json();
      if (token) {
        toast.success("Loggedin  Successfully.", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return localStorage.setItem("token", token);
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

  return (
    <div className="containerReg">
      <div className="row">
        <h1 className="regHeader">REGISTER</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <div className="col-6" id="registerFormArea">
          <br />
          <form>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="First Name"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Last Name"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="email"
              placeholder="Email"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="password"
              placeholder="Password"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Certification Number"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Address"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Postcode"
              aria-label=".form-control-sm"
            ></input>
            <br />
            <div className="row">
              <div className="col text-left">
                <button type="submit" className="registerbtn">
                  Register
                </button>
              </div>
              <div className="container signin">
                <p>
                  Already have an account? <a href="/#">Sign in</a>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
