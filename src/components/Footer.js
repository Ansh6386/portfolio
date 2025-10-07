import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    ExternalLink,
    Mail,
    Phone,
    Heart,
    Code
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            name: "GitHub",
            url: "https://github.com/Ansh6386",
            color: "hover:text-gray-800"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://linkedin.com/in/ansh-shukla-56720925a/",
            color: "hover:text-blue-600"
        },
        {
            icon: ExternalLink,
            name: "LeetCode",
            url: "https://leetcode.com/u/ansh-0011/",
            color: "hover:text-yellow-600"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-4">Ansh Shukla</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Full Stack Developer passionate about creating innovative solutions and solving complex problems.
                                Always eager to learn and contribute to meaningful projects.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-3 bg-gray-800 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <motion.a
                                            href={link.href}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:anshshukla352@gmail.com"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <Mail size={18} className="mr-3 text-primary-500" />
                                    <span>anshshukla352@gmail.com</span>
                                </motion.a>
                                <motion.a
                                    href="tel:+916386723905"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <Phone size={18} className="mr-3 text-primary-500" />
                                    <span>+91 6386723905</span>
                                </motion.a>
                                <div className="flex items-center text-gray-400">
                                    <ExternalLink size={18} className="mr-3 text-primary-500" />
                                    <span>Lucknow, India</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                            <Code size={16} className="mr-2" />
                            <span>Made with</span>
                            <Heart size={16} className="mx-2 text-red-500" />
                            <span>by Ansh Shukla</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Ansh Shukla. All rights reserved.
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
