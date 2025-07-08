import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 92 }
        
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "FAST API", level: 75 }
      ]
    },
    {
      title: "TOOLS & OTHERS",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 lg:py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-10 lg:mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800 rounded-none p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-shadow border-t-4 border-orange-500">
                <h3 className="text-xl lg:text-2xl font-black text-white mb-4 lg:mb-6 text-center tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-300 tracking-wide text-sm lg:text-base">{skill.name}</span>
                        <span className="text-xs lg:text-sm text-orange-400 font-black">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-none h-2 lg:h-3">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 lg:h-3 rounded-none transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;