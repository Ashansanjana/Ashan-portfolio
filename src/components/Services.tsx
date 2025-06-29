import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'I create visually appealing and user-friendly web designs that enhance user experience and engagement.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Visual Design']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'I develop responsive and functional websites using the latest technologies and best practices.',
      features: ['Frontend Development', 'Backend Integration', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: Brain,
      title: 'AI Development',
      description: 'I build AI-powered applications that leverage machine learning to solve complex problems.',
      features: ['Machine Learning', 'Neural Networks', 'Data Analysis', 'Automation']
    }
  ];

  return (
    <section className="section-padding bg-slate-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;