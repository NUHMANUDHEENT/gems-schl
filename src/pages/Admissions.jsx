import React from 'react';
import Section from '../components/Section';
import { ClipboardList, UserCheck, FileText, CheckCircle } from 'lucide-react';
import './Admissions.css';

const Admissions = () => {
    const steps = [
        { title: 'Enquiry', desc: 'Fill out the online enquiry form or visit our campus office.', icon: <ClipboardList /> },
        { title: 'Interaction', desc: 'A friendly interaction session with the student and parents.', icon: <UserCheck /> },
        { title: 'Documentation', desc: 'Submission of required documents and admission fee.', icon: <FileText /> },
        { title: 'Confirmation', desc: 'Final seat confirmation and orientation details.', icon: <CheckCircle /> },
    ];

    return (
        <div className="admissions-page">
            <section className="page-header admissions-header">
                <div className="container">
                    <h1>Admissions</h1>
                    <p>Begin your journey towards excellence. Join the GEMS family today.</p>
                </div>
            </section>

            <Section title="Admission Process" subtitle="How to Apply">
                <div className="process-grid">
                    {steps.map((step, i) => (
                        <div key={i} className="process-card">
                            <div className="process-icon">{step.icon}</div>
                            <div className="process-connector"></div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="light" title="Eligibility & Requirements">
                <div className="requirements-grid">
                    <div className="req-box">
                        <h3>Age Eligibility</h3>
                        <ul>
                            <li><strong>LKG:</strong> 3+ years as of June 1st</li>
                            <li><strong>UKG:</strong> 4+ years as of June 1st</li>
                            <li><strong>Grade 1:</strong> 5+ years as of June 1st</li>
                        </ul>
                    </div>
                    <div className="req-box">
                        <h3>Required Documents</h3>
                        <ul>
                            <li>Original Birth Certificate</li>
                            <li>Transfer Certificate (if applicable)</li>
                            <li>Passport-sized Photographs (4 nos)</li>
                            <li>Aadhar Card copy</li>
                            <li>Previous Grade Report Card</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section title="Admission Enquiry">
                <div className="enquiry-form-container">
                    <p className="text-center" style={{ marginBottom: '30px' }}>Please fill out the form below, and our admissions team will contact you shortly.</p>
                    <form className="enquiry-form">
                        <div className="form-row">
                            <input type="text" placeholder="Student's Name" required />
                            <input type="text" placeholder="Applying for Grade" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Parent's Name" required />
                            <input type="tel" placeholder="Mobile Number" required />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="Email Address" />
                            <input type="text" placeholder="Current Location" />
                        </div>
                        <textarea placeholder="Any specific requirements or questions?" rows="4"></textarea>
                        <button className="btn btn-primary w-full" style={{ marginTop: '20px' }}>Submit Admission Enquiry</button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Admissions;
