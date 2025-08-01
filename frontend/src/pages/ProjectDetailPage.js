import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TechIcon from '../components/TechIcon';
import { projects } from '../data/mock';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import clsx from 'clsx';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-pink-400 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Project Color */}
      <section 
        className={clsx(
          'pt-32 pb-16 relative overflow-hidden',
          getCardStyles(project.bgColor)
        )}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="border border-current/20 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link 
              to="/"
              className="inline-flex items-center mb-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span className="font-mono uppercase text-sm tracking-wider">Back to Portfolio</span>
            </Link>

            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span className="font-mono text-sm">{project.timeline}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-display font-bold text-black mb-6">
                    Project Overview
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.details}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This project represents a significant advancement in systems architecture, 
                      demonstrating innovative approaches to scalability, performance, and reliability. 
                      The solution was designed with future growth in mind, incorporating modern 
                      best practices and cutting-edge technologies.
                    </p>
                  </div>
                </motion.div>

                {/* Technical Architecture */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Technical Architecture
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Core Technologies</h4>
                      <div className="space-y-3">
                        {project.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center group">
                            <div className="w-8 h-8 flex items-center justify-center mr-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                              <TechIcon name={tech} size={20} />
                            </div>
                            <span className="text-gray-700 font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {project.categories.map((category, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            <span className="text-gray-700">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black text-white rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold mb-6">Project Impact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <TrendingUp size={20} className="mr-3 text-pink-400" />
                      <div>
                        <div className="font-bold">Impact</div>
                        <div className="text-sm text-gray-300">{project.impact}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar size={20} className="mr-3 text-pink-400" />
                      <div>
                        <div className="font-bold">Timeline</div>
                        <div className="text-sm text-gray-300">{project.timeline}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users size={20} className="mr-3 text-pink-400" />
                      <div>
                        <div className="font-bold">Team Size</div>
                        <div className="text-sm text-gray-300">5-12 Engineers</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 rounded-full font-mono uppercase text-sm tracking-wider">
                    <ExternalLink size={16} className="inline mr-2" />
                    View Live Project
                  </button>
                </motion.div>

                {/* Related Projects */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-black mb-6">Related Projects</h3>
                  
                  <div className="space-y-4">
                    {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/project/${relatedProject.id}`}
                        className="block p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200 group"
                      >
                        <h4 className="font-semibold text-black group-hover:text-pink-600 transition-colors duration-200">
                          {relatedProject.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-2">
                          {relatedProject.description.substring(0, 80)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;