import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const { createUser, } = useContext(AuthContext);
    const [showPassword ,setShowPassword ] = useState(false)
    const navigate = useNavigate();
    const handleRigister = e => {
        e.preventDefault();
        const from = new FormData(e.target)
        const email = from.get('email');
        const password = from.get('password');

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters", {
                position: "top-center",
                autoClose: 1000
            });
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have an Uppercase letter ", {
                position: "top-center",
                autoClose: 1000
            });
            return
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have an Lowercase letter ", {
                position: "top-center",
                autoClose: 1000
            });
            return
        }

        createUser(email, password)
            .then(() => {
                toast.success("Register Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
                navigate("/")

            })
            .catch(() => {
                toast.error("Already Register This Account", {
                    position: "top-center",
                    autoClose: 1000
                });
            }
            )
    }
    return (
        <div>
            <Helmet>
                <title>
                    HomePress-Register
                </title>
            </Helmet>
            <div className="w-full mx-auto mt-6 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRigister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Your Name</label>
                        <input type="text" name="name" placeholder="Enter your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Photo URL</label>
                        <input type="text" name="photo" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Email</label>
                        <input type="email" name="email" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 relative text-sm">
                        <label htmlFor="password" className="block text-xl font-semibold dark:text-gray-600"> Password</label>
                        <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute text-2xl text-gray-600 top-9 right-2">
                            {
                                showPassword ? <FaEyeSlash/>: <FaEye/>
                            }
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <p className="text-lg flex text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to="/login">
                        <button className="ml-4  font-bold  text-blue-600 items-center justify-center
                         flex">Login <GoArrowRight />  </button>
                    </Link>
                </p>
            </div>

        </div>
    );
};

export default Register;