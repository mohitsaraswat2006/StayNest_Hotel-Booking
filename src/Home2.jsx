import { ShieldCheck, Wallet, Headset, Star, UserRound, Building2, MapPin, } from "lucide-react";
import { Cities } from "./card.js";

function Home2() {
    return (
        <>
            <div id="home-page">
                <div id="hero-section">
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80" alt="Image is Loading...." />
                    <div id="hero-section2">
                        <button>WELCOME TO HOME</button>
                        <h1>Find Your Perfect<br />Place to Stay</h1>
                        <p>Discover comfortable,affordable and verified rooms<br />across top cities .Your next home is a click away!</p>
                    </div>
                </div>
                <div className="hero-section3">
                    <div className="hero-section31">
                        <div>
                            <button><ShieldCheck size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                        </div>
                        <div>
                            <h3>Verified Rooms</h3>
                            <p>100% verified and trusted <br />listing</p>
                        </div>
                    </div>
                    <div className="hero-section31">
                        <div>
                            <button><Wallet size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                        </div>
                        <div>
                            <h3>Affordable Prices</h3>
                            <p>Best rooms at pocket<br />friendly prices</p>
                        </div>
                    </div>
                    <div className="hero-section31">
                        <div>
                            <button><Headset size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                        </div>
                        <div>
                            <h3>24/7 Support</h3>
                            <p>We are here to help you<br />anytime</p>
                        </div>
                    </div>
                    <div className="hero-section31">
                        <div>
                            <button><Star size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                        </div>
                        <div>
                            <h3>Top Rated</h3>
                            <p>highly rated by thousands <br />of happy users</p>
                        </div>
                    </div>

                </div>
                <div className="hero-room">
                    {Cities.map((roomm) => (
                        <div className="hero-room1" key={roomm.id}>
                            <img src={roomm.image} alt="Image is Loading..." />
                            <h3>{roomm.city}</h3>
                            <p>{roomm.rooms}</p>
                        </div>
                    )
                    )}
                </div>
                <div className="hero-bottom">
                    <div className="hero-bottom1">
                        <h2>Why Choose Us?</h2>
                        <p>We make finding the perfect room simple,<br />fast and hassle-free.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="hero-bottom2">
                        <div className="hero-bottom21">
                            <div>
                                <button><UserRound size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                            </div>
                            <div>
                                <h2>10K+</h2>
                                <p>Happy Users</p>
                            </div>
                        </div>
                        <div className="hero-bottom21">
                            <div>
                                <button><Building2 size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                            </div>
                            <div>
                                <h2>5K+</h2>
                                <p>Verified Rooms</p>
                            </div>
                        </div>
                        <div className="hero-bottom21">
                            <div>
                                <button><MapPin size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                            </div>
                            <div>
                                <h2>15+</h2>
                                <p>Top Cities</p>
                            </div>
                        </div>
                        <div className="hero-bottom21">
                            <div>
                                <button><Star size={30} color=" rgb(226, 70, 132)" fill="pink" /></button>
                            </div>
                            <div>
                                <h2>4.7</h2>
                                <p>User Rating</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home2;