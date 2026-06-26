import { HotelRooms } from "./card.js";
import "./index.css"
import { Star, MapPin, BedSingle, Bath, SquareArrowOutUpRight, Heart } from 'lucide-react';
import { Link } from "react-router-dom";

function Rooms() {
    return (
        <div className="gallery">
            {HotelRooms.map((room) => (
                <div className="rooms" key={room.id}>
                    <div className="top">
                        <Link to={`/rooms/${room.id}`}>
                        <img src={room.image} alt={room.title} />
                        </Link>
                        <button className="btn"><Heart size={25} color="black"/></button>
                    </div>
                    <div className="middle">
                        <h2>{room.title}</h2>
                        <div className="middle1">
                            <p><MapPin size={12} color="black" />{room.location}</p>
                            <h3>${room.price}/mo</h3>
                        </div>
                    </div>

                    {/* <div className="line"></div> */}
                    <div className="bottom">
                        <p> <BedSingle size={12} color="black" />{room.bed}Bed</p>
                        <p><Bath size={12} color="black" />{room.bath}Bath</p>
                        <p><SquareArrowOutUpRight size={12} color="black" />{room.sqft}sqft</p>
                        <p className="rating"> <Star size={12} fill="gold" color="gold" />{room.rating} </p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Rooms;