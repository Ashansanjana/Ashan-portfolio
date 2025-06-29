import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Palette, Download } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expertise in both frontend and backend technologies'
    },
    {
      icon: Cpu,
      title: 'AI Development',
      description: 'Building intelligent solutions with machine learning'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden glass">
                <img
                  src="https://i.imgur.com/j91GCS9.jpeg"
                  alt="Ashan Sanajana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-xl text-blue-400 font-semibold mb-6">
                Full Stack and AI Developer
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I am an undergraduate Full Stack and AI Developer with a strong passion for 
                technology and innovation. I specialize in building responsive websites and 
                developing AI-powered solutions. My goal is to combine design, functionality, 
                and intelligence to deliver user-friendly digital experiences that solve real-world 
                problems and drive progress.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl text-center"
                  >
                    <Icon size={32} className="text-blue-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className="btn-primary">
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;