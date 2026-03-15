"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload } from "react-icons/fa";
import { useTypewriter } from "../hooks/useTypewriter";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const words = [
  "AI/ML Solutions",
  "LangGraph Agents",
  "RAG Systems",
  "Cloud-Native APIs",
  "GenAI Applications",
  "Production ML Pipelines",
];

const codeLines = [
  { text: "class ", delay: 0 },
  { text: "AIEngineer", delay: 0 },
  { text: ":", delay: 0 },
];

const socialLinks = [
  { href: "https://github.com/sidgithub2401", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/siddhant-sharma-b945881bb", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "mailto:sidsharma2401@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function Hero() {
  const typed = useTypewriter(words);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 pt-28 pb-20 max-w-[1200px] mx-auto relative z-[2]"
    >
      {/* Aurora Orbs — very subtle ambient glows */}
      <div className="aurora-orb w-[350px] h-[350px] bg-indigo-600/40 top-[-8%] left-[-8%]" style={{ animation: "aurora-1 15s ease-in-out infinite" }} />
      <div className="aurora-orb w-[300px] h-[300px] bg-violet-600/30 bottom-[10%] right-[-5%]" style={{ animation: "aurora-2 18s ease-in-out infinite" }} />
      <div className="aurora-orb w-[200px] h-[200px] bg-cyan-500/20 top-[40%] left-[30%]" style={{ animation: "aurora-1 20s ease-in-out infinite reverse" }} />

      {/* Left Content */}
      <motion.div
        style={{ y: yParallax, opacity: opacityFade, scale }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 font-medium mb-6 shimmer-effect">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            Available for opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1>
            <span className="block text-base md:text-lg font-medium text-[var(--text-secondary)] mb-2">
              Hi, I&apos;m
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-4">
              <TextReveal delay={0.4}>Siddhant</TextReveal>{" "}
              <span className="gradient-text-animated">
                <TextReveal delay={0.7}>Sharma</TextReveal>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center text-lg md:text-xl mb-6 h-[2em]"
        >
          <span className="text-[var(--text-secondary)]">I build </span>
          <span className="text-cyan-400 font-semibold ml-1.5">{typed}</span>
          <span className="text-indigo-500 font-light ml-0.5 typewriter-cursor">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 max-w-[520px]"
        >
          AI/ML Engineer crafting intelligent systems — from production-ready ML pipelines
          to RAG-based LLM applications and cloud-native AI solutions on Azure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex gap-4 mb-10 flex-col sm:flex-row w-full sm:w-auto"
        >
          <MagneticButton as="a" href="#projects" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-400 text-white font-semibold rounded-xl shadow-[0_4px_24px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.5)] transition-all duration-300">
            View My Work <FaArrowRight />
          </MagneticButton>
          <MagneticButton as="a" href="#contact" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[var(--border-color)] text-[var(--text-primary)] font-semibold rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex gap-4"
        >
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 250 }}
              whileHover={{ y: -4, scale: 1.15, boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] text-lg hover:text-indigo-500 hover:border-indigo-500 hover:bg-indigo-500/10 transition-colors duration-300"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Code Card */}
      <div className="flex justify-center order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <motion.div
            whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(99,102,241,0.12)] w-full max-w-[480px] gradient-border"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[var(--bg-tertiary)] border-b border-[var(--border-color)]">
              <div className="flex gap-2">
                <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer" />
                <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer" />
                <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer" />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)]">portfolio.py</span>
              <div className="ml-auto flex gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-40" />
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-40" />
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-40" />
              </div>
            </div>
            <div className="p-6 relative">
              {/* Line numbers */}
              <div className="absolute left-3 top-6 font-mono text-[0.7rem] text-[var(--text-muted)] opacity-30 leading-[1.8] select-none">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="font-mono text-[0.82rem] leading-[1.8] overflow-x-auto pl-6">
                <code>
                  <span className="code-keyword">class</span>{" "}
                  <span className="code-class">AIEngineer</span>:{"\n"}
                  {"    "}
                  <span className="code-keyword">def</span>{" "}
                  <span className="code-func">__init__</span>(
                  <span className="code-param">self</span>):{"\n"}
                  {"        "}
                  <span className="code-param">self</span>.name ={" "}
                  <span className="code-string">&quot;Siddhant Sharma&quot;</span>
                  {"\n"}
                  {"        "}
                  <span className="code-param">self</span>.role ={" "}
                  <span className="code-string">&quot;AI/ML Engineer&quot;</span>
                  {"\n"}
                  {"        "}
                  <span className="code-param">self</span>.location ={" "}
                  <span className="code-string">&quot;Pune, India&quot;</span>
                  {"\n"}
                  {"        "}
                  <span className="code-param">self</span>.skills = [{"\n"}
                  {"            "}
                  <span className="code-string">&quot;Python&quot;</span>,{" "}
                  <span className="code-string">&quot;LangChain&quot;</span>,{"\n"}
                  {"            "}
                  <span className="code-string">&quot;Azure&quot;</span>,{" "}
                  <span className="code-string">&quot;FastAPI&quot;</span>,{"\n"}
                  {"            "}
                  <span className="code-string">&quot;PyTorch&quot;</span>,{" "}
                  <span className="code-string">&quot;LangGraph&quot;</span>
                  {"\n"}
                  {"        "}]{"\n"}
                  {"\n"}
                  {"    "}
                  <span className="code-keyword">def</span>{" "}
                  <span className="code-func">build</span>(
                  <span className="code-param">self</span>):{"\n"}
                  {"        "}
                  <span className="code-keyword">return</span>{" "}
                  <span className="code-string">&quot;Intelligent Systems 🚀&quot;</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-muted)] text-xs tracking-widest uppercase hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[var(--text-muted)] rounded-full flex justify-center pt-1.5 opacity-50"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-indigo-500 rounded-full"
          />
        </motion.div>
        Scroll
      </motion.div>
    </section>
  );
}
