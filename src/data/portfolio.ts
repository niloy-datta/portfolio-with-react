// এই file-এ website-এর সব editable information এক জায়গায় রাখা হয়েছে।
// ফলে নাম, skill, project বা experience change করতে component-এর design code edit করতে হবে না।

export const portfolio = {
  // Website-এর বিভিন্ন জায়গায় আমার নাম দেখানোর জন্য
  name: "Niloy Chandra Datta",

  // Hero section-এ আমার current role আর এক লাইনের intro
  role: "Aspiring Software Engineer",
  tagline: "I build fast, scalable, and responsive web applications.",

  // Social links - Navbar বা Footer-এ click করলে এই link-গুলোতে যাবে
  socials: {
    github: "https://github.com/niloy-datta",
    linkedin: "https://www.linkedin.com/in/niloy-d-9897473a8/",
    email: "niloy.datta.dev@gmail.com",
    location: "Tilagar, Sylhet",
    mapsUrl: "https://maps.app.goo.gl/NUU8nJGRc6JVbMVS9"
  },

  // About section-এর detail text
  about: "I'm a final-year CS student with a strong passion for web development and software engineering. I enjoy solving complex problems and turning ideas into clean, efficient code. My goal is to build applications that are not only functional but also provide a great user experience.",

  // Skills - category অনুযায়ী ভাগ করা। UI-তে এগুলো আলাদা আলাদা block হিসেবে দেখাবে।
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["FastAPI", "REST API", "MySQL", "DAO"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
  },

  // Projects - object-এর array. Map করে project card বানানো হবে।
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack admin dashboard for managing products, orders, and users with real-time analytics.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool allowing users to create, assign, and track daily tasks efficiently.",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Forecast Web App",
      description: "A simple web application fetching real-time weather data based on user location.",
      techStack: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ],

  // Experience বা Education history
  experience: [
    {
      role: "Business Development",
      company: "SHL Group China",
      duration: "Present",
      description: "Contributing to international business operations through supplier coordination, strategic sourcing, commercial research, negotiation support, and cross-border communication."
    }
  ],

  // Current focus area - Currently learning, focus, research interest
  currentFocus: {
    title: "Currently Focusing On",
    description: "Deepening my knowledge in modern full-stack development, specifically Next.js and system design principles."
  },
  
  currentlyLearning: [
    "Next.js App Router",
    "TypeScript Advanced Concepts",
    "Docker & Containerization"
  ],

  researchInterest: "Human-Computer Interaction (HCI) and the impact of AI-driven UI design on user productivity."
};
