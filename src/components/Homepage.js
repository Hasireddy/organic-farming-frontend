
import Header from './Header';
import MyMap from './Maps';
import ProductsCatalog from './ProductsCatalog';
<<<<<<< HEAD
import About from './ABOUT-PAGE/About';
=======
import About from './About';
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

>>>>>>> 008c83bd62003391f7cc390814f0d722f9fe1ade
const Homepage = () => {
    // const location = useLocation();

    // if (location.state.name) {
    //     toast.success('Loggedin  Successfully.', {
    //         position: "bottom-center",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    // };
    return (
        <>
            <Header />
            <MyMap />
<<<<<<< HEAD
            <ProductsCatalog/>
            <About/>
=======

>>>>>>> 008c83bd62003391f7cc390814f0d722f9fe1ade
        </>
    );
}
export default Homepage;