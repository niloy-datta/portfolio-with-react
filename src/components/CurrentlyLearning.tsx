import React from "react";
import { portfolio } from "../data/portfolio";
import SkillIcon from "./SkillIcon";

const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-8">Currently Learning</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {portfolio.currentlyLearning.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/60 px-6 py-3.5 rounded-2xl text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 shadow-md hover:-translate-y-0.5 group"
            >
              <SkillIcon name={item} size={22} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
