import Navber from "../Shared/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
const Root = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Navber></Navber>
            </div>
            <div className="container min-h-[calc(100vh-136px)] mx-auto">
                <Outlet />
            </div>
            <div >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;