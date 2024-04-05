import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Career from "../pages/Career/Career"
import About from "../pages/About/About"
import NewsList from "../pages/Components/NewsList/NewsList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsList /></PrivateRoute>,
                loader: () => fetch('/news.json')
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