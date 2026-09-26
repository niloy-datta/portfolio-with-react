import React from "react";
// Data file import করা হচ্ছে যাতে dynamic data দেখানো যায়
import { portfolio } from "../data/portfolio";

// Hero Component: এটা website-এর সবচেয়ে প্রথম অংশ। 
// এখানে আমার ছবি, নাম আর short introduction থাকবে।
const Hero: React.FC = () => {
  return (
    // Section-টা পুরো screen (min-h-screen) নিবে, content মাঝখানে থাকবে (flex, justify-center, items-center)
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      
      {/* Container-এর width limit করা এবং responsive design-এর জন্য flex-col (mobile) ও md:flex-row (desktop) ব্যবহার করা হয়েছে */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 font-medium tracking-wider mb-2">HI THERE, I'M</p>
          
          {/* নামটা অনেক বড় (text-5xl), bold এবং gradient color-এর হবে */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
            {portfolio.name}
          </h1>
          
          {/* role এবং tagline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            {portfolio.role}
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed">
            {portfolio.tagline}
          </p>
          
          {/* Call to Action Button */}
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right Side: Portrait Image */}
        <div className="flex-1 flex justify-center mt-12 md:mt-0 relative group">
          {/* Image-এর পিছনে একটা glow effect (gradient blob) দেওয়া হয়েছে */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          
          {/* Image Container: border-radius, shadow, hover effect */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            {/* public/profile.jpg file browser-এ দেখানো হচ্ছে */}
            <img 
              src="/profile.jpg" 
              alt={portfolio.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
