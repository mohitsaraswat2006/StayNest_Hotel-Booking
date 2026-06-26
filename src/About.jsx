

// function About(){
//     return(
//         <>
//         <h1>About page.</h1>
//         </>
//     )
// }

// export default About;
import "./index.css";
import { ShieldCheck, Target, Heart } from 'lucide-react';

function About() {
    return (
        <div className="about-page-container">
            {/* Top Banner Hero Section */}
            <div className="about-hero">
                <h1>🏠 About StayNest</h1>
                <p className="about-subtitle">
                    Making room hunting simple, fast, and affordable for working professionals and students.
                </p>
                <div className="about-story">
                    <p>
                        StayNest was founded with a clear vision: to eliminate the hassle of finding a trusted place to live. 
                        We connect you directly with verified properties, ensuring full transparency, zero hidden brokerage, 
                        and premium comfort. Your next home is just a click away!
                    </p>
                </div>
            </div>

            {/* Core Values Section (3 Simple Cards) */}
            <div className="about-values-grid">
                
                <div className="value-card">
                    <div className="value-icon">
                        <Target size={28} color="#E24684" />
                    </div>
                    <h3>Our Mission</h3>
                    <p>To provide budget-friendly and accessible coliving solutions across top tier cities without any broker intervention.</p>
                </div>

                <div className="value-card">
                    <div className="value-icon">
                        <ShieldCheck size={28} color="#E24684" />
                    </div>
                    <h3>100% Verified</h3>
                    <p>Every single listing on StayNest undergoes strict physical verification so you get exactly what you see online.</p>
                </div>

                <div className="value-card">
                    <div className="value-icon">
                        <Heart size={28} color="#E24684" />
                    </div>
                    <h3>User First</h3>
                    <p>With 24/7 dedicated customer care and instant booking confirmations, your comfort is always our highest priority.</p>
                </div>

            </div>
        </div>
    );
}

export default About;