"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import TextReveal from "./TextReveal";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { number: 2, suffix: "+", label: "Years Experience", color: "from-indigo-500 to-violet-500" },
  { number: 5, suffix: "+", label: "AI/ML Projects", color: "from-violet-500 to-purple-500" },
  { number: 3, suffix: "", label: "Azure Certifications", color: "from-cyan-500 to-blue-500" },
  { number: 2, suffix: "", label: "Publications", color: "from-emerald-500 to-teal-500" },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative z-[2]">
      {/* Background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none"
      />

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
              &lt;about&gt;
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
              <TextReveal>About Me</TextReveal>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 mb-12">
          <AnimatedSection>
            <div className="space-y-5">
              {[
                <>
                  I&apos;m an <strong className="text-[var(--text-primary)] font-semibold">AI/ML Engineer</strong> with{" "}
                  <strong className="text-[var(--text-primary)] font-semibold">2+ years</strong> of experience designing
                  cloud-native systems and building production-ready machine learning and Generative AI solutions. My
                  expertise spans customer analytics, churn prediction, recommendation systems, and RAG-based LLM
                  applications.
                </>,
                <>
                  I hold strong expertise in{" "}
                  <strong className="text-[var(--text-primary)] font-semibold">
                    Python, model evaluation, and scalable API deployment on Azure
                  </strong>
                  . As a{" "}
                  <strong className="text-[var(--text-primary)] font-semibold">
                    Microsoft Certified Azure AI Engineer
                  </strong>
                  , I bring hands-on experience in LangGraph orchestration and AI-assisted enterprise modernization.
                </>,
                <>
                  I&apos;m passionate about applying AI in{" "}
                  <strong className="text-[var(--text-primary)] font-semibold">financial services</strong> and{" "}
                  <strong className="text-[var(--text-primary)] font-semibold">
                    large-scale enterprise platforms
                  </strong>
                  , building solutions that bridge cutting-edge research with real-world impact.
                </>,
              ].map((content, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                  className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed"
                >
                  {content}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]"
                >
                  {/* Animated top border */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="text-3xl md:text-4xl font-extrabold text-indigo-500 leading-none relative z-10">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-2 font-medium relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ borderColor: "rgba(99,102,241,0.5)", scale: 1.01 }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] gradient-border shimmer-effect"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 text-xl shrink-0"
            >
              <FaGraduationCap />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold mb-1">Bharati Vidyapeeth&apos;s College Of Engineering</h3>
              <p className="text-violet-400 font-medium mb-3">Bachelor of Technology in Computer Engineering</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                  <FaCalendarAlt className="text-indigo-500" /> Aug 2020 – July 2023
                </span>
                <span className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                  <FaStar className="text-indigo-500" /> CGPA: 9.34 / 10.0
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
