import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Target, Heart } from 'lucide-react';

const About = () => {
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

    const stats = [
        { number: "1000+", label: "DSA Problems Solved", icon: Code },
        { number: "1636", label: "LeetCode Rating", icon: Target },
        { number: "8.4", label: "Current CGPA", icon: Coffee },
        { number: "3+", label: "Years of Experience", icon: Heart },
    ];

    return (
        <section id="about" className="py-20 bg-white">
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
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            I'm a passionate Full Stack Developer with a strong foundation in problem-solving and
                            a love for creating innovative solutions. Currently pursuing B.Tech in Information Technology
                            with a focus on modern web technologies and mobile development.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                                        <stat.icon size={24} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                What I Do
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">
                                        Develop responsive and interactive web applications using modern frameworks
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">
                                        Build mobile applications with React Native for cross-platform compatibility
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">
                                        Solve complex algorithmic problems and optimize code performance
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">
                                        Collaborate with teams to deliver high-quality software solutions
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                My Approach
                            </h3>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500">
                                    <h4 className="font-semibold text-gray-800 mb-2">Clean Code</h4>
                                    <p className="text-gray-600">
                                        Writing maintainable, scalable, and well-documented code that follows best practices.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-secondary-500">
                                    <h4 className="font-semibold text-gray-800 mb-2">User-Centric Design</h4>
                                    <p className="text-gray-600">
                                        Creating intuitive and engaging user experiences that solve real-world problems.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500">
                                    <h4 className="font-semibold text-gray-800 mb-2">Continuous Learning</h4>
                                    <p className="text-gray-600">
                                        Staying updated with the latest technologies and industry trends.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
