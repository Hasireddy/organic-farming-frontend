import image from "../assets/fattoria-banner-1.jpg";
import '../App.css';

const Login = () => {
    return (
        <div className="container fluid" style={{ backgroundImage: `url(${image}` }}>
            <div className="row">
                <h1>Signin</h1>
                <div className="col">
                    <br />
                    <form>
                        <input className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm"></input><br />
                        <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm"></input><br />
                        <div className="row">
                            <div className="col text-center">
                                <button type="submit" className="registerbtn">Signin</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;