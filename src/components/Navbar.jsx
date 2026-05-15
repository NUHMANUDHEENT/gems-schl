import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container flex justify-between items-center">
                    <div className="contact-info flex">
                        <span className="flex items-center"><Phone size={14} /> +91 000 000 0000</span>
                        <span className="flex items-center ml-4"><Mail size={14} /> info@gemsschool.in</span>
                    </div>
                    <div className="location-info hidden-mobile">
                        Kundoor, Tirurangadi, Kerala
                    </div>
                </div>
            </div>

            <nav className="navbar">
                <div className="container flex justify-between items-center">
                    <Link to="/" className="logo">
                        <span className="logo-text">GEMS</span>
                        <span className="logo-subtext">SCHOOL</span>
                    </Link>

                    <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/admissions" className="btn btn-primary mobile-only">Apply Now</Link>
                    </div>

                    <div className="nav-actions flex items-center">
                        <Link to="/admissions" className="btn btn-primary hidden-mobile">Apply Now</Link>
                        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
