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

// https://chatgpt.com/backend-api/estuary/content?id=file_000000002b3872069c5ac65570a054a0&ts=495091&p=fs&cid=1&sig=be857190faed13ad0eb4176f91e040b58a3fad25f4cab02f32805478965e2a20&v=0