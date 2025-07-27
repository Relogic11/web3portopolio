import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mock';
import { Code, Smartphone, ShoppingCart, Settings, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const serviceIcons = {
    "Code": Code,
    "Smartphone": Smartphone,
    "ShoppingCart": ShoppingCart,
    "Settings": Settings
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-black rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-black rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Freelance development services tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon] || Code;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent size={48} className="text-black" />
                  </div>

                  <div className="relative z-10">
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                      <IconComponent size={24} />
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-black">
                        {service.price}
                      </div>
                      <ArrowRight 
                        size={18} 
                        className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-display font-bold text-black text-center mb-12">
              How I Work
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs and project requirements" },
                { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
                { step: "03", title: "Development", desc: "Building your solution with regular updates" },
                { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-mono text-lg group-hover:bg-gray-800 transition-colors duration-300">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-black text-white rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your breakthrough idea and build something that pushes technological boundaries. Enterprise-grade solutions starting at $20,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-mono uppercase text-sm tracking-wider rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  Get Free Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white text-white font-mono uppercase text-sm tracking-wider rounded-full hover:bg-white hover:text-black transition-colors duration-200"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;