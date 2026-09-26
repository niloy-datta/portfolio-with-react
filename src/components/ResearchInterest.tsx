import React from "react";
import { portfolio } from "../data/portfolio";

const ResearchInterest: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-6">Research Interest</h2>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden">
          {/* Decorative blur blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          
          <p className="text-lg text-slate-300 relative z-10 leading-relaxed italic">
            "{portfolio.researchInterest}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterest;
