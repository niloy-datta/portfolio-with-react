import React from "react";
import { portfolio } from "../data/portfolio";

const CurrentFocus: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900/30 border-y border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <h3 className="text-2xl font-bold text-slate-200 mb-4">{portfolio.currentFocus.title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">
          {portfolio.currentFocus.description}
        </p>
      </div>
    </section>
  );
};

export default CurrentFocus;
