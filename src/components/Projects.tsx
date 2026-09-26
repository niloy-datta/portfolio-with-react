import React from "react";
import { portfolio } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

// Projects Component: portfolio.ts-এর array থেকে map করে project কার্ড বানানো হচ্ছে।
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* array.map() দিয়ে প্রতিটা project-এর জন্য একটা card তৈরি করা হচ্ছে */}
          {portfolio.projects.map((project, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300 group">
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              {/* flex-grow দিয়ে ডেসক্রিপশন অংশটা ফাঁকা জায়গা পূরণ করবে, যাতে বাটনগুলো সব কার্ডে সমান নিচে থাকে */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack With Logos */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50 px-2.5 py-1 rounded-md">
                    <SkillIcon name={tech} size={13} className="shrink-0" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-slate-800 mt-auto">
                <a href={project.githubUrl} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">GitHub</a>
                <a href={project.liveUrl} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Live Demo</a>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
