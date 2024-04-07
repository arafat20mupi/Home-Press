import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import About from "../Pages/About";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/residential.json')
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
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router