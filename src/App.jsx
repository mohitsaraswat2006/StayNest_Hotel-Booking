
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rooms from "./rooms";
import Preview from "./preview";
import Favourites from "./Favourites";
import About from "./About";
import Contact from "./Contact";
import Login from "./login";
import Home2 from "./Home2";

function HomePage() {
    return (
        <>
    {/* <h1>Welcome to StayNest 🏨</h1>; */}
    <Home2/>
    </>
    )
}

function App() {
    return (
        <Routes>
        
            <Route path="/" element={<Home />}>

            
                <Route index element={<HomePage />} />

                <Route path="rooms" element={<Rooms />} />
                <Route path="rooms/:id" element={<Preview />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />

            </Route>
        </Routes>
    );
}

export default App;