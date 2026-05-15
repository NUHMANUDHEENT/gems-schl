import React from 'react';
import Section from '../components/Section';
import { Book, Cpu, Users, Award, Music, Microscope } from 'lucide-react';
import './Academics.css';

const Academics = () => {
    const levels = [
        { title: 'Lower Kindergarten', age: '3-4 Years', desc: 'Introduction to social skills, basic phonics, and play-based learning.' },
        { title: 'Upper Kindergarten', age: '4-5 Years', desc: 'Building foundation in reading, writing, and arithmetic through activities.' },
        { title: 'Primary School', age: 'Grade 1-5', desc: 'Core subjects focus with emphasis on character building and basic sciences.' },
        { title: 'Middle School', age: 'Grade 6-8', desc: 'Advanced concepts in Maths, Science, and Humanities with lab exposures.' },
        { title: 'High School', age: 'Grade 9-10', desc: 'Intensive preparation for secondary school board exams and career guidance.' },
    ];

    const methods = [
        { title: 'Smart Learning', icon: <Cpu />, desc: 'Use of interactive whiteboards and digital content for complex concepts.' },
        { title: 'Activity-Based', icon: <Microscope />, desc: 'Hands-on experiments and practical learning for better retention.' },
        { title: 'Individual Attention', icon: <Users />, desc: 'Small class sizes ensuring every child gets focused guidance.' },
        { title: 'Holistic Curriculum', icon: <Book />, desc: 'Balanced mix of academics, sports, arts, and value education.' },
    ];

    return (
        <div className="academics-page">
            <section className="page-header academics-header">
                <div className="container">
                    <h1>Academic Excellence</h1>
                    <p>Nurturing curiosity and fostering academic brilliance from LKG to Grade 10.</p>
                </div>
            </section>

            <Section title="Our Programs" subtitle="Educational Levels">
                <div className="levels-grid">
                    {levels.map((level, i) => (
                        <div key={i} className="level-card">
                            <div className="level-badge">{level.age}</div>
                            <h3>{level.title}</h3>
                            <p>{level.desc}</p>
                            <ul className="level-features">
                                <li><Award size={14} /> Certified Curriculum</li>
                                <li><Award size={14} /> Expert Tutors</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="light" title="Modern Learning Methods" subtitle="Pedagogy">
                <div className="methods-grid">
                    {methods.map((method, i) => (
                        <div key={i} className="method-item">
                            <div className="method-icon">{method.icon}</div>
                            <div className="method-info">
                                <h3>{method.title}</h3>
                                <p>{method.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="dark" className="syllabus-cta">
                <div className="text-center">
                    <h2>Kerala State Syllabus</h2>
                    <p>We follow the Kerala State Education Board syllabus, enhanced with world-class teaching methodologies and digital resources.</p>
                    <button className="btn btn-gold">Download Syllabus PDF</button>
                </div>
            </Section>
        </div>
    );
};

export default Academics;
