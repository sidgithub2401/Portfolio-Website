"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaBrain, FaRobot, FaDatabase, FaCloud, FaServer } from "react-icons/fa";
import TextReveal from "./TextReveal";

const skillCategories = [
  {
    icon: <FaCode />,
    title: "Programming",
    skills: ["Python", "SQL", "C#"],
    color: "indigo",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    skills: ["Scikit-learn", "Keras", "PyTorch", "SHAP"],
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <FaRobot />,
    title: "Generative AI",
    skills: ["LangChain", "LangGraph", "OpenAI API", "Prompt Engineering"],
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaDatabase />,
    title: "Data Processing",
    skills: ["Pandas", "NumPy", "Feature Engineering", "EDA"],
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Deployment",
    skills: ["Azure Functions", "Azure API Mgmt", "Service Bus", "AWS Lambda", "S3", "EC2", "Bedrock", "FastAPI", "REST APIs"],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FaServer />,
    title: "Databases & DevOps",
    skills: ["MySQL", "MongoDB", "FAISS", "Pinecone", "Git", "GitHub", "Azure DevOps"],
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
  },
];

function SkillCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7 h-full relative overflow-hidden transition-all duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)]"
    >
      {/* Mouse-following glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99, 102, 241, 0.06) 0%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Animated top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left`} />

      <motion.div
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`w-12 h-12 bg-${cat.color}-500/10 rounded-lg flex items-center justify-center text-${cat.color}-500 text-lg mb-5`}
        style={{
          backgroundColor: `color-mix(in srgb, var(--accent-1) 10%, transparent)`,
        }}
      >
        <span className="text-indigo-500">{cat.icon}</span>
      </motion.div>

      <h3 className="text-base font-bold mb-5 relative z-10">{cat.title}</h3>

      <div className="flex flex-wrap gap-2 relative z-10">
        {cat.skills.map((skill, j) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + j * 0.04 + 0.3, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.12,
              backgroundColor: "rgba(99,102,241,0.2)",
              color: "#a78bfa",
              borderColor: "rgba(99,102,241,0.35)",
              y: -2,
            }}
            className="px-3.5 py-1.5 bg-indigo-500/[0.06] border border-indigo-500/[0.1] rounded-full text-sm text-[var(--text-secondary)] font-medium transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative z-[2]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-indigo-500 tracking-wide block"
          >
            &lt;skills&gt;
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            <TextReveal>Technical Skills</TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
