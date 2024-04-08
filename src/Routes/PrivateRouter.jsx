/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom"
import {  useLocation} from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading flex items-center mt-20 loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouter;