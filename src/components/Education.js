import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const educationData = [
        {
            degree: "B.Tech in Information Technology",
            institution: "KIET Group of Institutions",
            period: "Sept 2022 – Jun 2026",
            score: "Current CGPA: 8.4/10",
            icon: GraduationCap,
            color: "from-primary-500 to-secondary-500",
            description: "Pursuing undergraduate degree with focus on software development, algorithms, and system design."
        },
        {
            degree: "Intermediate",
            institution: "Lucknow Public School",
            period: "April 2020 – April 2021",
            score: "Percentage: 72%",
            icon: Award,
            color: "from-secondary-500 to-primary-500",
            description: "Completed higher secondary education with strong foundation in mathematics and science."
        },
        {
            degree: "High School",
            institution: "Lucknow Public School",
            period: "April 2018 – April 2019",
            score: "Percentage: 82%",
            icon: Calendar,
            color: "from-primary-500 to-secondary-500",
            description: "Completed secondary education with excellent academic performance."
        }
    ];

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
                            <span className="gradient-text">Education</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            My educational journey has been focused on building a strong foundation in technology and problem-solving.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

                        {/* Education Items */}
                        <div className="space-y-12">
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-10"></div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                        }`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                                        >
                                            {/* Icon */}
                                            <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${edu.color} text-white mb-4`}>
                                                <edu.icon size={24} />
                                            </div>

                                            {/* Degree */}
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {edu.degree}
                                            </h3>

                                            {/* Institution */}
                                            <h4 className="text-lg font-semibold text-primary-600 mb-3">
                                                {edu.institution}
                                            </h4>

                                            {/* Period */}
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <Calendar size={16} className="mr-2" />
                                                <span className="text-sm">{edu.period}</span>
                                            </div>

                                            {/* Score */}
                                            <div className="flex items-center text-gray-700 mb-4">
                                                <Award size={16} className="mr-2" />
                                                <span className="font-medium">{edu.score}</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievement Highlight */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                            <p className="text-lg opacity-90">
                                Felicitated for outstanding academic achievements in first year
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
