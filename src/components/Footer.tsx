import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 lg:py-8 border-t-4 border-orange-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 lg:mb-6">
            <h3 className="text-lg lg:text-2xl font-black mb-3 lg:mb-4 tracking-wide">LET'S STAY CONNECTED</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-2 lg:p-3 rounded-none hover:bg-gray-900 border border-gray-800 hover:border-orange-500"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-2 lg:p-3 rounded-none hover:bg-gray-900 border border-gray-800 hover:border-orange-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-gray-400 hover:text-orange-400 transition-colors p-2 lg:p-3 rounded-none hover:bg-gray-900 border border-gray-800 hover:border-orange-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 lg:pt-6">
            <p className="text-gray-400 flex items-center justify-center space-x-2 font-medium text-sm lg:text-base">
              <span>© {currentYear} MITHILESH KOROCHIKAR. MADE WITH</span>
              <Heart size={14} className="text-red-500" />
              <span>AND LOTS OF COFFEE.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;