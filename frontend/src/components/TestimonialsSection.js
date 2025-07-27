import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Zap, Users, Target, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const achievements = [
    {
      icon: <Award size={40} />,
      title: "Technical Excellence",
      description: "Specialized in cutting-edge technologies like AI, blockchain, and IoT systems",
      highlight: "8+ Years Experience"
    },
    {
      icon: <Code size={40} />,
      title: "Innovation Focus", 
      description: "Built revolutionary systems from AI trading bots to quantum-safe messaging",
      highlight: "100+ Projects Completed"
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Driven",
      description: "Delivered high-performance solutions with optimal efficiency and reliability",
      highlight: "Industry Leading Results"
    }
  ];

  const skills = [
    "Artificial Intelligence", "Blockchain Development", "IoT Systems", 
    "Computer Vision", "Distributed Systems", "Cloud Architecture"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 text-[20rem] font-display font-bold text-black">
          ★
        </div>
        <div className="absolute bottom-1/4 right-10 text-[20rem] font-display font-bold text-black">
          ⚡
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-black mb-6">
              Why Choose Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with proven expertise in breakthrough technologies
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-black mb-6 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-center">
                  {achievement.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-black text-white text-sm font-mono uppercase rounded-full">
                    {achievement.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">
                Core Expertise
              </h3>
              <p className="text-gray-600">
                Technologies I specialize in to build innovative solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievement Stats - Without Money */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            {[
              { number: '8+', label: 'Years Experience' },
              { number: '100+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-mono uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;