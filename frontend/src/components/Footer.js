import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/mock';
import { Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/20"
              style={{ 
                animationDelay: `${i * 0.05}s`,
                animation: 'pulse 3s infinite' 
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-display font-bold mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-300 font-mono uppercase text-sm tracking-wider">
                  {personalInfo.title}
                </p>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Building tomorrow's digital infrastructure through innovative systems architecture and strategic technical leadership.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
                      aria-label={link.label}
                    >
                      <IconComponent size={20} className="group-hover:text-pink-400 transition-colors duration-200" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200 group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="flex items-center">
                      {link.name}
                      <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail size={18} className="mr-3 text-pink-400" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Phone size={18} className="mr-3 text-pink-400" />
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <MapPin size={18} className="mr-3 text-pink-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-white text-black font-mono uppercase text-sm tracking-wider rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer text-center"
                >
                  Start a Project
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="font-mono uppercase tracking-wider">
                Built with React & FastAPI
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-gray-800 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-gray-800 opacity-30"></div>
    </footer>
  );
};

export default Footer;