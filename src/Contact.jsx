import "./index.css";
import { Phone, Mail, MapPin, Send } from 'lucide-react';

function Contact() {
    // Form submission handle karne ke liye simple function
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully. Team StayNest will connect with you shortly. 🚀");
    };

    return (
        <div className="contact-page-container">
            <div className="contact-header">
                <h1>📬 Get In Touch With Us</h1>
                <p>Have any questions about rooms, pricing or verification? We are here to help!</p>
            </div>

            {/* Main Split Layout Container */}
            <div className="contact-split-box">
                
                {/* LEFT SIDE: Contact Information */}
                <div className="contact-info-panel">
                    <h2>Contact Information</h2>
                    <p className="panel-desc">Reach out to us directly through any of these channels. Our team usually responds within a few hours.</p>
                    
                    <div className="info-links-stack">
                        <div className="info-item">
                            <div className="info-icon-box"><Phone size={18} /></div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-box"><Mail size={18} /></div>
                            <div>
                                <h4>Email Support</h4>
                                <p>support@staynest.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-box"><MapPin size={18} /></div>
                            <div>
                                <h4>Head Office</h4>
                                <p>Sector 45, Gurgaon, Haryana, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Interactive Contact Form */}
                <div className="contact-form-panel">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                            Send Message <Send size={14} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;