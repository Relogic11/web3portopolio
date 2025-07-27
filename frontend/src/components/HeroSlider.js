import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/mock';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const currentProject = heroSlides[currentSlide];

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden transition-all duration-700"
      style={{
        backgroundColor: currentProject.backgroundColor,
        color: currentProject.textColor
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 animate-pulse delay-1000"></div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8">
          {/* Left Column - Project Info */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 opacity-90">
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl font-normal">
                  {currentProject.project.title}
                </h2>
                <p className="text-lg lg:text-xl font-normal opacity-80">
                  {currentProject.project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {currentProject.project.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border opacity-90 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      borderColor: 'currentColor',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Brand Display */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="text-center">
              <h1 className="font-display uppercase text-[8rem] md:text-[12rem] lg:text-[14rem] leading-none font-black opacity-80 animate-pulse">
                Allen
              </h1>
              <p className="text-lg lg:text-xl font-mono uppercase tracking-widest opacity-60">
                Tech Innovator
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 opacity-60">
        <div className="w-px h-16 bg-current animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSlider;