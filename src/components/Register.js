import React from 'react';
import image from "../assets/fattoria-banner-1.jpg";
import image1 from "../assets/farmer.jpg";
import '../App.css';


const Register = () => {
    return (
        <div className="container" style={{ backgroundImage: `url(${image}` }}>
            <div className="row">
                <h1>REGISTER</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <div className="col-9">
                    <br />
                    <form>
                        <input className="form-control form-control-sm" type="text" placeholder="Firstname" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="LastName" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Address" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="text" placeholder="Certification Number" aria-label=".form-control-sm"></input><br />
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
                <div className="col-3" id="farmer" style={{ backgroundImage: `url(${image1}` }}>
                </div>

            </div>


            {/* <div class="mb-3 position-relative">
        <label class="form-label" for="inputEmail">Email</label>
        <input type="email" class="form-control is-valid" id="inputEmail" placeholder="Email" value="peterparker@example.com" required>
        <div class="valid-tooltip">Good! Your email address looks valid.</div>
    </div> */}

            {/* // <div class="mb-3 position-relative">
    //     <label class="form-label" for="inputPassword">Password</label>
    //     <input type="password" class="form-control is-invalid" id="inputPassword" placeholder="Password" required>
    //     <div class="invalid-tooltip">Opps! You have entered an invalid password.</div> */}
        </div>

    );
}

export default Register;
