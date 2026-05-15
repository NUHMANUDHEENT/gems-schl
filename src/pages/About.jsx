import React from 'react';
import Section from '../components/Section';
import { Target, Eye, Award, Heart } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        { title: 'Integrity', icon: <Award />, desc: 'We uphold the highest standards of integrity in all of our actions.' },
        { title: 'Excellence', icon: <Target />, desc: 'We strive for excellence in everything we do, pushing boundaries.' },
        { title: 'Compassion', icon: <Heart />, desc: 'We foster a kind and supportive environment for all students.' },
        { title: 'Innovation', icon: <Eye />, desc: 'We embrace new ideas and creative approaches to learning.' },
    ];

    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header about-header">
                <div className="container">
                    <h1>About Our School</h1>
                    <p>Inspiring excellence and nurturing potential since day one.</p>
                </div>
            </section>

            {/* Main Intro */}
            <Section title="Our Story">
                <div className="about-intro-grid">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000" alt="School Campus" className="rounded-img" />
                    </div>
                    <div className="about-text">
                        <h2>Developing Future Leaders</h2>
                        <p>GEMS School, located in the serene environment of Kundoor, Tirurangadi, was established with a vision to revolutionize the educational landscape of our region. As an English Medium school, we bridge the gap between traditional values and modern global standards.</p>
                        <p>Our journey began with a handful of students and a dream to create a space where education goes beyond textbooks. Today, we are proud to be one of the most trusted names in early and secondary education in Kerala.</p>
                        <p>We provide a nurturing atmosphere where students are encouraged to explore their interests, challenge their limits, and develop into responsible global citizens.</p>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section background="light">
                <div className="vm-grid">
                    <div className="vm-card">
                        <div className="vm-icon"><Eye size={40} /></div>
                        <h2>Our Vision</h2>
                        <p>To be a premier institution of learning that nurtures young minds to become innovative, compassionate, and globally competent leaders who contribute positively to society.</p>
                    </div>
                    <div className="vm-card">
                        <div className="vm-icon"><Target size={40} /></div>
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide a comprehensive and challenging curriculum in a safe, supportive environment that focuses on academic excellence, character building, and individual growth.</p>
                    </div>
                </div>
            </Section>

            {/* Principal's Message */}
            <Section title="Message from the Principal">
                <div className="principal-grid">
                    <div className="principal-text">
                        <blockquote>
                            "Education is not the learning of facts, but the training of the mind to think. At GEMS, we don't just teach students; we inspire them to dream big and give them the tools to achieve those dreams. Our commitment to excellence is reflected in the success of our students and the happiness of our families."
                        </blockquote>
                        <p className="principal-name">— Dr. Jane Doe</p>
                        <p className="principal-title">Principal, GEMS School</p>
                    </div>
                    <div className="principal-image">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" alt="Principal" className="principal-img" />
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section title="Our School Values" subtitle="What We Stand For" background="accent">
                <div className="values-grid">
                    {values.map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="v-icon">{v.icon}</div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
