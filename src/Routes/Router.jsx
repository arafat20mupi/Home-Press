import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import About from "../Pages/About";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";
import HomeCardDetails from "../Layouts/HomeCardDetails";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../Pages/UserProfile";

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
                element: <PrivateRouter><UserProfile></UserProfile> </PrivateRouter>
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
            },
            {
                path: '/home/:id',
                element: <PrivateRouter><HomeCardDetails></HomeCardDetails></PrivateRouter>,
                loader:  () => fetch('/residential.json')
            }
        ]
    }
])
export default router