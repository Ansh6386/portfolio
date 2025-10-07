import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    ExternalLink,
    MessageCircle
} from 'lucide-react';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "anshshukla352@gmail.com",
            link: "mailto:anshshukla352@gmail.com",
            color: "from-red-500 to-red-600"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 6386723905",
            link: "tel:+916386723905",
            color: "from-green-500 to-green-600"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Lucknow, India",
            link: "#",
            color: "from-blue-500 to-blue-600"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            name: "GitHub",
            url: "https://github.com/Ansh6386",
            color: "from-gray-800 to-gray-900"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://linkedin.com/in/ansh-shukla-56720925a/",
            color: "from-blue-600 to-blue-700"
        },
        {
            icon: ExternalLink,
            name: "LeetCode",
            url: "https://leetcode.com/u/ansh-0011/",
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-20 bg-white">
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
                            <span className="gradient-text">Get In Touch</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            I'm always interested in new opportunities and interesting projects. Let's connect and discuss how we can work together.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>

                            {/* Contact Cards */}
                            <div className="space-y-6 mb-8">
                                {contactInfo.map((contact, index) => (
                                    <motion.a
                                        key={index}
                                        href={contact.link}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <contact.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{contact.title}</h4>
                                            <p className="text-gray-600">{contact.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                                            aria-label={social.name}
                                        >
                                            <social.icon size={24} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-white/20 rounded-full">
                                    <MessageCircle size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
                            <p className="text-lg opacity-90 mb-6">
                                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                            </p>
                            <motion.a
                                href="mailto:anshshukla352@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                <Mail size={20} />
                                Start a Conversation
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
