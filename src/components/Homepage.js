
import Header from './Header';
import MyMap from './Maps';
import ProductsCatalog from './ProductsCatalog';


import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

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
            <ProductsCatalog/>
            {/* <About/> */}

        </>
    );
}
export default Homepage;