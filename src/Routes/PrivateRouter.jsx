import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom"
import { Link, useLocation, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouter;