"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import TextReveal from "./TextReveal";

const experiences = [
  {
    company: "Capgemini",
    role: "Software Engineer — Royal Mail Group (UK)",
    location: "Pune, India",
    date: "May 2024 – Present",
    current: true,
    bullets: [
      "Architected and deployed a **RAG-based enterprise chatbot** using **LangGraph + LangChain**, enabling teams to query Confluence documentation in natural language cutting knowledge lookup time by over 60%.",
      "Engineered end-to-end **document ingestion pipelines**  chunking, vector embedding (**FAISS**), and semantic retrieval processing 500+ pages of enterprise architecture documentation.",
      "Designed and delivered **15+ Azure integration solutions** connecting Service Bus, Event Hubs, IBM MQ, SharePoint, and Blob Storage using **Azure Functions (C#/.NET)** — all deployed to production with **zero escalations**.",
      "Developed **timer-trigger & HTTP-trigger Function Apps** for high-throughput message routing (IBM MQ ↔ Event Hub, SharePoint → Blob Storage), handling thousands of daily transactions.",
      "Built and secured **REST APIs in Azure API Management** with Basic Auth, JWT token-based authentication, and OAuth 2.0 flows for cross-platform service communication.",
      "Led the **migration of .NET 6 Function Apps to .NET 8**, improving runtime performance and long-term support; contributed to **Tivoli system upgrades** across Linux & AIX servers.",
      "Automated end-to-end **CI/CD pipelines using Azure DevOps** for integration services enabling zero-downtime deployments and faster release cycles.",
      "Self-directed learning of **Python, Generative AI, LangChain, LangGraph, FastAPI, and ML algorithms** in parallel with project responsibilities, transitioning skill set toward AI/ML engineering.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "C#", ".NET", "Azure Functions", "Azure API Management", "Azure DevOps", "IBM MQ", "Service Bus", "Event Hubs", "FastAPI"],
  },
];

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[var(--text-primary)]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative z-[2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-mono text-sm text-indigo-500 tracking-wide block"
            >
              &lt;experience&gt;
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
              <TextReveal>Work Experience</TextReveal>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-[900px] mx-auto">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={0.2}>
              <div className="flex gap-6 md:gap-8">
                {/* Animated timeline marker */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
                    />
                    <div
                      className="absolute -inset-1 rounded-full border-2 border-indigo-500/30"
                      style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
                    />
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-0.5 flex-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent mt-2 min-h-10"
                  />
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ borderColor: "rgba(99,102,241,0.4)", scale: 1.005 }}
                  className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 flex-1 mb-8 transition-all duration-300 hover:shadow-[0_16px_64px_rgba(0,0,0,0.4),0_0_50px_rgba(99,102,241,0.12)] relative overflow-hidden shimmer-effect"
                >
                  {/* Animated gradient accent on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />

                  <div className="mb-5">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-extrabold">{exp.company}</h3>
                      {exp.current && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wide"
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <span className="block text-base md:text-lg font-semibold text-violet-400">{exp.role}</span>
                      <span className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                        <FaCalendarAlt className="text-indigo-500" /> {exp.date}
                      </span>
                      <span className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                        <FaMapMarkerAlt className="text-indigo-500" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + 0.4, duration: 0.5 }}
                        className="relative pl-5 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.08 + 0.5, type: "spring" }}
                          className="absolute left-0 text-indigo-500 text-sm"
                        >
                          ▹
                        </motion.span>
                        {renderBold(bullet)}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + 0.8, type: "spring" }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(99,102,241,0.15)" }}
                        className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/15 rounded-full text-xs text-violet-400 font-mono font-medium cursor-default transition-all"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
