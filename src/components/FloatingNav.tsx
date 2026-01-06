import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const FloatingNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'About', href: '#about', icon: User },
        { name: 'Skills', href: '#skills', icon: Code },
        { name: 'Projects', href: '#projects', icon: Briefcase },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="fixed bottom-8 right-8 z-40"
                    >
                        {/* Expanded Navigation */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute bottom-16 right-0 space-y-2 mb-2"
                                >
                                    {navItems.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ delay: index * 0.05 }}
                                                onClick={() => setIsExpanded(false)}
                                                className="flex items-center gap-3 px-4 py-3 glass rounded-full hover:bg-blue-600/20 transition-all duration-300 group"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Icon size={18} className="text-blue-400" />
                                                <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                                            </motion.a>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Toggle Button */}
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            onMouseEnter={() => setIsExpanded(true)}
                            onMouseLeave={() => setIsExpanded(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                        >
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronUp size={24} className="text-white" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingNav;
