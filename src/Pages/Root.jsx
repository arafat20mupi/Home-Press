import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer} from 'react-toastify';
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Root = () => {
    return (
        <div >
            <Helmet>
                <title>HomePress</title>
            </Helmet>
            <div className="container lg:mb-6 mx-auto">
                <Navber></Navber>
            </div>
            <div className="container min-h-[calc(100vh-200px)] mb-12 mx-auto">
                <Outlet />
            </div>
            <div className="">
                <Footer></Footer>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Root;