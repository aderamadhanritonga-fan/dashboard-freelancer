import { NavLink, Outlet } from "react-router-dom";
import "../routers/styles/index.css"

function Navbar(){
    return (
        <>
        <nav className="navbar">
            <NavLink
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
            to="/">Home</NavLink>
             | 
            <NavLink 
             className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
             to="/projects">Projek</NavLink>
              | 
            <NavLink 
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
            to="/todo">ToDo</NavLink>
              | 
            <NavLink 
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
            to="/user">User</NavLink>
              | 
            <NavLink 
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
            to="/about">About</NavLink>
        </nav>
        <p/>
        <Outlet />
        </>
    )
}
export default Navbar