import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
// import '../App.css';

const Register = ({ isAuthenticated, setIsAuthenticated, setFarmerToken }) => {

    const [
        {
            firstname,
            lastname,
            email,
            password,
            farmName,
            address,
            postcode,
            countrycode
        },
        setFormState,
    ] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        farmName: "",
        address: "",
        postcode: "",
        countrycode: ""
    });

    // const diffToast = () => {
    //     toast.success("Registration Successful", {
    //         position: "bottom-center",
    //         autoClose: 3000,
    //     });
    // };

    const nav = useNavigate()
    const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

    const handleSubmit = async e => {
        console.log('Hello');
        try {
            e.preventDefault();
            if (!firstname || !lastname || !email || !password || !farmName || !address || !postcode) return toast.error('Please enter all Fields!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            const res = await fetch(process.env.REACT_APP_SERVERURL + 'auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password,
                    farmName,
                    address,
                    postcode,
                    countrycode
                })
            });
            const { token } = await res.json();
            if (token) {
                toast.success('Registered successfully.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.setItem('logintoken', token);
                setFarmerToken(token)
                setIsAuthenticated(true)
                //Start clearing values in form once the data is inserted in Database
                setFormState((prev) => ({ ...prev, firstname: '', lastname: '', email: '', password: '', farmName: '', address: '', postcode: '', countrycode: '' }));
                //End clearing values in form once the data is inserted in Database
                return nav('/Dashboard')
                // return localStorage.setItem('registrationtoken', token);

            }
            // if (error) {
            //     console.log("here");
            //     return toast.error(error, {
            //         position: "bottom-center",
            //         autoClose: 3000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //     }
            //     );
            // }
        }
        catch (error) {
            // console.log("here2", error);
            // toast.error(error.message, {
            //     position: "bottom-center",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
        }
    };


    // useEffect(() => {
    //     fetch(process.env.REACT_APP_SERVERURL + 'posts')
    //         .then((res) => res.json())
    //         .then((results) => console.log(results))
    //         .catch((err) => console.log(err));
    // }, [])
    // if (isAuthenticated) { return <Navigate to='/Dashboard' /> }
    return (
        <>
            <div className="container" style={{ backgroundImage: `url(${image}` }}>
                <div className="row">
                    <h1>REGISTER</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <div className="col-9">
                        <br />
                        <form onSubmit={handleSubmit} >
                            <input className="form-control form-control-sm" type="text" placeholder="Firstname" aria-label=".form-control-sm" id='firstname' value={firstname} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="LastName" aria-label=".form-control-sm" id='lastname' value={lastname} onChange={handleChange}></input><br />
                            <input autoComplete="off" className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm" id='email' name="email" value={email} onChange={handleChange}></input><br />
                            <input autoComplete="new-password"
                                className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm" id='password' value={password} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="FarmName" aria-label=".form-control-sm" id='farmName' value={farmName} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="Address" aria-label=".form-control-sm" id='address' value={address} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="Postcode" aria-label=".form-control-sm" id='postcode' value={postcode} onChange={handleChange}></input><br />
                            <input className="form-control form-control-sm" type="text" placeholder="Countrycode" aria-label=".form-control-sm" id='countrycode' value={countrycode} onChange={handleChange}></input><br />
                            <div className="row">
                                <div className="col text-left">
                                    <button type="submit" className="registerbtn">Register</button>
                                </div>
                                <div className="container signin">
                                    <p>Already have an account? <a href="/Login">Sign in</a>.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-3" id="farmer" style={{ backgroundImage: `url(${image1}` }}>
                    </div>
                    <ToastContainer />
                </div>
            </div>

        </>


    );
};

export default Register;
