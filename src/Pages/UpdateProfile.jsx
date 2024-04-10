/* eslint-disable no-undef */
import 'animate.css';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { updateUser, user, setLoading } = useContext(AuthContext);
    const [updateName, setUpdateName] = useState('');
    const [updatePhotoURL, setUpdatePhotoURL] = useState('');

    useEffect(() => {
        if (user) {
            setUpdateName(user.displayName || '');
            setUpdatePhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({
            uid: user?.uid,
            displayName: updateName,
            photoURL: updatePhotoURL,
        })
            .then(() => {
                toast.success("Profile Updated Successfully", {
                    position: "top-center",
                    autoClose: 1000
                });
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: "top-center",
                    autoClose: 1000
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div data-aos="fade-up" className=' mx-auto  my-auto flex  items-center justify-center'>
            <Helmet>
                <title>HomePress-UpdateProfile</title>
            </Helmet>
            <div className="w-96 h-full p-8 space-y-3 rounded-xl border animate__animated animate__bounceInUp bg-white   font-sans ">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Update Profile</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            value={updatePhotoURL}
                            onChange={(e) => setUpdatePhotoURL(e.target.value)}
                            placeholder="PhotoURL"
                            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <button type="submit" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                            Update Profile
                        </button>
                    </div>
                    <NavLink to="/" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        <button className=' flex justify-center  w-full'>Back To Home</button>
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </NavLink >
                </form>
            </div>
        </div>

    );
};

export default UpdateProfile;