import React, { useState } from "react";
import { portfolio } from "../data/portfolio";
import { FiMail, FiMapPin, FiExternalLink } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${fullName || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nSender: ${fullName}\nEmail: ${emailAddress}`
    );
    window.location.href = `mailto:${portfolio.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/70 border-t border-slate-800/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12">
          <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
            08 | CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            Interested in software development, learning opportunities and meaningful collaboration.
          </p>
        </div>

        {/* Main Grid: Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
          
          {/* Left Card: Send a message Form */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-7 md:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle glow border hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Send a message
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-6">
                Opens your email app with the message filled in.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer mt-6"
                >
                  <IoPaperPlaneOutline size={20} className="stroke-[2.5]" />
                  <span>OPEN IN EMAIL APP</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Card: Google Map / Sylhet Base */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px] flex flex-col">
            
            {/* Top-left Sylhet Base badge */}
            <div className="absolute top-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl p-3.5 shadow-2xl max-w-[260px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse"></span>
                  <span className="font-bold text-white text-sm">Sylhet Base</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Block+D,+Shahjalal+Upashahar,+Sylhet,+Bangladesh"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Open in Google Maps"
                >
                  <FiExternalLink size={14} />
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Block D, Sylhet, Bangladesh
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                No reviews
              </p>
            </div>

            {/* Stylized Dark Map Embed */}
            <div className="w-full h-full relative overflow-hidden flex-1 min-h-[380px]">
              <iframe
                title="Sylhet Base Location"
                src="https://maps.google.com/maps?q=Shahjalal+Upashahar+Block+D,+Sylhet,+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 min-h-[380px] pointer-events-auto filter invert-[90%] hue-rotate-180 contrast-[90%] brightness-[85%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Pulsing Pin Overlay */}
              <div className="absolute top-[58%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-cyan-400/40 animate-ping absolute"></span>
                  <span className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-lg relative z-10"></span>
                </div>
                <div className="bg-slate-950/95 border border-slate-700/80 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg shadow-xl mt-1.5 whitespace-nowrap">
                  Sylhet Base
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Email Badge */}
          <a
            href={`mailto:${portfolio.socials.email}`}
            className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-4 rounded-2xl transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
              <FiMail size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-slate-400 font-medium">Email</span>
              <span className="block text-sm font-semibold text-slate-200 group-hover:text-white truncate transition-colors">
                {portfolio.socials.email}
              </span>
            </div>
          </a>

          {/* Location Badge */}
          <div className="flex items-center gap-3.5 bg-slate-900/80 border border-slate-800 px-5 py-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <FiMapPin size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-slate-400 font-medium">Location</span>
              <span className="block text-sm font-semibold text-slate-200 truncate">
                {portfolio.socials.location}
              </span>
            </div>
          </div>

          {/* GitHub Badge */}
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-4 rounded-2xl transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform shrink-0">
              <FaGithub size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-slate-400 font-medium">GitHub</span>
              <span className="block text-sm font-semibold text-slate-200 group-hover:text-white truncate transition-colors">
                github.com/niloy-datta
              </span>
            </div>
          </a>

          {/* LinkedIn Badge */}
          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 px-5 py-4 rounded-2xl transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
              <FaLinkedin size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-slate-400 font-medium">LinkedIn</span>
              <span className="block text-sm font-semibold text-slate-200 group-hover:text-white truncate transition-colors">
                linkedin.com/in/niloy-d
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
