import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user.photoURL ? <img className="w-12  h-12 rounded-full" src={user?.photoURL} alt="" />: <img className="w-12  h-12 rounded-full" src='https://i.ibb.co/2sb0FzL/Whats-App-Image-2024-01-02-at-22-58-32-e72ebc46.jpg' alt="" />
            }
        </div>
    );
};

export default UserProfile;