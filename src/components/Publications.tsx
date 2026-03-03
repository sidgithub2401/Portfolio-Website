"use client";

import { motion } from "framer-motion";
import { FaFileAlt, FaBook, FaExternalLinkAlt } from "react-icons/fa";
import TextReveal from "./TextReveal";

const publications = [
  {
    title: "Vehicle Number Plate Detection using YoloV8 and EasyOCR",
    venue: "IEEE Journal — July 2023",
    link: "https://ieeexplore.ieee.org/document/10307420",
    tags: ["Computer Vision", "YOLOv8", "OCR"],
  },
  {
    title: "IoT Based Vehicle Tracking System",
    venue: "IRJET — January 2020",
    link: "https://www.irjet.net/archives/V7/i2/IRJET-V7I2611.pdf",
    tags: ["IoT", "Embedded Systems", "GPS"],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 lg:py-32 relative z-[2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-indigo-500 tracking-wide block"
          >
            &lt;publications&gt;
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            <TextReveal>Research Publications</TextReveal>
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-5">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7 flex gap-5 items-start transition-all duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)] relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 text-lg shrink-0 relative z-10"
              >
                <FaFileAlt />
              </motion.div>
              <div className="relative z-10">
                <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-violet-400 transition-colors duration-300">{pub.title}</h3>
                <p className="text-sm text-[var(--text-muted)] flex items-center gap-2 mb-3">
                  <FaBook className="text-indigo-500" />
                  {pub.venue}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[0.65rem] text-[var(--text-muted)] px-2 py-0.5 bg-white/[0.03] rounded border border-transparent">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="text-sm text-indigo-500 font-semibold inline-flex items-center gap-1.5 hover:text-cyan-400 transition-all"
                >
                  Read Paper <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
