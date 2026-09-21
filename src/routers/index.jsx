import { createBrowserRouter } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home"
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetails/ProjectD";
import ToDo from "../pages/ToDo";
import User from "../pages/User";
import About from "../pages/About";
import NotFound from "../pages/NotFound";



export const router = createBrowserRouter ([
    {
        path:"/",
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/projects",
                element: <Projects />
            },
            {
                path:'/projects/:id',
                element:<ProjectDetail />
            },
            {
                path:'/todo',
                element:<ToDo />
            },
            {
                path:'/user',
                element:<User />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }



])