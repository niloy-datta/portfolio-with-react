import React from "react";
import { portfolio } from "../data/portfolio";

// About Component: আমার সম্পর্কে বিস্তারিত বর্ণনা।
const About: React.FC = () => {
  return (
    // padding y-axis (py-20) দিয়ে section-এর উপরে নিচে স্পেস তৈরি করা হয়েছে
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 inline-block relative">
          About Me
          {/* Title-এর নিচে একটা ছোট্ট blue underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full mt-4"></span>
        </h2>
        
        {/* About text - portfolio.ts থেকে আসছে */}
        <p className="text-lg text-slate-400 leading-relaxed mt-6">
          {portfolio.about}
        </p>

      </div>
    </section>
  );
};

export default About;
