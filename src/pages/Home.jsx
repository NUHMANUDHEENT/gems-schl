import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import './Home.css';

const Home = () => {
    const highlights = [
        { title: 'Smart Classrooms', icon: <Shield />, desc: 'Interative learning with modern technology.' },
        { title: 'Multiple Syllabus', icon: <BookOpen />, desc: 'Kerala and other syllabus options available.' },
        { title: 'English Medium', icon: <Star />, desc: 'Excellence in English medium education.' },
        { title: 'Safe Campus', icon: <Shield />, desc: 'CCTV monitored and secure environment.' },
        { title: 'Expert Teachers', icon: <Users />, desc: 'Highly qualified and dedicated faculty.' },
        { title: 'Kids Park', icon: <Star />, desc: 'Playground and activity area for children.' },
    ];

    const stats = [
        { value: '500+', label: 'Students' },
        { value: '30+', label: 'Expert Teachers' },
        { value: '20+', label: 'Modern Classrooms' },
        { value: '15+', label: 'Years of Excellence' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="badge">Admissions for 2026 Open</span>
                    <h1>Nurturing Minds,<br /><span>Shaping Futures</span></h1>
                    <p>Providing excellence in education at GEMS School, Kundoor. We believe in holistic development and academic brilliance.</p>
                    <div className="hero-btns">
                        <Link to="/admissions" className="btn btn-primary">Admissions 2026</Link>
                        <Link to="/academics" className="btn btn-white">Explore Programs <ArrowRight size={18} /></Link>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <Section title="Welcome to GEMS School" subtitle="Our Legacy">
                <div className="welcome-grid">
                    <div className="welcome-text">
                        <p>Welcome to GEMS School, Kundoor, Tirurangadi—a beacon of excellence in education. We are dedicated to providing a transformative learning experience that empowers students to reach their full potential.</p>
                        <p>Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning. With a team of apasionante educators and state-of-the-art facilities, we ensure every child receives the attention they deserve.</p>
                        <ul className="welcome-list">
                            <li><CheckCircle size={18} /> Holistic student development</li>
                            <li><CheckCircle size={18} /> Modern pedagogical approaches</li>
                            <li><CheckCircle size={18} /> Strong value-based education</li>
                            <li><CheckCircle size={18} /> Safe and inclusive environment</li>
                        </ul>
                        <Link to="/about" className="btn btn-outline">Read More About Us</Link>
                    </div>
                    <div className="welcome-image">
                        <img src="https://images.pexels.com/photos/5211431/pexels-photo-5211431.jpeg" alt="Students learning" className="rounded-img" />
                    </div>
                </div>
            </Section>

            {/* Highlights Section */}
            <Section title="Why Choose GEMS" subtitle="Key Highlights" background="light">
                <div className="highlights-grid">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="highlight-card">
                            <div className="icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-item">
                                <h2 className="stat-value">{stat.value}</h2>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <Section background="dark" className="cta-section">
                <div className="cta-content text-center">
                    <h2>Ready to Join Our Community?</h2>
                    <p>Join the GEMS family today and give your child the education they deserve.</p>
                    <Link to="/contact" className="btn btn-gold">Contact Admissions Now</Link>
                </div>
            </Section>

            {/* Testimonials Section */}
            <Section title="Parent Testimonials" subtitle="Community Voices" background="light">
                <div className="testimonials-grid">
                    {[
                        { name: "Ahmed K.P.", role: "Parent", text: "GEMS School has provided my daughter with a fantastic environment to grow. The focus on both academics and character is truly impressive." },
                        { name: "Mariyam Z.", role: "Student (Grade 10)", text: "I love the smart classrooms and the supportive teachers here. It makes learning so much more engaging and fun!" },
                        { name: "Dr. Faisal", role: "Parent", text: "The school's facilities, especially the labs and the safe campus, give us peace of mind. Truly a premium institution in Tirurangadi." }
                    ].map((t, idx) => (
                        <div key={idx} className="testimonial-card">
                            <div className="quote-icon">"</div>
                            <p>{t.text}</p>
                            <div className="testimonial-info">
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* FAQ Section */}
            <Section title="Frequently Asked Questions" subtitle="Support">
                <div className="faq-grid">
                    {[
                        { q: "What are the school hours?", a: "The school hours are from 9:30 AM to 3:30 PM, Monday to Friday." },
                        { q: "Do you offer transportation?", a: "Yes, we have a fleet of safe buses covering major routes in Kundoor and Tirurangadi." },
                        { q: "What syllabus do you follow?", a: "We primarily follow the Kerala State Syllabus with enhanced modern learning modules." }
                    ].map((faq, idx) => (
                        <div key={idx} className="faq-item">
                            <h3>{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Home;
