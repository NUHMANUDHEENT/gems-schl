import React from 'react';
import Section from '../components/Section';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header contact-header">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>Have questions? We're here to help you. Reach out to us anytime.</p>
                </div>
            </section>

            <Section>
                <div className="contact-grid">
                    <div className="contact-info-cards">
                        <div className="info-card">
                            <MapPin className="icon" />
                            <div>
                                <h3>Our Location</h3>
                                <p>GEMS School, Kundoor, Tirurangadi,<br />Kerala - 676320</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Phone className="icon" />
                            <div>
                                <h3>Phone & Mobile</h3>
                                <p>+91 000 000 0000<br />+91 000 000 0000</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Mail className="icon" />
                            <div>
                                <h3>Email Address</h3>
                                <p>info@gemsschool.in<br />admissions@gemsschool.in</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Clock className="icon" />
                            <div>
                                <h3>Office Hours</h3>
                                <p>Mon - Fri: 9:00 AM - 4:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h2>Send us a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <select>
                                    <option>Subject of Enquiry</option>
                                    <option>Admissions</option>
                                    <option>General Information</option>
                                    <option>Academics</option>
                                    <option>Transporation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                                Send Message <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

            <div className="map-section">
                <iframe
                    title="GEMS School Kundoor Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.303864757386!2d75.92040661480282!3d11.015734500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64d006cefbedf%3A0x9f5316d0c451f6e2!2sGousiyya%20English%20Medium%20School%20(GEMS)!5e0!3m2!1sen!2sin!4v1715752557000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
