import React from "react";
import { portfolio } from "../data/portfolio";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href={portfolio.socials.github} className="text-slate-500 hover:text-slate-300 transition-colors">
            GitHub
          </a>
          <a href={portfolio.socials.linkedin} className="text-slate-500 hover:text-slate-300 transition-colors">
            LinkedIn
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
