import React from "react";
import { portfolio } from "../data/portfolio";
// SkillIcon component import করা হয়েছে যাতে প্রতিটা skill-এর official logo দেখানো যায়
import SkillIcon from "./SkillIcon";

// Skills Component: আমার জানা technology-গুলো official logo সহ list আকারে দেখাবে
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 text-center">
          My Skills
        </h2>

        {/* Grid layout: Desktop-এ ৩ কলাম, Tablet-এ ২ কলাম, Mobile-এ ১ কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Frontend Skills Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-sm shadow-blue-500/50"></span>
              Frontend
            </h3>
            {/* flex-wrap দিয়ে logo ও skill tag-গুলোকে পাশাপাশি সাজানো হয়েছে */}
            <div className="flex flex-wrap gap-3">
              {portfolio.skills.frontend.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 text-slate-200 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
                >
                  {/* Technology Logo */}
                  <SkillIcon name={skill} size={18} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolio.skills.backend.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 text-slate-200 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
                >
                  {/* Technology Logo */}
                  <SkillIcon name={skill} size={18} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-sm shadow-purple-500/50"></span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolio.skills.tools.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 text-slate-200 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
                >
                  {/* Technology Logo */}
                  <SkillIcon name={skill} size={18} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
