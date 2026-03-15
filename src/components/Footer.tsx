"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const showButton = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-[2] border-t border-[var(--border-color)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)]"
          >
            &lt;<span className="gradient-text">SS</span>/&gt;
          </motion.a>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { href: "https://github.com/sidgithub2401", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/siddhant-sharma-b945881bb", icon: <FaLinkedinIn />, label: "LinkedIn" },
              { href: "mailto:sidsharma2401@gmail.com", icon: <FaEnvelope />, label: "Email" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                whileHover={{ y: -4, scale: 1.15, borderColor: "rgba(99,102,241,0.5)" }}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-indigo-500 hover:bg-indigo-500/10 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-[var(--text-muted)]"
          >
            Designed &amp; Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block"
            >
              <FaHeart className="inline text-indigo-500 mx-1 align-middle" />
            </motion.span>{" "}
            by Siddhant Sharma
          </motion.p>
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        style={{ opacity: showButton }}
        whileHover={{ scale: 1.15, boxShadow: "0 8px 40px rgba(99,102,241,0.5)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_24px_rgba(99,102,241,0.4)] transition-all z-50 cursor-pointer"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
