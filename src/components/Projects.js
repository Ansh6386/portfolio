import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    ExternalLink,
    Github,
    Calendar,
    Users,
    Smartphone,
    MessageSquare,
    CreditCard,
    FileText
} from 'lucide-react';

const Projects = () => {
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const projects = [
        {
            title: "PayFlow",
            subtitle: "Paytm Clone - Frontend Developer",
            period: "Dec 2024 – Jan 2025",
            icon: CreditCard,
            color: "from-blue-500 to-blue-600",
            description: "Collaborated as Frontend Developer on a Paytm clone project. Created responsive and secure UIs using React Native and Tailwind CSS; ensured seamless cross-device usability.",
            techStack: ["HTML", "Tailwind CSS", "React Native", "Node.js", "Express.js", "MongoDB"],
            githubLink: "https://github.com/Ansh6386",
            features: [
                "Responsive UI Design",
                "Secure Payment Interface",
                "Cross-device Compatibility",
                "Modern React Native Architecture"
            ]
        },
        {
            title: "Blog Application",
            subtitle: "Modern Blog Platform",
            period: "Sept 2024 – Oct 2024",
            icon: FileText,
            color: "from-green-500 to-green-600",
            description: "Developed a modern blog application leveraging Appwrite for authentication and database management. Used Tailwind CSS for a responsive UI; allowed users to create, edit, delete, and view posts in real time.",
            techStack: ["HTML", "Tailwind CSS", "React Native", "Appwrite"],
            githubLink: "https://github.com/Ansh6386",
            features: [
                "Real-time CRUD Operations",
                "User Authentication",
                "Responsive Design",
                "Modern UI/UX"
            ]
        },
        {
            title: "Real Time Chat Application",
            subtitle: "Group Chat Platform",
            period: "Jun 2024 – Jul 2024",
            icon: MessageSquare,
            color: "from-purple-500 to-purple-600",
            description: "Built a group chat app with Firebase Authentication (login/signup), Firestore (messaging), and Realtime Database (online status). Enabled chat history sync and user blocking features.",
            techStack: ["HTML", "CSS", "React Native", "Firebase"],
            githubLink: "https://github.com/Ansh6386",
            features: [
                "Real-time Messaging",
                "User Authentication",
                "Online Status Tracking",
                "Chat History Sync",
                "User Blocking Feature"
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
                            <span className="gradient-text">Featured Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Here are some of my recent projects that showcase my skills and experience in full-stack development.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -10 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Project Header */}
                                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-6 left-6">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                            <project.icon size={32} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/90 text-sm">{project.subtitle}</p>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    {/* Period */}
                                    <div className="flex items-center text-gray-500 mb-4">
                                        <Calendar size={16} className="mr-2" />
                                        <span className="text-sm">{project.period}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3 flex-shrink-0"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                            <span>GitHub</span>
                                        </motion.a>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-16"
                    >
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
                            <p className="text-lg opacity-90 mb-6">
                                I'm always open to discussing new opportunities and interesting projects.
                            </p>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                <Users size={20} />
                                Let's Connect
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
