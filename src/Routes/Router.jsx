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
import ErrorPage from "../Shared/ErrorPage";
import Proparty from "./Proparty";
import PrivateUserProfile from "./PrivateUserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                errorElement: <ErrorPage />,
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/userProfile',
                errorElement: <ErrorPage />,
                element: <PrivateRouter><UserProfile></UserProfile> </PrivateRouter>
            },
            {
                path: '/updateProfile',
                errorElement: <ErrorPage />,
                element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
            },
            {
                path: '/about',
                errorElement: <ErrorPage />,
                element: <About></About>
            },
            {
                path: '/login',
                errorElement: <ErrorPage />,
                element: <Login></Login>
            },
            {
                path: '/register',
                errorElement: <ErrorPage />,
                element: <Register></Register>
            },
            {
                path: '/home/:id',
                errorElement: <ErrorPage />,
                element: <PrivateRouter><HomeCardDetails></HomeCardDetails></PrivateRouter>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/proparty',
                element: <PrivateRouter><Proparty></Proparty> </PrivateRouter>,
                loader: () => fetch('/proparty.json')
            },
            {
                path: 'privateUserProfile',
                element: <PrivateRouter> <PrivateUserProfile></PrivateUserProfile> </PrivateRouter>
            }
        ]
    }
])
export default router