"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-[rgba(99,102,241,0.15)] py-2.5"
          : "py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("#hero");
          }}
          className="font-mono text-2xl font-bold text-[var(--text-primary)] tracking-tight"
        >
          <span className="text-indigo-500">&lt;</span>
          SS
          <span className="text-indigo-500">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavigate(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                  activeSection === item.href.slice(1)
                    ? "text-[var(--text-primary)] bg-[rgba(99,102,241,0.1)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(99,102,241,0.1)]"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[var(--text-primary)] text-xl p-2 z-[1001]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-[280px] h-screen bg-[var(--bg-secondary)] border-l border-[var(--border-color)] z-[999] pt-20 px-8"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <button
                    onClick={() => handleNavigate(item.href)}
                    className="w-full text-left px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(99,102,241,0.1)] rounded-lg transition-all text-base font-medium"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
