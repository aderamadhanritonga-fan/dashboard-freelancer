import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home"
import Projects from "../pages/Projects";
import About from "../pages/About";


export const router = createBrowserRouter ([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"projects",
                element: <Projects />
            },
            {
                path:'about',
                element:<About/>
            }
        ]
    }


])