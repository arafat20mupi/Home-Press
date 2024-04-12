import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const { createUser,updateUser,setUser } = useContext(AuthContext);

    const [showPassword ,setShowPassword ] = useState(false)
    const [updateName, setUpdateName] = useState('');
    const [updatePhotoURL, setUpdatePhotoURL] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
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
                updateUser({
                    displayName: updateName,
                    photoURL: updatePhotoURL,
                    email: updateEmail
                })
                setUser({
                    displayName: updateName,
                    photoURL: updatePhotoURL,
                    email: updateEmail,
                })
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
            <div className="w-full mx-auto mt-6 max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 ">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRigister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold text-gray-600"> Your Name</label>
                        <input onChange={(e) => setUpdateName(e.target.value)} type="text" name="name" placeholder="Enter your Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold text-gray-600"> Photo URL</label>
                        <input onChange={(e) => setUpdatePhotoURL(e.target.value)}  type="text" name="photo" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold text-gray-600"> Email</label>
                        <input onChange={(e) => setUpdateEmail(e.target.value)} type="email" name="email" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 relative text-sm">
                        <label htmlFor="password" className="block text-xl font-semibold text-gray-600"> Password</label>
                        <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute text-2xl text-gray-600 top-9 right-2">
                            {
                                showPassword ? <FaEyeSlash/>: <FaEye/>
                            }
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
                </form>
                <p className="text-lg flex text-center lg:px-6 text-gray-600">Already have an account?
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