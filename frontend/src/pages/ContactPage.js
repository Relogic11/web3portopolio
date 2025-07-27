import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Briefcase } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Call for urgent matters'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Available for in-person meetings'
    }
  ];

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
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to architect your next breakthrough? Let's discuss how we can build something extraordinary together.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-display font-bold text-black mb-8">
                  Start a Conversation
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-600">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User size={20} className="absolute top-4 left-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail size={20} className="absolute top-4 left-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Email"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Briefcase size={20} className="absolute top-4 left-4 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company (Optional)"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                        />
                      </div>
                      
                      <div className="relative">
                        <MessageSquare size={20} className="absolute top-4 left-4 text-gray-400" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="Subject"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white py-4 px-8 rounded-lg font-mono uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-black mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        whileHover={{ scale: 1.02 }}
                        className="block bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors duration-200">
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-black mb-1">
                              {method.label}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {method.value}
                            </p>
                            <p className="text-sm text-gray-500">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Availability */}
                <div className="bg-black text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">
                    Current Availability
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span>Available for new projects</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I'm currently accepting new architecture consulting and development projects. 
                    Response time is typically within 24 hours.
                  </p>
                </div>

                {/* FAQ */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Quick FAQ
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black text-sm">What's your typical response time?</h4>
                      <p className="text-gray-600 text-sm mt-1">Within 24 hours for all inquiries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm">Do you work with startups?</h4>
                      <p className="text-gray-600 text-sm mt-1">Yes, I love helping early-stage companies build scalable foundations</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm">What's your minimum project size?</h4>
                      <p className="text-gray-600 text-sm mt-1">I take on projects ranging from 2-week sprints to multi-year initiatives</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;