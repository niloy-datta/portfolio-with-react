import React, { useState, useEffect } from "react";

// Navbar Component: Website-এর উপরে থাকে।
// Scroll করলে background color change হবে।
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listen করার জন্য useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // position sticky যাতে scroll করলেও উপরে আটকে থাকে।
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-bold text-slate-100 tracking-wider">
          <span className="text-blue-500">N</span>ILOY
        </a>

        {/* Desktop Menu - Mobile-এ hidden থাকবে (hidden md:flex) */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium">About</a>
          <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium">Experience</a>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="hidden md:inline-block bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 px-5 py-2 rounded-full text-sm font-medium transition-all">
          Let's Talk
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
