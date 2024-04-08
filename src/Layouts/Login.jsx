import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
const Login = () => {
    const { signInUser, createTwitterUser, createGoogleUser, createFacebookUser, createGithubUser } = useContext(AuthContext);

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
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGoogle = () => {
        createGoogleUser()
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
    }
    const handleTwitter = () => {
        createTwitterUser()
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
    }

    const handleFacebook = () => {
        createFacebookUser()
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
    }

    const handlegithub = () => {
        createGithubUser()
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
    }
    return (
        <div>
            <div className="w-full mx-auto mt-6 max-w-md p-8  rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
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
                <p className="text-xs text-center mt-6 sm:px-6 dark:text-gray-600">Do not have an account?
                    <Link to="/register">
                        <button className="ml-3 font-bold text-blue-600">Register</button>
                    </Link>
                </p>
            </div>
            <h2 className="flex justify-center text-lg mb-8">
                Or Sign up using
            </h2>
            <div className="flex mb-8 space-x-4 items-center justify-center">

                <button
                    onClick={handleGoogle}
                    className="text-2xl"><FaGoogle />
                </button>
                <button
                    onClick={handleFacebook}
                    className="text-2xl"><FaFacebook />
                </button>
                <button
                    onClick={handleTwitter}
                    className="text-2xl"><FaTwitter />
                </button>
                <button
                    onClick={handlegithub}
                    className="text-2xl"><FaGithub />
                </button>
            </div>
        </div>
    );
};

export default Login;