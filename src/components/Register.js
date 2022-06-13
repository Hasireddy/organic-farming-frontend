import React from 'react'; // Type shortcut 'raf' to get the basic structure
import image from "../assets/666-1.jpg";
const Register = () => {
    return (
        <div className="container" style={{ backgroundImage: `url(${image}` }}>
            <div className="row">
                <div className="col">
                    <br />
                    <input className="form-control form-control-sm" type="text" placeholder="Firstname" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="text" placeholder="LastName" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="text" placeholder="Address" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="text" placeholder="Certification Number" aria-label=".form-control-sm"></input><br />
                    <input className="form-control form-control-sm" type="text" placeholder="Postcode" aria-label=".form-control-sm"></input><br />
                    <div class="container">
                        <div class="row">
                            <div class="col text-center">
                                <button class="btn btn-success">Register</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Register;
