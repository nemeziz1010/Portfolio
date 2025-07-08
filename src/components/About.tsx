import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-orange-400" size={24} />,
      title: "CLEAN CODE",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Palette className="text-red-400" size={24} />,
      title: "DESIGN THINKING",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "PERFORMANCE",
      description: "Optimizing for speed and user satisfaction"
    }
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-10 lg:mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 font-medium">
                I'm a passionate full-stack developer with over 5 years of experience building impactful digital products. I specialize in transforming complex challenges into clean, intuitive, and user-focused solutions.
              </p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 font-medium">
                When I’m not writing code, I enjoy exploring emerging technologies, contributing to open-source communities, and sharing insights with fellow developers.
              </p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-medium">
                Driven by curiosity and collaboration, I believe continuous learning is the key to crafting exceptional digital experiences.
              </p>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 lg:p-6 rounded-none bg-gray-800 hover:bg-gray-700 transition-colors border-l-4 border-orange-500">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-2 tracking-wide text-sm lg:text-base">{item.title}</h3>
                    <p className="text-gray-300 font-medium text-sm lg:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;