import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const nav = useNavigate();
    const [{ email, password }, setFormState] = useState({
        email: '',
        password: ''
    });
    const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            if (!email || !password) return toast.error('Please enter all Fields!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const res = await fetch('http://localhost:5000/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const { token, error } = await res.json();
            if (token) {
                toast.success('Loggedin  Successfully.', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.setItem('logintoken', token);
                nav("/");
                return window.location.reload();
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
            <div className="containerLogin">
                <div className="row">
                    <div id="outerWrapper fluid">
                        <div className="row">
                            <div id="signHeader"><h1>Sign-in</h1></div>
                            <hr />
                            <div id="innerWrapper">
                                <div className="col-6" id="signInSection">
                                    <br />
                                    <form onSubmit={handleSubmit}>
                                        <input className="form-control form-control-sm" type="email" id="email" value={email} onChange={handleChange} placeholder="Email" aria-label=".form-control-sm"></input><br />
                                        <input className="form-control form-control-sm" type="password" placeholder="Password" aria-label=".form-control-sm" id="password" value={password} onChange={handleChange}></input><br />
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="submit" className="registerbtn">Sign-in</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-6" id="signinComment"></div>
                            </div>

                        </div>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Login;