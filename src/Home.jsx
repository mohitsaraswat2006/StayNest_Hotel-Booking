import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Rooms from "./rooms";
import Favourites from "./Favourites.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Login from "./login.jsx";
import { House } from "lucide-react";



function Home() {
    return (
        <>
            <nav id="navbar">
                <div id="one">
                    <div>
                        <House size={30} color="rgb(226, 70, 132)" />
                    </div>
                    <div>
                        <h2>StayNest</h2>
                    </div>  
                </div>
                <div id="two">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="rooms">Rooms</NavLink>
                    <NavLink to="Favourites">Favourites</NavLink>
                    <NavLink to="About">About Us</NavLink>
                    <NavLink to="Contact">Contact</NavLink>
                </div>
                <div id="three">
                    <NavLink to="login">
                        <button>Sign In</button>
                    </NavLink>
                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Home;

