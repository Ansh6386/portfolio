import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Trophy,
    Target,
    Award,
    Star,
    Code,
    TrendingUp,
    Medal
} from 'lucide-react';

const Achievements = () => {
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

    const achievements = [
        {
            title: "1000+ DSA Problems Solved",
            description: "Solved complex algorithmic problems across multiple platforms including LeetCode, GFG, and CodeChef",
            icon: Code,
            color: "from-blue-500 to-blue-600",
            stats: "1000+",
            platforms: ["LeetCode", "GFG", "CodeChef"]
        },
        {
            title: "LeetCode Rating Achievement",
            description: "Achieved a competitive rating of 1636 on LeetCode, demonstrating strong problem-solving skills",
            icon: TrendingUp,
            color: "from-green-500 to-green-600",
            stats: "1636",
            platforms: ["LeetCode"]
        },
        {
            title: "Academic Excellence",
            description: "Felicitated for outstanding academic achievements in first year of engineering",
            icon: Award,
            color: "from-purple-500 to-purple-600",
            stats: "Top Performer",
            platforms: ["KIET Group of Institutions"]
        }
    ];

    const stats = [
        { number: "1000+", label: "Problems Solved", icon: Code },
        { number: "1636", label: "LeetCode Rating", icon: Target },
        { number: "8.4", label: "Current CGPA", icon: Star },
        { number: "3+", label: "Years Coding", icon: Trophy }
    ];

    return (
        <section id="achievements" className="py-20 bg-white">
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
                            <span className="gradient-text">Achievements & Milestones</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            My journey of continuous learning and growth, marked by significant achievements and milestones.
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

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                            >
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-6`}>
                                    <achievement.icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {achievement.title}
                                </h3>

                                {/* Stats */}
                                <div className="text-3xl font-bold gradient-text mb-4">
                                    {achievement.stats}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {achievement.description}
                                </p>

                                {/* Platforms */}
                                <div className="flex flex-wrap gap-2">
                                    {achievement.platforms.map((platform, platformIndex) => (
                                        <span
                                            key={platformIndex}
                                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress Timeline */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Code size={24} />
                                </div>
                                <h4 className="font-semibold mb-2">Started Coding</h4>
                                <p className="text-sm opacity-90">Began my programming journey with C++ and problem solving</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target size={24} />
                                </div>
                                <h4 className="font-semibold mb-2">Competitive Programming</h4>
                                <p className="text-sm opacity-90">Started solving problems on LeetCode, GFG, and CodeChef</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Medal size={24} />
                                </div>
                                <h4 className="font-semibold mb-2">Achieved Milestones</h4>
                                <p className="text-sm opacity-90">Reached 1000+ problems solved and 1636 LeetCode rating</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
