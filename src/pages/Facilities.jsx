import React from 'react';
import Section from '../components/Section';
import { Laptop, BookOpen, Microscope, Shield, Truck, TreePine, Tv, Coffee } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
    const facilities = [
        { title: 'Smart Classrooms', icon: <Tv />, desc: 'Fully digital classrooms equipped with interactive smart boards and high-speed internet.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800' },
        { title: 'Computer Lab', icon: <Laptop />, desc: 'Modern IT lab with latest systems and software for digital literacy and coding skills.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800' },
        { title: 'Science Lab', icon: <Microscope />, desc: 'Well-equipped laboratories for Physics, Chemistry, and Biology experiments.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800' },
        { title: 'Modern Library', icon: <BookOpen />, desc: 'A vast collection of books, journals, and digital resources to foster reading habits.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800' },
        { title: 'Safe Playground', icon: <TreePine />, desc: 'Spacious and safe playing area for physical education and outdoor sports.', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800' },
        { title: 'CCTV Security', icon: <Shield />, desc: '24/7 camera surveillance across the campus to ensure the safety of every child.', image: 'https://images.unsplash.com/photo-1557597774-9d2739f8ff19?q=80&w=800' },
        { title: 'Transportation', icon: <Truck />, desc: 'A fleet of well-maintained school buses with GPS tracking and trained staff.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800' },
        { title: 'Clean Campus', icon: <Coffee />, desc: 'Hygienic environment with high standards of cleanliness and pure drinking water.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800' },
    ];

    return (
        <div className="facilities-page">
            <section className="page-header facilities-header">
                <div className="container">
                    <h1>Modern Facilities</h1>
                    <p>We provide a world-class environment designed to inspire and facilitate learning.</p>
                </div>
            </section>

            <Section>
                <div className="facilities-grid">
                    {facilities.map((fac, i) => (
                        <div key={i} className="facility-card">
                            <div className="facility-img">
                                <img src={fac.image} alt={fac.title} />
                                <div className="facility-icon-overlay">{fac.icon}</div>
                            </div>
                            <div className="facility-content">
                                <h3>{fac.title}</h3>
                                <p>{fac.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="accent" title="Safe & Secure Campus">
                <div className="security-info text-center">
                    <p>Safety is our top priority. Our campus is optimized for student well-being with multiple check-points, verified staff, and emergency protocols in place.</p>
                    <div className="security-badges flex items-center justify-center">
                        <div className="badge-item"><Shield /> 24/7 CCTV</div>
                        <div className="badge-item"><Shield /> Fire Safety</div>
                        <div className="badge-item"><Shield /> First Aid</div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Facilities;
