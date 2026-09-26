import React from "react";
import { portfolio } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950/60 border-t border-slate-800/40 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Side: Header & Subtitle */}
          <div className="max-w-md">
            <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2">
              08 | CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Interested in software development, learning opportunities and meaningful collaboration.
            </p>
          </div>

          {/* Right Side: Contact Channels & Send Message Button */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
            
            {/* Email Card */}
            <a 
              href={`mailto:${portfolio.socials.email}`}
              className="flex items-center gap-3.5 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-3.5 rounded-2xl transition-all duration-200 group w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-105 transition-all">
                <FaEnvelope size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-slate-400">Email</span>
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {portfolio.socials.email}
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-3.5 rounded-2xl transition-all duration-200 group w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-105 transition-all">
                <FaGithub size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-slate-400">GitHub</span>
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  github.com/niloy-datta
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-3.5 rounded-2xl transition-all duration-200 group w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-105 transition-all">
                <FaLinkedin size={18} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-slate-400">LinkedIn</span>
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  linkedin.com/in/niloy-datta
                </span>
              </div>
            </a>

            {/* Send Message Button */}
            <a 
              href={`mailto:${portfolio.socials.email}?subject=Let's%20Connect`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 w-full sm:w-auto text-sm"
            >
              <span>Send Message</span>
              <FaArrowRight size={14} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
