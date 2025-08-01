import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/mock';
import { homePageSkills } from '../data/modules/homePageSkills';
import { Code, Cloud, Database, Zap, Users, ArrowRight } from 'lucide-react';
import TechIcon from './TechIcon';

const AboutSection = () => {
  // Debug: Check if data is loaded
  console.log('AboutSection: personalInfo loaded:', personalInfo);
  console.log('AboutSection: homePageSkills loaded:', homePageSkills);
  console.log('AboutSection: personalInfo.shortBio:', personalInfo?.shortBio);
  
  // Early return if data not loaded
  if (!personalInfo) {
    console.error('personalInfo not loaded!');
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
          <p className="text-gray-600">Loading about information...</p>
        </div>
      </section>
    );
  }
  
  if (!homePageSkills || homePageSkills.length === 0) {
    console.error('homePageSkills not loaded!');
  }
  
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
    "Core Languages": "computer-svgrepo-com",
    "Key Frameworks": "flask-svgrepo-com", 
    "Blockchain Focus": "bitcoin-svgrepo-com",
    "AI & Machine Learning": "machine-learning",
    "Infrastructure": "agile"
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
          viewport={{ once: true, amount: 0.2 }}
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
                  {personalInfo?.tagline || "Loading tagline..."}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {personalInfo?.shortBio || "Loading bio information..."}
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
                Core Expertise
              </h3>
              
              <div className="space-y-4">
                {homePageSkills && homePageSkills.length > 0 ? (
                  homePageSkills.map((skillGroup, index) => {
                    console.log(`Rendering skill group ${index + 1}:`, skillGroup.category);
                    
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group"
                      >
                      <div className="flex items-center mb-3">
                        <TechIcon name={skillIcons[skillGroup.category]} size={20} className="mr-3 text-black" />
                        <h4 className="font-semibold text-black font-mono uppercase text-sm tracking-wider">
                          {skillGroup.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 ml-8">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-white text-black text-xs font-mono uppercase tracking-wide rounded-full cursor-pointer hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
                          >
                            <TechIcon name={skill} size={14} />
                            <span>{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })
                ) : (
                  <div className="text-center text-gray-500 p-8">
                    <p>Loading core skills...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 relative z-50">
            <a 
              href="/about" 
              className="inline-block px-8 py-4 bg-black text-white font-mono uppercase text-sm tracking-wider rounded-full hover:bg-gray-800 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 relative z-50"
              style={{ pointerEvents: 'auto', zIndex: 9999 }}
            >
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;