import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (

        <div>
            
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName ? user.displayName : "Arafat islam"}>
                {
                    user.photoURL && <img className="w-12  h-12 rounded-full" src={user?.photoURL} alt="" /> 
                }
            </div>

        </div>
    );
};

export default UserProfile;