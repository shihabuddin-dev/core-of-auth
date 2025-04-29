import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            {path: '/about', Component: About},
            {path: '/blogs', Component: Blogs},
            {path: '/signin', Component: SignIn},
            {path: '/signup', Component: SignUp},

        ]
    },
]);

export default router;