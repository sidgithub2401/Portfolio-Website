"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  href: string;
}

export function SectionHeader({ label, href }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="font-mono text-sm text-indigo-500 tracking-wide">
        &lt;{label}&gt;
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
        {href.split(" ")[0]}{" "}
        <span className="gradient-text">{href.split(" ").slice(1).join(" ")}</span>
      </h2>
    </div>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="font-mono text-sm text-indigo-500 tracking-wide block mb-3"
    >
      {children}
    </motion.span>
  );
}
