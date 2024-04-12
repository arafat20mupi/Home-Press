import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import UserProfile from "../Pages/UserProfile";
import { FcHome } from "react-icons/fc";
import { toast } from 'react-toastify';

const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const HandleSignOut = () => {
        signOutUser()
        toast.success("Logout Succesfully", {
            position: "top-center",
            autoClose: 1000
        });
    }

    const Navlinks = <>
        <li><NavLink to={'/'} >Home</NavLink> </li>
        {
            user && <li><NavLink to={'/updateProfile'}>UpdateProfile</NavLink> </li>
        }
        {
            user && <li><NavLink to={'/privateUserProfile'}>UserProfile</NavLink> </li>
        }
        {
            user && <li><NavLink to={'/proparty'}>Proparty</NavLink> </li>
        }
        <li><NavLink to={'/about'}>About</NavLink> </li>
    </>
    return (
        <from className="navbar rounded-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  dropdown-content   mt-3 text-lg z-[1] p-2 shadow  rounded-box w-52">
                        {
                            Navlinks
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <FcHome className="  text-2xl lg:text-4xl" />
                    <a className="btn btn-ghost font-bold lg:text-2xl text-xl">HomePress</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu active  text-lg space-x-2 menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    user && <UserProfile></UserProfile>
                }
                {
                    user ?
                        <button onClick={HandleSignOut} className="btn bg-[#2c333d] text-white hover:text-black  text-lg font-bold">Log Out</button> :
                        <Link to="/login" >
                            <button type="submit" className="btn bg-[#2c333d] text-white hover:text-black text-lg font-bold">Login</button>
                        </Link>
                }
            </div>
        </from>
    );
};

export default Navber;