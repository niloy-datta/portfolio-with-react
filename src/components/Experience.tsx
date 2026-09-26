import React from "react";
import { portfolio } from "../data/portfolio";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-1">07 | EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Experience
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-slate-700 before:to-transparent">
          
          {portfolio.experience.map((exp, index) => {
            const isPresent = exp.duration.toLowerCase().includes("present");

            return (
              <div 
                key={index} 
                className="relative flex items-start gap-8 md:gap-0 md:justify-between group"
              >
                
                {/* Timeline Node / Pulsing Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-md shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <span className={`w-3 h-3 rounded-full ${isPresent ? "bg-blue-500 shadow-sm shadow-blue-500/80 animate-pulse" : "bg-slate-500"}`}></span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 md:w-[calc(50%-2.5rem)] md:ml-auto p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Status / Duration Badge */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-blue-400 font-semibold text-sm tracking-wide">
                      {exp.company}
                    </span>
                    {isPresent ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                        {exp.duration}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                        {exp.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                    {exp.role}
                  </h3>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
