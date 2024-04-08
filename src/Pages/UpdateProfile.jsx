import 'animate.css';
import { Link } from 'react-router-dom';
const UpdateProfile = () => {
    return (
        <div className=' mx-auto  my-auto flex  items-center justify-center'>
            <div className="w-96 h-full p-8 space-y-3 rounded-xl border animate__animated animate__bounceInUp bg-white   font-sans ">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Update Profile</h1>
                {/* Input fields and the form started */}
                <form action="" className="space-y-6 ">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Photo URL
                        </label>
                        <input type="text" name="photo" id="password" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        <div className="flex justify-end text-xs ">
                            <a href="#" className="hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    {/* Sign in Button */}
                    <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Update Profile
                        <Link to={'/'} className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            back to home
                        </Link>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>
            </div>
        </div>

    );
};

export default UpdateProfile;