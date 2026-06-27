
import "./index.css";
import { HotelRooms } from "./card.js";
import { Star, MapPin, Heart, Trash2 } from 'lucide-react';
import { Link } from "react-router-dom";

function Favourites() {
    // Abhi state-management nahi hai, toh layout testing ke liye 
    // hum mock data se koi bhi do pasandida rooms (jaise id: 1 aur id: 3) filter kar lete hain.
    const favRooms = HotelRooms.filter(room => room.id === 1 || room.id === 3);

    return (
        <div className="fav-page-container">
            {/* Page Header */}
            <div className="fav-header">
                <h1>❤️ Your Saved Properties</h1>
                <p>You have saved {favRooms.length} properties to your wishlist</p>
            </div>

            {/* Empty Wishlist Corner (Agar koi saved room na ho toh yeh dikhega) */}
            {favRooms.length === 0 ? (
                <div className="empty-fav">
                    <h3>No favourites added yet!</h3>
                    <Link to="/rooms"><button className="explore-btn">Explore Rooms</button></Link>
                </div>
            ) : (
                /* Reusing your existing Gallery CSS grid */
                <div className="gallery">
                    {favRooms.map((room) => (
                        <div className="rooms" key={room.id}>
                            
                            {/* Top Image View */}
                            <div className="top">
                                <Link to={`/rooms/${room.id}`}>
                                    <img src={room.image} alt={room.title} />
                                </Link>
                                <button className="btn fav-active-btn" aria-label="Remove from favorites">
                                    <Heart size={22} fill="#E24684" color="#E24684" />
                                </button>
                            </div>

                            {/* Middle Data Rows */}
                            <div className="middle">
                                <h2>{room.title}</h2>
                                <div className="middle1">
                                    <p><MapPin size={12} color="black" /> {room.location}</p>
                                    <h3>₹{room.price}/mo</h3>
                                </div>
                            </div>

                            {/* Bottom Strip with Remove Button */}
                            <div className="fav-card-footer">
                                <div className="fav-rating">
                                    <Star size={12} fill="gold" color="gold" /> {room.rating}
                                </div>
                                <button className="remove-fav-btn">
                                    <Trash2 size={14} /> Remove
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favourites;