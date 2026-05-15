import React from 'react';

const Section = ({
    title,
    subtitle,
    children,
    className = '',
    id = '',
    background = 'white',
    center = true
}) => {
    const bgStyles = {
        white: 'var(--white)',
        light: 'var(--gray-50)',
        dark: 'var(--primary)',
        accent: 'var(--gray-100)'
    };

    return (
        <section
            id={id}
            className={`section-padding ${className}`}
            style={{ backgroundColor: bgStyles[background] }}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className={`section-header ${center ? 'text-center' : ''}`} style={{ marginBottom: '60px' }}>
                        {subtitle && <span className="section-subtitle">{subtitle}</span>}
                        {title && <h2>{title}</h2>}
                        <div className={`section-underline ${center ? 'mx-auto' : ''}`}></div>
                    </div>
                )}
                {children}
            </div>

            <style jsx>{`
        .section-subtitle {
          display: block;
          color: var(--secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: ${background === 'dark' ? 'var(--white)' : 'var(--primary)'};
        }
        .section-underline {
          width: 80px;
          height: 3px;
          background: var(--secondary);
          margin-top: 10px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Section;
