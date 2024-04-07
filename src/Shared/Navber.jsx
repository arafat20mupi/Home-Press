import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const HandleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                // An error happened.
                console.error(error)
            });
    }

    const Navlinks =<>
        <li><NavLink to={'/'}>Home</NavLink> </li>
        <li><NavLink to={'/userProfile'}>UserProfile</NavLink> </li>
        {
            user && <li><NavLink to={'/updateProfile'}>UpdateProfile</NavLink> </li>
        }
        <li><NavLink to={'/about'}>About</NavLink> </li>
    </>
    return (
        <div className="navbar relative bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 text-lg z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl">Urban</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg space-x-2 menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <button onClick={HandleSignOut} className="btn">Log Out</button> :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navber;