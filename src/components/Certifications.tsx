"use client";

import { motion } from "framer-motion";
import { FaMicrosoft, FaCertificate, FaCheck } from "react-icons/fa";
import TextReveal from "./TextReveal";

const certifications = [
  {
    title: "Azure Fundamentals",
    code: "AZ-900",
    date: "November 2024",
    level: "Fundamentals",
  },
  {
    title: "Azure Developer Associate",
    code: "AZ-204",
    date: "March 2025",
    level: "Associate",
  },
  {
    title: "Azure AI Engineer Associate",
    code: "AI-102",
    date: "April 2025",
    level: "Associate",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative z-[2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-indigo-500 tracking-wide block"
          >
            &lt;certifications&gt;
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            <TextReveal>Microsoft Certifications</TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 50, rotateX: 10, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7 relative overflow-hidden transition-all duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)] shimmer-effect"
            >
              {/* Badge ribbon */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-indigo-500 to-violet-500 text-white text-[0.6rem] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {cert.level}
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-violet-500/10 rounded-2xl flex items-center justify-center text-indigo-500 text-3xl mb-4 relative"
                >
                  <FaMicrosoft />
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-[0.5rem] text-white" />
                  </div>
                </motion.div>
                
                <h3 className="text-base font-bold leading-snug mb-1">{cert.title}</h3>
                <p className="font-mono text-sm text-cyan-400 mt-0.5 mb-1">{cert.code}</p>
                <span className="text-sm text-[var(--text-muted)]">{cert.date}</span>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
