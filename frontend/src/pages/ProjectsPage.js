import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { projects } from '../data/mock';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import clsx from 'clsx';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
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
      'dark-purple': 'bg-purple-800 text-white',
      'light-blue': 'bg-blue-200 text-black',
      'mid-red': 'bg-red-600 text-white',
      'mid-green': 'bg-green-500 text-white',
      'dark-orange': 'bg-orange-700 text-white',
      'dark-blue': 'bg-blue-800 text-white',
      'light-orange': 'bg-orange-200 text-black'
    };
    return colorMap[bgColor] || 'bg-gray-100 text-black';
  };



  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full animate-spin-slow delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6">
              All Projects
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Complete collection of client work and technical implementations. 
              Showcasing diverse technology solutions and development expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 } 
                  }}
                  className={clsx(
                    'project-card rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300',
                    getCardStyles(project.bgColor)
                  )}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-current rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-current rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold">
                          {project.title}
                        </h3>
                        <ExternalLink 
                          size={20} 
                          className="opacity-60" 
                        />
                      </div>
                      
                      <p className="text-base opacity-90 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Enhanced Details */}
                      <div className="space-y-3 text-sm opacity-80">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span><strong>Timeline:</strong> {project.timeline}</span>
                        </div>
                        <div>
                          <strong>Client:</strong> {project.clientType}
                        </div>
                        <div>
                          <strong>Impact:</strong> {project.impact}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-current/50 bg-current/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category, categoryIndex) => (
                          <span 
                            key={categoryIndex}
                            className="px-3 py-1 text-xs rounded-full bg-current text-white opacity-80"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-auto pt-4 border-t border-current/20">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold opacity-90">
                          Technical Implementation
                        </div>
                        <ArrowRight 
                          size={18} 
                          className="opacity-60" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                Complete Project Portfolio
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Each project showcases technical innovation, problem-solving approaches, and impact delivery.
                From AI/ML systems to blockchain solutions, exploring diverse technology implementations.
              </p>
              <p className="text-sm text-gray-500">
                Projects include technical architecture, challenges overcome, and measurable business outcomes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;