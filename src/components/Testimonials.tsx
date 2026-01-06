import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'John Smith',
            role: 'CEO, Tech Innovations',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'Ashan delivered an exceptional AI solution for our healthcare platform. His expertise in machine learning and attention to detail exceeded our expectations. The eye disease classification system works flawlessly!',
            project: 'Healthcare AI System'
        },
        {
            name: 'Sarah Johnson',
            role: 'Product Manager, StartupCo',
            image: 'https://i.pravatar.cc/150?img=45',
            rating: 5,
            text: 'Working with Ashan was a fantastic experience. He built our entire web platform from scratch with a beautiful UI and robust backend. His full-stack skills are truly impressive.',
            project: 'Web Platform Development'
        },
        {
            name: 'Michael Chen',
            role: 'CTO, IoT Solutions Ltd',
            image: 'https://i.pravatar.cc/150?img=33',
            rating: 5,
            text: 'The Smart Railway System Ashan developed for us revolutionized our operations. His IoT expertise combined with real-time tracking capabilities made this project a huge success.',
            project: 'IoT Railway System'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder, DesignHub',
            image: 'https://i.pravatar.cc/150?img=47',
            rating: 5,
            text: 'Ashan\'s UI/UX design skills are outstanding. He created a stunning, user-friendly interface for our application that our users absolutely love. Highly recommended!',
            project: 'Mobile App Design'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="section-padding bg-slate-900/50">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        What clients say about working with me
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Testimonial Card */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="glass rounded-3xl p-8 md:p-12"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 opacity-10">
                                    <Quote size={80} className="text-blue-400" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 italic">
                                        "{currentTestimonial.text}"
                                    </p>

                                    {/* Project Tag */}
                                    <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-6">
                                        <span className="text-sm text-blue-300">
                                            {currentTestimonial.project}
                                        </span>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50">
                                            <img
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                                            <p className="text-slate-400">{currentTestimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <motion.button
                                onClick={prevTestimonial}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300"
                            >
                                <ChevronLeft size={24} className="text-blue-400" />
                            </motion.button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        whileHover={{ scale: 1.2 }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-blue-400 w-8'
                                                : 'bg-slate-600 hover:bg-slate-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                onClick={nextTestimonial}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300"
                            >
                                <ChevronRight size={24} className="text-blue-400" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
