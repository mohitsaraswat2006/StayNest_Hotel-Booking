
import "./index.css"
import { useParams, Link } from "react-router-dom";
import { HotelRooms } from "./card.js";
import { Star, MapPin, BedSingle, Bath, SquareArrowOutUpRight } from 'lucide-react';

function Preview() {
    const { id } = useParams();

    const room = HotelRooms.find((r) => r.id === Number(id));

    if (!room) {
        return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Room Not Found 😢</h1>;
    }

    return (
        <div className="preview-container-simple">

            <div className="back-link-area">
                <Link to="/rooms">← Back to Rooms</Link>
            </div>

            <div className="main-split-card">

                <div className="left-image-side">
                    <img src={room.image} alt={room.title} />
                </div>

                <div className="right-details-side">
                    <span className="simple-loc"><MapPin size={14} /> {room.location}</span>
                    <h1>{room.title}</h1>

                    <div className="simple-rating">
                        <Star size={16} fill="gold" color="gold" />
                        <span>{room.rating} (Verified Listing)</span>
                    </div>

                    <div className="simple-amenities">
                        <p><BedSingle size={16} /> {room.bed} Bed</p>
                        <p><Bath size={16} /> {room.bath} Bath</p>
                        <p><SquareArrowOutUpRight size={16} /> {room.sqft} sqft</p>
                    </div>

                    <h2 className="simple-price">₹{room.price}<span>/month</span></h2>

                    <button type="button" className="simple-book-btn">Book Now</button>
                </div>

            </div>
        </div>
    );
}

export default Preview;