import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, MessageSquare, Users, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col about">
                        <Link to="/" className="logo">
                            <span className="logo-text">GEMS</span>
                            <span className="logo-subtext">SCHOOL</span>
                        </Link>
                        <p className="footer-desc">
                            GEMS School is dedicated to providing quality education in an environment that fosters growth, creativity, and academic excellence. Since our inception, we've been nurturing the future leaders of tomorrow.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Globe size={20} /></a>
                            <a href="#" className="social-icon"><Camera size={20} /></a>
                            <a href="#" className="social-icon"><MessageSquare size={20} /></a>
                            <a href="#" className="social-icon"><Users size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/academics">Academics</Link></li>
                            <li><Link to="/facilities">Facilities</Link></li>
                            <li><Link to="/admissions">Admissions</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col academics">
                        <h3>Academics</h3>
                        <ul>
                            <li><Link to="/academics">Lower Kindergarten</Link></li>
                            <li><Link to="/academics">Upper Kindergarten</Link></li>
                            <li><Link to="/academics">Primary School</Link></li>
                            <li><Link to="/academics">Middle School</Link></li>
                            <li><Link to="/academics">High School</Link></li>
                            <li><Link to="/academics">Extra-Curricular</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={20} className="icon" />
                            <p>GEMS School, Kundoor, Tirurangadi, Kerala - 676306</p>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="icon" />
                            <p>+91 000 000 0000<br />+91 000 000 0000</p>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="icon" />
                            <p>info@gemsschool.in<br />admissions@gemsschool.in</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container flex justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} GEMS School Kundoor. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
