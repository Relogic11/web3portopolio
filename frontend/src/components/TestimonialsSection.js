import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 text-[20rem] font-display font-bold text-black">
          "
        </div>
        <div className="absolute bottom-1/4 right-10 text-[20rem] font-display font-bold text-black rotate-180">
          "
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-black mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What industry leaders say about working with me
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </div>

          {/* Testimonial Display */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-gray-200">
                <Quote size={48} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Testimonial Content */}
                  <div className="mb-8">
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-light italic">
                      {current.content}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black">
                        {current.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {current.role}
                      </p>
                      <p className="text-gray-500 text-xs font-mono uppercase">
                        {current.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex ? 'bg-black' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '99%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-mono uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;