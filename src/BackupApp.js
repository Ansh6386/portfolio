import React from 'react';

// Backup simple version without complex dependencies
const BackupApp = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
                <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '10px'
                    }}>
                        Ansh Shukla
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        Full Stack Developer & Problem Solver
                    </p>
                </header>

                <div style={{ display: 'grid', gap: '30px' }}>
                    {/* Contact */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Contact Information
                        </h2>
                        <div style={{ display: 'grid', gap: '10px' }}>
                            <p>📧 anshshukla352@gmail.com</p>
                            <p>📞 +91 6386723905</p>
                            <p>🌐 leetcode.com/u/ansh-0011/</p>
                            <p>🌐 linkedin.com/in/ansh-shukla-56720925a/</p>
                            <p>🌐 github.com/Ansh6386</p>
                        </div>
                    </section>

                    {/* Education */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Education
                        </h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    KIET Group of Institutions, B.Tech in Information Technology
                                </h3>
                                <p style={{ color: '#666' }}>Sept 2022 – Jun 2026</p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>Current CGPA: 8.4/10</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    Lucknow Public School, Intermediate
                                </h3>
                                <p style={{ color: '#666' }}>April 2020 – April 2021</p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>Percentage: 72%</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    Lucknow Public School, High School
                                </h3>
                                <p style={{ color: '#666' }}>April 2018 – April 2019</p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>Percentage: 82%</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Skills
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Languages</h3>
                                <p style={{ color: '#666' }}>C++, C, HTML, CSS, JavaScript, SQL</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Frameworks/Libraries</h3>
                                <p style={{ color: '#666' }}>React Native, Tailwind CSS</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Course Work</h3>
                                <p style={{ color: '#666' }}>Operating System, Database Management System, OOPS</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Tools & Platforms</h3>
                                <p style={{ color: '#666' }}>Git and GitHub, MongoDB, Firebase, Appwrite</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Projects
                        </h2>
                        <div style={{ display: 'grid', gap: '25px' }}>
                            <div style={{
                                borderLeft: '4px solid #007bff',
                                paddingLeft: '20px',
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '10px'
                            }}>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Blog Application (Sept 2024 – Oct 2024)
                                </h3>
                                <p style={{ color: '#666', marginBottom: '10px' }}>
                                    Developed a modern blog application leveraging Appwrite for authentication and database management.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>
                                    Tech Stack: HTML, Tailwind CSS, React Native, Appwrite
                                </p>
                            </div>
                            <div style={{
                                borderLeft: '4px solid #28a745',
                                paddingLeft: '20px',
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '10px'
                            }}>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Real Time Chat Application (Jun 2024 – Jul 2024)
                                </h3>
                                <p style={{ color: '#666', marginBottom: '10px' }}>
                                    Built a group chat app with Firebase Authentication, Firestore, and Realtime Database.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>
                                    Tech Stack: HTML, CSS, React Native, Firebase
                                </p>
                            </div>
                            <div style={{
                                borderLeft: '4px solid #6f42c1',
                                paddingLeft: '20px',
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '10px'
                            }}>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    PayFlow (Dec 2024 – Jan 2025)
                                </h3>
                                <p style={{ color: '#666', marginBottom: '10px' }}>
                                    Collaborated as Frontend Developer on a Paytm clone project.
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>
                                    Tech Stack: HTML, Tailwind CSS, React Native, Node.js, Express.js, MongoDB
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Achievements
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '0', color: '#007bff' }}>•</span>
                                Solved 1000+ DSA problems on LeetCode, GFG, and CodeChef
                            </li>
                            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '0', color: '#007bff' }}>•</span>
                                Achieved a 1636 rating on LeetCode
                            </li>
                            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '0', color: '#007bff' }}>•</span>
                                Felicitated for outstanding academic achievements in first year
                            </li>
                        </ul>
                    </section>

                    {/* Certificates */}
                    <section style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
                            Certificates
                        </h2>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    AWS Academy Graduate – AWS Academy Cloud Foundations
                                </h3>
                                <p style={{ color: '#666' }}>Oct 2024 – Nov 2024</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    Developer & Technology Job Simulation – Accenture
                                </h3>
                                <p style={{ color: '#666' }}>Dec 2024 – Jan 2025</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    Web Development – IBM SkillBuild
                                </h3>
                                <p style={{ color: '#666' }}>Jun 2025 – Jul 2025</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BackupApp;
