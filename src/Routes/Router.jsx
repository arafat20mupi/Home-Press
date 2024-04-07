import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/about',
                element:<About></About>
            },
        ]
    }
])
export default router