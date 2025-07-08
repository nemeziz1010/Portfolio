import React from 'react';
import { ArrowDown, Download, Code, Palette } from 'lucide-react';


const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content (appears first on mobile) */}
            <div className="order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-black uppercase tracking-wider rounded-full mb-4">
                  Available for Work
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Mithilesh
                </span>
                <br />
                <span className="text-white">
                  Korochikar
                </span>
              </h1>
              
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="flex items-center gap-2 text-orange-400">
                  <Code size={18} />
                  <span className="font-bold text-sm uppercase tracking-wide">Full-Stack</span>
                </div>
                {/* <div className="w-2 h-2 bg-orange-400 rounded-full"></div> */}
                <div className="flex items-center gap-2 text-red-400">
                  {/* <Palette size={18} /> */}
                  <span className="font-bold text-sm uppercase tracking-wide"></span>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 leading-relaxed font-medium max-w-lg">
                Crafting exceptional digital experiences with cutting-edge technology and bold design solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-none font-black uppercase tracking-wider hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center text-sm lg:text-base"
                >
                  VIEW PROJECTS
                </button>
                <a
                  href="https://drive.google.com/file/d/1bM5qNxVspbkHbj0GpEvSBQJGW-mSYR54/view?usp=sharing"
                  className="border-2 border-orange-500 text-orange-400 px-8 lg:px-10 py-3 lg:py-4 rounded-none font-black uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-sm lg:text-base"
                >
                  <Download size={18} />
                  RESUME
                </a>
              </div>
            </div>
            
            {/* Right side - Image (appears second on mobile, smaller size) */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Simple shadow effect instead of background frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-xl transform scale-110"></div>
                
                <img
                  src="../../images/profile.JPG"
                  alt="Alex Developer"
                  className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-80 lg:h-96 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-gray-800"
                />
                
                {/* Experience badge - smaller on mobile */}
                <div className="absolute -bottom-3 -right-3 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-orange-400 to-red-400 text-white p-2 lg:p-4">
                  <span className="font-black text-sm lg:text-lg"></span>
                  <br />
                  <span className="text-xs lg:text-sm font-bold"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 lg:mt-20">
            <button 
              onClick={() => scrollToSection('#about')}
              className="animate-bounce hover:text-orange-300 transition-colors duration-200"
            >
              <ArrowDown className="mx-auto text-orange-400" size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;