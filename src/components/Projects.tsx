"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaBrain, FaRobot, FaCogs, FaFilm, FaCar, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TextReveal from "./TextReveal";

const projects = [
  {
    icon: <FaBrain />,
    title: "Customer Churn Prediction",
    category: "Financial Analytics Use Case",
    date: "Apr 2025",
    description:
      "ANN-based churn prediction model using TensorFlow/Keras achieving 87% accuracy. Features EDA, feature engineering, SHAP explainability, and REST API deployment for batch inference.",
    highlights: [
      "87% accuracy with optimized F1-score",
      "SHAP for explainable AI insights",
      "ROC-AUC & Precision-Recall evaluation",
    ],
    tech: ["TensorFlow", "Keras", "SHAP", "REST API", "Python"],
    gradient: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: <FaRobot />,
    title: "RAG-Based LLM Chatbot",
    category: "LangGraph Multi-Step Reasoning",
    date: "2026",
    description:
      "Stateful conversational AI using LangGraph for multi-step reasoning and tool orchestration with graph-based execution flows and conversation memory for multi-turn context.",
    highlights: [
      "Dynamic routing between LLM, tools & memory",
      "Structured output parsing & function-calling",
      "Modular prompt template architecture",
    ],
    tech: ["LangGraph", "LangChain", "OpenAI API", "FAISS", "Python"],
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: <FaCogs />,
    title: "LLM Workflow Automation",
    category: "AI-Driven Task Execution",
    date: "Jun 2025",
    description:
      "LLM-powered automation pipelines for email parsing, response generation, and decision workflows. Integrated OpenAI APIs with external systems for structured task execution.",
    highlights: [
      "End-to-end AI-driven communication",
      "Prompt templates & output validation",
      "Reduced manual effort significantly",
    ],
    tech: ["OpenAI API", "Python", "LangChain", "Automation"],
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: <FaFilm />,
    title: "Recommendation System",
    category: "NLP-Powered Content Matching",
    date: "Jun 2025",
    description:
      "Content-based recommendation engine using TF-IDF vectorization and cosine similarity with NLP preprocessing pipeline for personalized top-N suggestions.",
    highlights: [
      "TF-IDF vectorization & cosine similarity",
      "NLP tokenization & stemming pipeline",
      "Precision@K performance evaluation",
    ],
    tech: ["TF-IDF", "NLP", "Scikit-learn", "Python"],
    gradient: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: <FaCar />,
    title: "Number Plate Detection",
    category: "IEEE Published Research",
    date: "Mar 2023",
    description:
      "Real-time detection system using YOLOv8 and EasyOCR achieving high-accuracy character recognition on live video feeds. Published in IEEE Journal.",
    highlights: [
      "Real-time video feed processing",
      "YOLOv8 object detection",
      "IEEE published research paper",
    ],
    tech: ["YOLOv8", "EasyOCR", "Computer Vision", "Python"],
    link: "https://ieeexplore.ieee.org/document/10307420",
    gradient: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group"
    >
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)]">
        {/* Mouse-following glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Animated top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

        {/* Background gradient glow */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Header */}
        <div className="flex justify-between items-start mb-5 relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-13 h-13 ${project.iconBg} rounded-xl flex items-center justify-center ${project.iconColor} text-xl`}
          >
            {project.icon}
          </motion.div>
          <div className="flex items-center gap-3">
            {project.link && (
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-indigo-500 transition-colors"
                aria-label="View project"
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.date}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold mb-1 group-hover:text-violet-400 transition-colors duration-300 relative z-10">
          {project.title}
        </h3>
        <p className="text-sm text-cyan-400 font-medium mb-4 relative z-10">{project.category}</p>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 relative z-10">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5 flex-1 relative z-10">
          {project.highlights.map((h, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + j * 0.08 + 0.3 }}
              className="relative pl-5 text-sm text-[var(--text-secondary)]"
            >
              <span className="absolute left-0 text-emerald-400 text-xs">✦</span>
              {h}
            </motion.li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {project.tech.map((t, j) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + j * 0.05 + 0.5 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(99,102,241,0.15)" }}
              className="font-mono text-xs text-[var(--text-muted)] px-2.5 py-1 bg-white/[0.03] rounded border border-transparent hover:border-indigo-500/20 transition-all cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative z-[2]">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-indigo-500 tracking-wide block"
          >
            &lt;projects&gt;
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            <TextReveal>Featured Projects</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[var(--text-secondary)] text-lg mt-4"
          >
            AI/ML & Generative AI solutions built with cutting-edge technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
