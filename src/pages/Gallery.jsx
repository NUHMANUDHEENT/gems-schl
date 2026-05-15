import React, { useState } from 'react';
import Section from '../components/Section';
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Campus', 'Classroom', 'Events', 'Sports', 'Activities'];

    const photos = [
        { id: 1, category: 'Campus', url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwY2FtcHVzfGVufDB8fDB8fHww' },
        { id: 2, category: 'Classroom', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800' },
        { id: 3, category: 'Events', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800' },
        { id: 4, category: 'Sports', url: 'https://images.unsplash.com/photo-1511871893393-82e9c1d39d0d?q=80&w=800' },
        { id: 5, category: 'Activities', url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800' },
        { id: 6, category: 'Campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800' },
        { id: 7, category: 'Classroom', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800' },
        { id: 8, category: 'Activities', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800' },
    ];

    const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

    return (
        <div className="gallery-page">
            <section className="page-header gallery-header">
                <div className="container">
                    <h1>School Gallery</h1>
                    <p>Unforgettable moments and glimpses of our vibrant school life.</p>
                </div>
            </section>

            <Section>
                <div className="gallery-filters flex items-center justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} className="gallery-item">
                            <img src={photo.url} alt={photo.category} />
                            <div className="gallery-overlay">
                                <span>{photo.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Gallery;
