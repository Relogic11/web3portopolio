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
          <div className="max-w-7xl mx-auto">
            {/* Projects Content - Article Style */}
            <div className="max-w-4xl mx-auto space-y-16">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100"
                >
                  {/* Project Header */}
                  <header className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((category, categoryIndex) => (
                        <span 
                          key={categoryIndex}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
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
                  </header>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {project.id === 1 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          In the dynamic world of cryptocurrency trading, we introduce the <strong>{project.title}</strong>—an autonomous trading system designed to optimize profitability and efficiency. This project was built over {project.timeline} for {project.clientType} and has demonstrated significant impact, successfully {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          The core of this system lies in advanced <strong>reinforcement learning</strong>, enabling the bot to continuously learn and adapt to ever-changing market conditions. Its capabilities are enhanced by deep real-time market analysis, leveraging WebSocket for instantaneous data feeds.
                        </p>
                        
                        <p>
                          One of the bot's key features is its <strong>multi-exchange arbitrage strategy</strong>. This allows it to automatically detect and exploit price differences of crypto assets across various exchanges, maximizing profit opportunities.
                        </p>
                        
                        <p>
                          This ecosystem bot represents a significant advancement in crypto trading, combining artificial intelligence with execution speed for superior performance.
                        </p>
                      </>
                    )}
                    
                    {project.id === 2 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          In the era of rapid urbanization, <strong>{project.title}</strong> emerges as a comprehensive solution for modern city challenges. Developed over {project.timeline} for {project.clientType}, this system successfully achieved {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          This IoT infrastructure integrates over 200 sensors distributed throughout the city to monitor traffic flow, air quality, noise levels, and pedestrian density. Each sensor is equipped with edge computing capabilities for real-time data processing.
                        </p>
                        
                        <p>
                          The system utilizes <strong>predictive analytics</strong> for traffic optimization and environmental alerts. Integrated machine learning algorithms can predict traffic patterns and automatically provide alternative route recommendations.
                        </p>
                        
                        <p>
                          With LoRaWAN architecture and MQTT protocols, this system ensures efficient and reliable communication between sensors, creating a responsive and sustainable smart city ecosystem.
                        </p>
                      </>
                    )}

                    {project.id === 3 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          In the digital era that prioritizes privacy, <strong>{project.title}</strong> offers a new paradigm in identity verification. Built over {project.timeline} for {project.clientType}, this platform has successfully served {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          This platform utilizes revolutionary <strong>zero-knowledge proofs (zk-SNARKs)</strong> technology, enabling identity verification without revealing sensitive personal information. Each identity is stored decentralized with military-grade encryption.
                        </p>
                        
                        <p>
                          The platform's flagship feature is <strong>cross-chain identity portability</strong>, allowing users to use the same identity across various blockchains and DeFi protocols. An integrated reputation scoring system provides added value for the decentralized finance ecosystem.
                        </p>
                        
                        <p>
                          With an architecture compatible with Polygon and IPFS integration for decentralized data storage, this platform bridges user privacy and blockchain transparency.
                        </p>
                      </>
                    )}

                    {project.id === 4 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          Modern manufacturing industry requires unmatched precision. <strong>{project.title}</strong> emerges as an innovative solution developed over {project.timeline} for {project.clientType}, successfully achieving {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          This system integrates <strong>state-of-the-art computer vision</strong> technology with YOLO models and PyTorch for real-time defect detection. Every product passing through the production line is analyzed at sub-100ms speed, ensuring quality without reducing efficiency.
                        </p>
                        
                        <p>
                          The implementation of <strong>edge AI processing</strong> allows the system to operate independently without internet connectivity dependency. TensorRT optimization ensures model inference runs optimally on edge device hardware.
                        </p>
                        
                        <p>
                          With an intuitive React dashboard and MQTT communication for automated reporting, this system transforms traditional quality control processes into fully automated and data-driven operations.
                        </p>
                      </>
                    )}

                    {project.id > 4 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          {project.description}. Proyek ini dikembangkan selama {project.timeline} untuk {project.clientType} dan berhasil mencapai {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          {project.details}
                        </p>
                        
                        <p>
                          Implementasi teknologi terdepan dalam proyek ini mendemonstrasikan kemampuan kami dalam menghadirkan solusi inovatif yang tidak hanya memenuhi kebutuhan klien, tetapi juga membuka peluang bisnis baru di masa depan.
                        </p>
                      </>
                    )}
                  </div>

                  {/* Technologies Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Technology foundation built on robust architecture:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-mono text-sm font-medium text-gray-700">{tech}</span>
                          <span className="ml-auto text-xs text-gray-500">Core Technology</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Info Section */}
            <div 
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;