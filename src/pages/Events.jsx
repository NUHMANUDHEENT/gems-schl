import React from 'react';
import Section from '../components/Section';
import './Events.css';

const Events = () => {
    const events = [
        { title: 'Annual Day Celebration', date: 'January 15, 2026', desc: 'A grand celebration of arts and culture featuring performances by our talented students.', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800' },
        { title: 'Sports Meet 2025', date: 'December 10, 2025', desc: 'Annual athletic events and team sports fostering sportsmanship and physical fitness.', img: 'https://www.newsband.in/uploads/blog_main_img/1ecc578547819191b61faaaf3090bb32_1.jpg' },
        { title: 'Science & Arts Fair', date: 'November 05, 2025', desc: 'Exhibition of innovative science projects and creative artworks by students.', img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800' },
    ];

    return (
        <div className="events-page">
            <section className="page-header events-header">
                <div className="container">
                    <h1>Events & Activities</h1>
                    <p>Celebrating milestones and nurturing talents through diverse activities.</p>
                </div>
            </section>

            <Section>
                <div className="events-list">
                    {events.map((ev, i) => (
                        <div key={i} className="event-item">
                            <div className="event-img">
                                <img src={ev.img} alt={ev.title} />
                            </div>
                            <div className="event-details">
                                <span className="event-date">{ev.date}</span>
                                <h2>{ev.title}</h2>
                                <p>{ev.desc}</p>
                                <button className="btn btn-outline" style={{ marginTop: '1rem' }}>View Gallery</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Events;
