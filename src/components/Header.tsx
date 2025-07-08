import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent tracking-wider hover:scale-105 transition-transform duration-200"
            >
              MITHILESH
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 font-black text-sm tracking-wider"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 ml-8">
                <a href="https://github.com/nemeziz1010" className="text-gray-300 hover:text-orange-400 transition-colors p-2 hover:bg-gray-800 rounded">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mithilesh-korochikar-413285229/" className="text-gray-300 hover:text-orange-400 transition-colors p-2 hover:bg-gray-800 rounded">
                  <Linkedin size={20} />
                </a>
                <a href="mitukorochikar10@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors p-2 hover:bg-gray-800 rounded">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 p-2 z-60 relative transition-colors duration-200 hover:text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`relative bg-gray-900/90 backdrop-blur-lg h-full w-full flex flex-col transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header space */}
          <div className="h-20"></div>
          
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col justify-center px-6">
            <div className="space-y-6 text-center">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full py-4 text-2xl font-black text-gray-300 hover:text-orange-400 transition-all duration-300 tracking-wider border-b border-gray-700/50 hover:border-orange-500/50 hover:bg-gray-800/30 rounded-lg transform ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Social Links */}
            <div className={`flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-gray-700/50 transition-all duration-500 ${
              isMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '400ms' : '0ms'
            }}>
              <a 
                href="https://github.com/nemeziz1010" 
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 p-3 hover:bg-gray-800/50 rounded-full hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mithilesh-korochikar-413285229/" 
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 p-3 hover:bg-gray-800/50 rounded-full hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mitukorochikar10@gmail.com" 
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 p-3 hover:bg-gray-800/50 rounded-full hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Footer */}
          <div className={`p-6 text-center transition-all duration-500 ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: isMenuOpen ? '500ms' : '0ms'
          }}>
            <p className="text-gray-500 text-sm font-medium">
              © 2025 Mithilesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;