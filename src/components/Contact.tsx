import React from "react";
import { portfolio } from "../data/portfolio";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href={`mailto:${portfolio.socials.email}`} 
          className="inline-block bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-white/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
