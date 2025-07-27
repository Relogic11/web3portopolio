import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { personalInfo, experience, skills } from '../data/mock';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full animate-spin-reverse"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Architect of scalable systems, leader of technical innovation, and passionate problem solver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Biography Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-black mb-8">
                  My Story
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {personalInfo.bio}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    My passion lies in transforming complex business challenges into elegant technical solutions. 
                    I believe in the power of well-architected systems to drive innovation, efficiency, and growth.
                  </p>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={20} className="mr-3 text-black" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={20} className="mr-3 text-black" />
                    <span>8+ Years Experience</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-black mb-8">
                  Expertise Areas
                </h2>
                
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="border-l-4 border-black pl-6"
                    >
                      <h3 className="text-lg font-bold text-black mb-3">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="mb-20">
              <h2 className="text-4xl font-display font-bold text-black text-center mb-12">
                Professional Journey
              </h2>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="absolute top-8 right-8 text-gray-400">
                      <Calendar size={24} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold text-black mb-2">
                          {job.role}
                        </h3>
                        <p className="text-lg text-gray-600 mb-2">
                          {job.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={16} className="mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-black mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start text-gray-700"
                            >
                              <Award size={16} className="mr-2 mt-1 text-black flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="text-center bg-black text-white rounded-3xl p-12"
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can architect your next breakthrough solution together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-mono uppercase text-sm tracking-wider rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;