import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Career from "../pages/Career/Career"
import About from "../pages/About/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;