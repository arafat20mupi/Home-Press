import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
const Root = () => {
    return (
        <div >
            <div className="container mt-6 mx-auto">
                <Navber></Navber>
            </div>
            <div className="container mx-auto">
                <Outlet />
            </div>
            <div >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;