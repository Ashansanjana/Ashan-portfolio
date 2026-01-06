import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'AI Software Developer',
            company: 'Freelance',
            location: 'Remote',
            period: '2023 - Present',
            description: 'Developing AI-powered applications and machine learning solutions for clients worldwide, specializing in computer vision, NLP, and intelligent automation.',
            achievements: [
                'Built eye disease classification system with 95% accuracy using CNN',
                'Developed multiple chatbot solutions using LLMs and GPT APIs',
                'Created automated workflows using Python and AI models'
            ],
            technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'Docker']
        },
        {
            role: 'Full Stack Developer',
            company: 'Personal Projects',
            location: 'Sri Lanka',
            period: '2022 - Present',
            description: 'Building modern web applications with focus on healthcare, IoT, and smart systems. Expertise in MERN stack and real-time applications.',
            achievements: [
                'Developed Smart Hospital Management System with 5000+ lines of code',
                'Created IoT-based railway tracking system using ESP32 and Firebase',
                'Built responsive web applications with React and Node.js'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase']
        },
        {
            role: 'UI/UX Designer',
            company: 'Various Clients',
            location: 'Remote',
            period: '2021 - Present',
            description: 'Designing intuitive and visually appealing user interfaces with focus on user experience and modern design principles.',
            achievements: [
                'Designed 15+ web applications with modern UI/UX',
                'Created branding and design systems for multiple clients',
                'Implemented responsive designs following best practices'
            ],
            technologies: ['Figma', 'Adobe XD', 'TailwindCSS', 'Framer Motion']
        }
    ];

    return (
        <section id="experience" className="section-padding bg-slate-900/50">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Professional journey and key milestones in my development career
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-slate-950 z-10"></div>

                                {/* Content */}
                                <div className="flex-1">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.role}</h3>
                                                <div className="flex items-center gap-2 text-slate-300 mb-2">
                                                    <Briefcase size={16} />
                                                    <span className="font-medium">{exp.company}</span>
                                                </div>
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                                <Briefcase size={24} className="text-white" />
                                            </div>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-blue-300 border border-blue-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
