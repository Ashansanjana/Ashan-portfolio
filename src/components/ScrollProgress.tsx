import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', calculateScrollProgress);
        calculateScrollProgress();

        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 z-50 origin-left"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
        />
    );
};

export default ScrollProgress;
