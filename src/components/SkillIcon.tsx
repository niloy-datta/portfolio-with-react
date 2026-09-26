import React from "react";
// বিভিন্ন icon library থেকে official tech logo-গুলো import করা হচ্ছে
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiFirebase,
  SiPython,
  SiSpringboot,
  SiCplusplus,
  SiC,
  SiFastapi,
  SiIntellijidea,
  SiWebstorm,
  SiAndroidstudio
} from "react-icons/si";
import { FaCss3Alt, FaJava, FaCode } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbDatabase } from "react-icons/tb";

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

// এই component-টি skill-এর নাম গ্রহণ করে এবং সেটির জন্য সঠিক Official Logo ও Brand Color প্রদান করে
const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-4 h-4", size = 18 }) => {
  const normalized = name.toLowerCase().trim();

  // ১. Frontend Technologies
  if (normalized.includes("html")) {
    return <SiHtml5 size={size} className={className} style={{ color: "#E34F26" }} title={name} />;
  }
  if (normalized.includes("css")) {
    return <FaCss3Alt size={size} className={className} style={{ color: "#1572B6" }} title={name} />;
  }
  if (normalized.includes("javascript") || normalized === "js") {
    return <SiJavascript size={size} className={className} style={{ color: "#F7DF1E" }} title={name} />;
  }
  if (normalized.includes("react")) {
    return <SiReact size={size} className={className} style={{ color: "#61DAFB" }} title={name} />;
  }
  if (normalized.includes("tailwind")) {
    return <SiTailwindcss size={size} className={className} style={{ color: "#06B6D4" }} title={name} />;
  }
  if (normalized.includes("typescript") || normalized === "ts") {
    return <SiTypescript size={size} className={className} style={{ color: "#3178C6" }} title={name} />;
  }
  if (normalized.includes("next")) {
    return <SiNextdotjs size={size} className={className} style={{ color: "#FFFFFF" }} title={name} />;
  }

  // ২. Backend Technologies & Databases
  if (normalized.includes("node")) {
    return <SiNodedotjs size={size} className={className} style={{ color: "#5FA04E" }} title={name} />;
  }
  if (normalized.includes("express")) {
    return <SiExpress size={size} className={className} style={{ color: "#CBD5E1" }} title={name} />;
  }
  if (normalized.includes("mongo")) {
    return <SiMongodb size={size} className={className} style={{ color: "#47A248" }} title={name} />;
  }
  if (normalized.includes("mysql") || normalized.includes("sql")) {
    return <SiMysql size={size} className={className} style={{ color: "#4479A1" }} title={name} />;
  }
  if (normalized.includes("java") && !normalized.includes("javascript")) {
    return <FaJava size={size} className={className} style={{ color: "#ED8B00" }} title={name} />;
  }
  if (normalized.includes("spring")) {
    return <SiSpringboot size={size} className={className} style={{ color: "#6DB33F" }} title={name} />;
  }
  if (normalized.includes("python")) {
    return <SiPython size={size} className={className} style={{ color: "#3776AB" }} title={name} />;
  }
  if (normalized.includes("fastapi")) {
    return <SiFastapi size={size} className={className} style={{ color: "#009688" }} title={name} />;
  }
  if (normalized.includes("api") || normalized.includes("rest")) {
    return <TbApi size={size} className={className} style={{ color: "#38BDF8" }} title={name} />;
  }
  if (normalized === "dao" || normalized.includes("dao")) {
    return <TbDatabase size={size} className={className} style={{ color: "#A78BFA" }} title={name} />;
  }
  if (normalized === "c++" || normalized.includes("cpp")) {
    return <SiCplusplus size={size} className={className} style={{ color: "#00599C" }} title={name} />;
  }
  if (normalized === "c") {
    return <SiC size={size} className={className} style={{ color: "#A8B9CC" }} title={name} />;
  }
  if (normalized.includes("firebase")) {
    return <SiFirebase size={size} className={className} style={{ color: "#FFCA28" }} title={name} />;
  }
  if (normalized.includes("docker")) {
    return <SiDocker size={size} className={className} style={{ color: "#2496ED" }} title={name} />;
  }

  // ৩. Tools & IDEs
  if (normalized === "git") {
    return <SiGit size={size} className={className} style={{ color: "#F05032" }} title={name} />;
  }
  if (normalized.includes("github")) {
    return <SiGithub size={size} className={className} style={{ color: "#F1F5F9" }} title={name} />;
  }
  if (normalized.includes("vscode") || normalized.includes("vs code")) {
    return <VscVscode size={size} className={className} style={{ color: "#007ACC" }} title={name} />;
  }
  if (normalized.includes("postman")) {
    return <SiPostman size={size} className={className} style={{ color: "#FF6C37" }} title={name} />;
  }
  if (normalized.includes("figma")) {
    return <SiFigma size={size} className={className} style={{ color: "#F24E1E" }} title={name} />;
  }
  if (normalized.includes("canva")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <title>{name}</title>
        <circle cx="12" cy="12" r="11" fill="#00C4CC"/>
        <path d="M14.5 15C13.5 16 12 16.3 10.7 15.8C9.5 15.3 8.7 14 8.8 12.7C8.9 11.1 10 9.8 11.5 9.2C12.8 8.7 14.3 9.1 15.1 10.2L14 11.1C13.5 10.3 12.4 10 11.6 10.3C10.6 10.7 10 11.7 9.9 12.7C9.8 13.6 10.3 14.4 11.1 14.7C11.9 15 12.9 14.8 13.6 14.1L14.5 15Z" fill="white"/>
      </svg>
    );
  }
  if (normalized.includes("android")) {
    return <SiAndroidstudio size={size} className={className} style={{ color: "#3DDC84" }} title={name} />;
  }
  if (normalized.includes("intellij")) {
    return <SiIntellijidea size={size} className={className} style={{ color: "#FE315D" }} title={name} />;
  }
  if (normalized.includes("webstorm")) {
    return <SiWebstorm size={size} className={className} style={{ color: "#00CDD7" }} title={name} />;
  }

  // Default fallback icon
  return <FaCode size={size} className={`text-slate-400 ${className}`} title={name} />;
};

export default SkillIcon;
