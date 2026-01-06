
import { motion } from 'framer-motion';
import { Github, Code, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multimodal Eye Disease Classification System with Integrated Chatbot',
      description: 'Designed a multimodal deep learning pipeline combining OCT image analysis using Vision CNN and symptom-based text data for accurate disease classification with an integrated chatbot.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
      technologies: ['Deep Learning', 'Transformers', 'NLP', 'React.js', 'FastAPI'],
      github: 'https://github.com/Ashansanjana/Eye-Disease-Classification-With-Integrated-Chatbot',
      icon: Brain,
      category: 'AI Development',
      date: 'Jan 2025 - Present',
      achievements: [
        'Multimodal pipeline with OCT image + symptom text analysis',
        'Interactive chatbot for real-time patient guidance',
        'Responsive React.js frontend with FastAPI backend'
      ]
    },
    {
      title: 'Smart Hospital Web Development - Hospital Management System',
      description: 'Developed a comprehensive hospital management system facilitating patient-doctor channeling, prescription issuance, and administrative control using the MERN stack.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/Ashansanjana/HealthHub_Smart-Hospital',
      icon: Code,
      category: 'Web Development',
      date: '2024',
      achievements: [
        'Full-stack hospital management with patient-doctor channeling',
        'Responsive MERN stack application',
        'Secure admin controls for resource management'
      ]
    },
    {
      title: 'Smart Waste Classification System - Real-Time Waste Detection App',
      description: 'Built a real-time waste classification web app using YOLOv8 to detect and classify waste from camera input with instant predictions and visualization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: ['Flask', 'YOLOv8', 'OpenCV', 'TensorFlow', 'HTML/CSS/JS'],
      github: 'https://github.com/Ashansanjana/Image-Processing-Based-Smart-Waste-Management-System',
      icon: Brain,
      category: 'Computer Vision',
      date: 'Aug 2024 - Sep 2024',
      achievements: [
        'Real-time waste detection using YOLOv8',
        'Live video streaming with Flask backend',
        'Responsive UI with waste category suggestions'
      ]
    },
    {
      title: 'AI Legal Document Explainer - Summarizer & Analyzer',
      description: 'Developed a web application to upload legal documents and generate AI-powered simplified explanations with highlighted clauses, risks, and context-aware Q&A support.',
      image: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg',
      technologies: ['FastAPI', 'Python', 'React.js', 'Google Gemini API', 'LangChain', 'PyMuPDF'],
      github: 'https://github.com/Ashansanjana/AI-Legal-Document-Explainer',
      icon: Brain,
      category: 'AI Development',
      date: 'Jul 2024 - Aug 2024',
      achievements: [
        'AI-powered legal document summarization',
        'Key clause extraction with risk highlighting',
        'Context-aware Q&A with Gemini API integration'
      ]
    },
    {
      title: 'AI Travel Guide - Intelligent Travel Assistant',
      description: 'Built an AI-driven travel assistant to help users plan trips, discover destinations, and receive personalized travel recommendations with real-time AI-powered assistance.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      technologies: ['CrewAI', 'Streamlit', 'Python', 'LangChain', 'Gemini API'],
      github: 'https://github.com/Ashansanjana/Travel-Planning-Assistance-Using-Crew-AI',
      icon: Brain,
      category: 'AI Development',
      date: 'Jul 2024 - Aug 2024',
      achievements: [
        'AI-powered trip planning with personalized recommendations',
        'City reports and travel itineraries generation',
        'Interactive chat with LangChain and Gemini API'
      ]
    },
    {
      title: 'Chat with Multiple PDFs using a RAG-based System',
      description: 'Built a Streamlit-based app that lets users chat with multiple PDFs using natural language, powered by LangChain\'s RAG architecture with Chroma DB for fast retrieval.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      technologies: ['Python', 'LangChain', 'Chroma', 'Gemini 2.5-pro', 'Streamlit'],
      github: 'https://github.com/Ashansanjana/chatwith-multiple-pdf-using-RAG-based-system',
      icon: Brain,
      category: 'AI Development',
      date: 'Jul 2024',
      achievements: [
        'Multi-PDF chat with natural language queries',
        'RAG architecture with Chroma DB for contextual search',
        'Gemini 2.5-pro integration for document-grounded responses'
      ]
    },
    {
      title: 'Chronic Kidney Disease Prediction Using ML',
      description: 'Developed machine learning models in Python to predict CKD with 90%+ accuracy using feature selection and classification techniques with comprehensive EDA and visualizations.',
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/Ashansanjana/Chronical-Kidney-Disease-Prediction-Using-ML',
      icon: Brain,
      category: 'Machine Learning',
      date: 'Jun 2024 - Aug 2024',
      achievements: [
        'ML models with 90%+ accuracy for CKD prediction',
        'EDA and visualizations for health indicator analysis',
        'Flask application for accessible health insights'
      ]
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

                  {/* Date */}
                  <p className="text-blue-400 text-sm mb-3 font-medium">
                    {project.date}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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