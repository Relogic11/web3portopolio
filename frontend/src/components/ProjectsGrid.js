import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/mock';
import { ExternalLink, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const ProjectsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const getCardStyles = (bgColor) => {
    const colorMap = {
      'light-pink': 'bg-pink-100 text-black',
      'mid-blue': 'bg-blue-600 text-white',
      'dark-green': 'bg-green-700 text-white',
      'mid-purple': 'bg-purple-500 text-white',
      'light-yellow': 'bg-yellow-200 text-black',
      'mid-orange': 'bg-orange-500 text-white',
    };
    return colorMap[bgColor] || 'bg-gray-100 text-black';
  };

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Architectural solutions that drive innovation and deliver exceptional results
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 } 
                }}
                className={clsx(
                  'project-card rounded-lg p-6 h-full flex flex-col justify-between cursor-pointer group overflow-hidden relative',
                  getCardStyles(project.bgColor)
                )}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-current rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-current rounded-full"></div>
                </div>

                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:underline transition-all duration-200">
                        {project.title}
                      </h3>
                      <ExternalLink 
                        size={18} 
                        className="opacity-60 group-hover:opacity-100 transition-opacity duration-200" 
                      />
                    </div>
                    
                    <p className="text-base opacity-80 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="text-sm opacity-70 mb-4">
                      <strong>Timeline:</strong> {project.timeline}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-current opacity-80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-mono opacity-60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold opacity-90">
                        {project.impact}
                      </div>
                      <ArrowRight 
                        size={16} 
                        className="opacity-60 group-hover:translate-x-1 transition-transform duration-200" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white text-white font-mono uppercase text-sm tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;