import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// 1. Import your images at the top of the file
import stockfolioImg from '../../images/Stockfolio.jpg';
import nsutthonImg from '../../images/NSUTTHON.jpg';
import dentalAiImg from '../../images/DentalAi.png';
import healthImg from '../../images/Health.png';

const Projects = () => {
  const projects = [
    {
      title: "StockFolio",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      // 2. Use the imported image variables here
      image: stockfolioImg,
      technologies: ["React", "Node.js", "MongoDB", "Kite Connect API"],
      liveUrl: "https://stock-folio-nine.vercel.app/",
      githubUrl: "https://github.com/nemeziz1010/StockFolio"
    },
    {
      title: "NSUTTHON Website",
      description: "Developed a full-stack event platform for 1300+ users and 400+ teams with real-time updates, secure registrations, admin panel for score management, and automated emails.",
      image: nsutthonImg,
      technologies: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "https://nsutthon-24.vercel.app/?day=1",
      githubUrl: "https://github.com/nemeziz1010/NSUTTHON24"
    },
    {
      title: " Dental- Ai",
      description: "Built a full-stack app using Roboflow for dental X-ray analysis and LLMs for auto-generating diagnostic reports. Dockerized for seamless deployment and consistency.",
      image: dentalAiImg,
      technologies: ["FAST API", "React", "OpenAI API","RoboFlow API"],
      liveUrl: "#",
      githubUrl: "https://github.com/nemeziz1010/dental-ai-analyzer"
    },
    {
      title: "Health Record Management",
      description: "Developed a secure, scalable EHR platform with JWT auth, patient-doctor portals, medical record management, and appointment scheduling, deployed on AWS.",
      image: healthImg,
      technologies: ["Django", "React", "Celery","Redis"],
      liveUrl: "#",
      githubUrl: "https://github.com/nemeziz1010/Healthcare-Management-API"
    }
  ];

  return (
    <section id="projects" className="py-12 lg:py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-10 lg:mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-none shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow group border-l-4 border-orange-500">
                <div className="relative overflow-hidden">
                  <img
                    // No changes needed here, as project.image now holds the correct URL
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300 -mb-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-black text-white mb-2 lg:mb-3 tracking-wide">{project.title}</h3>
                  <p className="text-gray-300 mb-3 lg:mb-4 leading-relaxed font-medium text-sm lg:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 lg:px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs lg:text-sm rounded-none font-bold tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors font-bold tracking-wide text-sm lg:text-base"
                    >
                      <ExternalLink size={14} />
                      <span>LIVE DEMO</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors font-bold tracking-wide text-sm lg:text-base"
                    >
                      <Github size={14} />
                      <span>CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;