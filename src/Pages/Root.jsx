import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer} from 'react-toastify';
const Root = () => {
    return (
        <div >
            <div className="container md:mb-6 mx-auto">
                <Navber></Navber>
            </div>
            <div className="container min-h-[calc(100vh-128px)]  mx-auto">
                <Outlet />
            </div>
            <div >
                <Footer></Footer>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Root;