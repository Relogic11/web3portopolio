import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/mock';
import { Code, Cloud, Database, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2  
        delayChildren: 0.05,  // Reduced from 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced from y: 20
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,        // Reduced from 0.6
        ease: "easeOut",
      },
    },
  };

  const skillIcons = {
    "Cloud Platforms": Cloud,
    "Architecture Patterns": Code,
    "Programming Languages": Code,
    "Data & Storage": Database,
    "DevOps & Tools": Zap
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-black rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-black rounded-full animate-spin-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-black mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl font-bold text-black mb-4 font-display">
                  {personalInfo.tagline}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {personalInfo.shortBio}
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg border">
                    <div className="text-2xl font-bold text-black">8+</div>
                    <div className="text-sm text-gray-600 font-mono uppercase">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg border">
                    <div className="text-2xl font-bold text-black">100+</div>
                    <div className="text-sm text-gray-600 font-mono uppercase">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6 font-display">
                Technical Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillIcons[skillGroup.category] || Code;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex items-center mb-3">
                        <IconComponent size={20} className="mr-3 text-black" />
                        <h4 className="font-semibold text-black font-mono uppercase text-sm tracking-wider">
                          {skillGroup.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 ml-8">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-black text-white text-xs font-mono uppercase tracking-wide rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white font-mono uppercase text-sm tracking-wider rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Hire Me for Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;