import React from "react";
// সব Component import করা হচ্ছে
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CurrentFocus from "./components/CurrentFocus";
import CurrentlyLearning from "./components/CurrentlyLearning";
import ResearchInterest from "./components/ResearchInterest";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    // text-slate-200 দিয়ে default text color হালকা ছাই/সাদা করা হয়েছে
    // selection:bg-blue-500/30 দিয়ে text select করলে নীল background আসবে
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-white font-sans">
      
      <Navbar />
      
      {/* <main> tag-এর ভেতরে সব মূল section থাকবে */}
      <main>
        <Hero />
        <About />
        
        {/* Viva-তে focus/interest নিয়ে কথা বলতে পারে, তাই এগুলো About-এর পরেই রাখা হয়েছে */}
        <CurrentFocus />
        <CurrentlyLearning />
        
        <Skills />
        <Projects />
        <Experience />
        <ResearchInterest />
        <Contact />
      </main>
      
      <Footer />

    </div>
  );
};

export default App;
