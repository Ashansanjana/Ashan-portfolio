
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', level: 75, color: 'from-cyan-400 to-blue-500' },
    { name: 'Python', level: 90, color: 'from-green-400 to-blue-500' },
    { name: 'Java', level: 85, color: 'from-red-500 to-orange-500' },
    { name: 'TensorFlow', level: 85, color: 'from-orange-600 to-yellow-500' },
    { name: 'Machine Learning', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
    { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' },
  ];

  const professionalSkills = [
    { name: 'Creativity', level: 80 },
    { name: 'Communication', level: 90 },
    { name: 'Leadership', level: 75 },
    { name: 'Teamwork', level: 85 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Professional Skills</h3>

            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(51, 65, 85)"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${skill.level}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-400">{skill.level}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;