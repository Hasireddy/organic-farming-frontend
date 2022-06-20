import React from 'react';
import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
import '../App.css';


const Register = () => {
    return (
        <div className="containerReg" >
            <div className="row">
                <h1 className='regHeader'>REGISTER</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <div className="col-6" id='registerFormArea'>
                    <br />
                    <form>
                        <input className="form-control form-control-sm" type="text" placeholder="First Name" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Last Name" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Certification Number" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Address" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Postcode" aria-label=".form-control-sm"></input><br />
                        <div className="row">
                            <div className="col text-left">
                                <button type="submit" className="registerbtn">Register</button>
                            </div>
                            <div className="container signin">
                                <p>Already have an account? <a href="/#">Sign in</a>.</p>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="col-" id="farmer" style={{ backgroundImage: `url(${image1}` }}>
                </div> */}
                

            </div>
        </div>

    );
}

export default Register;
