import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code,
    Database,
    Smartphone,
    Globe,
    Settings,
    GitBranch,
    Cloud,
    Server
} from 'lucide-react';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const skillCategories = [
        {
            title: "Languages",
            icon: Code,
            color: "from-blue-500 to-blue-600",
            skills: [
                { name: "C++", level: 90 },
                { name: "C", level: 85 },
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 88 },
                { name: "SQL", level: 80 }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: Globe,
            color: "from-green-500 to-green-600",
            skills: [
                { name: "React Native", level: 85 },
                { name: "Tailwind CSS", level: 92 }
            ]
        },
        {
            title: "Course Work",
            icon: Settings,
            color: "from-purple-500 to-purple-600",
            skills: [
                { name: "Operating System", level: 80 },
                { name: "Database Management System", level: 85 },
                { name: "OOPS", level: 90 }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Cloud,
            color: "from-orange-500 to-orange-600",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "MongoDB", level: 80 },
                { name: "Firebase", level: 85 },
                { name: "Appwrite", level: 75 }
            ]
        }
    ];

    const SkillBar = ({ skill, index }) => {
        const [barRef, barInView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

        return (
            <motion.div
                ref={barRef}
                initial={{ width: 0 }}
                animate={barInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="mb-4"
            >
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={barInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    />
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-20 bg-white">
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
                            <span className="gradient-text">Skills & Expertise</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive set of technical skills and tools that I use to build amazing applications.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Category Header */}
                                <div className="flex items-center mb-6">
                                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-4`}>
                                        <category.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBar
                                            key={skillIndex}
                                            skill={skill}
                                            index={skillIndex}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Competencies</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Problem Solving", "Algorithm Design", "Data Structures",
                                "System Design", "API Development", "Responsive Design",
                                "Version Control", "Agile Methodology", "Team Collaboration"
                            ].map((skill, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
