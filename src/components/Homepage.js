
import Header from './Header';
import MyMap from './Maps';
// import ProductsCatalog from './ProductsCatalog';


import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <Header />
            <MyMap />
        </>
    );
}
export default Homepage;