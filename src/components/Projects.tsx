import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Hospital Web Development',
      description: 'A comprehensive hospital management system with patient-doctor channeling, prescriptions, and admin control built using modern web technologies.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Ashansanjana/HealthHub_Smart-Hospital',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Eye Disease Classification AI Chatbot',
      description: 'A generative AI-powered chatbot for early eye disease diagnosis using CNN for image input and LLMs for symptom reasoning.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Flask'],
      github: 'https://github.com/Ashansanjana/Eye-Disease-Classification-With-Integrated-Chatbot',
      icon: Brain,
      category: 'AI Development'
    },
    {
      title: 'Smart Railway System',
      description: 'An IoT-based real-time GPS tracking and control system for railway crossings using ESP32 and Firebase for data management.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      technologies: ['ESP32', 'Firebase', 'IoT', 'React'],
      github: 'https://github.com/Ashansanjana/Smart-Railway-Gate-Control-System-with-GPS-Tracking',
      icon: Database,
      category: 'IoT Development'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-md rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800/50 rounded-md text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button - Only GitHub */}
                  <div className="flex">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;