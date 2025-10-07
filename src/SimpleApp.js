import React from 'react';

const SimpleApp = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Ansh Shukla
                    </h1>
                    <p className="text-xl text-gray-600">Full Stack Developer & Problem Solver</p>
                </header>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="space-y-2">
                        <p>📧 anshshukla352@gmail.com</p>
                        <p>📞 +91 6386723905</p>
                        <p>🌐 leetcode.com/u/ansh-0011/</p>
                        <p>🌐 linkedin.com/in/ansh-shukla-56720925a/</p>
                        <p>🌐 github.com/Ansh6386</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">KIET Group of Institutions, B.Tech in Information Technology</h3>
                            <p className="text-gray-600">Sept 2022 – Jun 2026</p>
                            <p className="text-sm text-gray-500">Current CGPA: 8.4/10</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Lucknow Public School, Intermediate</h3>
                            <p className="text-gray-600">April 2020 – April 2021</p>
                            <p className="text-sm text-gray-500">Percentage: 72%</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Lucknow Public School, High School</h3>
                            <p className="text-gray-600">April 2018 – April 2019</p>
                            <p className="text-sm text-gray-500">Percentage: 82%</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Languages</h3>
                            <p className="text-gray-600">C++, C, HTML, CSS, JavaScript, SQL</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Frameworks/Libraries</h3>
                            <p className="text-gray-600">React Native, Tailwind CSS</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Course Work</h3>
                            <p className="text-gray-600">Operating System, Database Management System, OOPS</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                            <p className="text-gray-600">Git and GitHub, MongoDB, Firebase, Appwrite</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold">Blog Application (Sept 2024 – Oct 2024)</h3>
                            <p className="text-gray-600 mb-2">Developed a modern blog application leveraging Appwrite for authentication and database management.</p>
                            <p className="text-sm text-gray-500">Tech Stack: HTML, Tailwind CSS, React Native, Appwrite</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="font-semibold">Real Time Chat Application (Jun 2024 – Jul 2024)</h3>
                            <p className="text-gray-600 mb-2">Built a group chat app with Firebase Authentication, Firestore, and Realtime Database.</p>
                            <p className="text-sm text-gray-500">Tech Stack: HTML, CSS, React Native, Firebase</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="font-semibold">PayFlow (Dec 2024 – Jan 2025)</h3>
                            <p className="text-gray-600 mb-2">Collaborated as Frontend Developer on a Paytm clone project.</p>
                            <p className="text-sm text-gray-500">Tech Stack: HTML, Tailwind CSS, React Native, Node.js, Express.js, MongoDB</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                    <ul className="space-y-2">
                        <li>• Solved 1000+ DSA problems on LeetCode, GFG, and CodeChef</li>
                        <li>• Achieved a 1636 rating on LeetCode</li>
                        <li>• Felicitated for outstanding academic achievements in first year</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">Certificates</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">AWS Academy Graduate – AWS Academy Cloud Foundations</h3>
                            <p className="text-gray-600">Oct 2024 – Nov 2024</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Developer & Technology Job Simulation – Accenture</h3>
                            <p className="text-gray-600">Dec 2024 – Jan 2025</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Web Development – IBM SkillBuild</h3>
                            <p className="text-gray-600">Jun 2025 – Jul 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleApp;
