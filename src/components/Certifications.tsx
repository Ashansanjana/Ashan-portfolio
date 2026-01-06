
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'TensorFlow Developer Certificate',
            organization: 'Google',
            date: '2024',
            skills: ['Deep Learning', 'Neural Networks', 'TensorFlow'],
            verified: true,
            link: '#'
        },
        {
            title: 'Full Stack Web Development',
            organization: 'Online Course',
            date: '2023',
            skills: ['React', 'Node.js', 'MongoDB', 'Express'],
            verified: true,
            link: '#'
        },
        {
            title: 'Machine Learning Specialization',
            organization: 'Coursera',
            date: '2023',
            skills: ['Python', 'scikit-learn', 'ML Algorithms'],
            verified: true,
            link: '#'
        },
        {
            title: 'UI/UX Design Professional',
            organization: 'Adobe',
            date: '2022',
            skills: ['Figma', 'Adobe XD', 'User Research'],
            verified: true,
            link: '#'
        },
        {
            title: 'AWS Cloud Practitioner',
            organization: 'Amazon Web Services',
            date: '2024',
            skills: ['Cloud Computing', 'AWS Services', 'DevOps'],
            verified: true,
            link: '#'
        },
        {
            title: 'Python for Data Science',
            organization: 'IBM',
            date: '2023',
            skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
            verified: true,
            link: '#'
        }
    ];

    return (
        <section id="certifications" className="section-padding">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Certifications & <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Professional certifications and recognitions that validate my expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Verified Badge */}
                            {cert.verified && (
                                <div className="absolute top-4 right-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center"
                                    >
                                        <CheckCircle size={18} className="text-green-400" />
                                    </motion.div>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Award size={32} className="text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {cert.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-3">
                                {cert.organization} • {cert.date}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {cert.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-slate-800/50 rounded-md text-xs text-slate-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <span>View Credential</span>
                                <ExternalLink size={14} />
                            </motion.a>

                            {/* Decorative gradient */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
