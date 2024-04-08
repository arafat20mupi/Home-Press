import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle, } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signInUser, createGoogleUser, createGithubUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {

        e.preventDefault();
        const from = new FormData(e.target)
        const email = from.get('email')
        const password = from.get('password')
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("Login Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error("Please register Account", {
                    position: "top-center",
                    autoClose: 1000
                });
                console.error(error)
            })
    }
    const handleGoogle = () => {
        createGoogleUser()
            .then(() => {
                toast.success("Login Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error("Please register Account", {
                    position: "top-center",
                    autoClose: 1000
                });
                console.error(error)
            })
    }

    const handlegithub = () => {
        createGithubUser()
            .then(() => {
                toast.success("Login Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error("Please register Account", {
                    position: "top-center",
                    autoClose: 1000
                });
                console.error(error)
            })
    }

    return (
        <div className="w-full mx-auto  max-w-md p-8  rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
            <Helmet>
                <title>
                    HomePress-Login
                </title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Email</label>
                    <input type="email" name="email" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-xl font-semibold dark:text-gray-600"> Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
            </form>

            <h2 className="flex my-3 justify-center text-lg">
                Or Sign up using
            </h2>
            <div className="flex space-x-4  justify-center">

                <button
                    onClick={handleGoogle}
                    className="text-2xl"><FaGoogle />
                </button>
                <button
                    onClick={handlegithub}
                    className="text-2xl"><FaGithub />
                </button>
            </div>
            <p className="  flex text-lg mt-6 sm:px-6 dark:text-gray-600">Do not have an account?
                <Link to="/register">
                    <button className="ml-4  font-bold  text-blue-600 items-center justify-center
                         flex">Register <GoArrowRight />  </button>
                </Link>
            </p>
        </div>
    );
};

export default Login;