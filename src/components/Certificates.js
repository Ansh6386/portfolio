import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Award,
    Calendar,
    ExternalLink,
    Cloud,
    Briefcase,
    Code,
    FileText
} from 'lucide-react';

const Certificates = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const certificates = [
        {
            title: "AWS Academy Graduate",
            subtitle: "AWS Academy Cloud Foundations",
            period: "Oct 2024 – Nov 2024",
            icon: Cloud,
            color: "from-orange-500 to-orange-600",
            description: "Completed comprehensive cloud computing fundamentals course covering AWS services, architecture, and best practices.",
            skills: ["Cloud Computing", "AWS Services", "Architecture Design", "Best Practices"],
            link: "#",
            provider: "AWS Academy"
        },
        {
            title: "Developer & Technology Job Simulation",
            subtitle: "Accenture Professional Development",
            period: "Dec 2024 – Jan 2025",
            icon: Briefcase,
            color: "from-blue-500 to-blue-600",
            description: "Participated in a comprehensive job simulation program focusing on real-world development challenges and professional skills.",
            skills: ["Professional Development", "Team Collaboration", "Project Management", "Technology Solutions"],
            link: "#",
            provider: "Accenture"
        },
        {
            title: "Web Development",
            subtitle: "IBM SkillBuild Certification",
            period: "Jun 2025 – Jul 2025",
            icon: Code,
            color: "from-green-500 to-green-600",
            description: "Advanced web development certification covering modern frameworks, responsive design, and full-stack development practices.",
            skills: ["Web Development", "React Native", "Responsive Design", "Full-Stack Development"],
            link: "#",
            provider: "IBM SkillBuild"
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Certifications</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Professional certifications and courses that have enhanced my technical skills and industry knowledge.
                        </p>
                    </motion.div>

                    {/* Certificates Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -10 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Certificate Header */}
                                <div className={`h-48 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-6 left-6">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                            <cert.icon size={32} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                                        <p className="text-white/90 text-sm">{cert.subtitle}</p>
                                        <div className="flex items-center mt-2 text-white/80">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="text-xs">{cert.period}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Certificate Content */}
                                <div className="p-6">
                                    {/* Provider */}
                                    <div className="flex items-center text-gray-500 mb-4">
                                        <Award size={16} className="mr-2" />
                                        <span className="text-sm font-medium">{cert.provider}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                        {cert.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3 text-sm">Skills Gained:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                                    >
                                        <ExternalLink size={18} />
                                        <span>View Certificate</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                                    <Award size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                I believe in continuous learning and staying updated with the latest technologies and industry trends.
                                These certifications represent my commitment to professional growth and technical excellence.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
