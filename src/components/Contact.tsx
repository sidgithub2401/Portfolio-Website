"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane, FaCheck } from "react-icons/fa";
import TextReveal from "./TextReveal";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sidsharma2401@gmail.com",
    href: "mailto:sidsharma2401@gmail.com",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 9075337736",
    href: "tel:+919075337736",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Pune, India",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-[2]" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-sm text-indigo-500 tracking-wide block"
          >
            &lt;contact&gt;
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            <TextReveal>Get In Touch</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[var(--text-secondary)] text-lg mt-4"
          >
            Let&apos;s build something intelligent together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 80 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex items-center gap-4 p-5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl transition-all duration-500 hover:shadow-[0_12px_50px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)] relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Left accent */}
                <div className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${item.color} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500 shrink-0 relative z-10"
                >
                  {item.icon}
                </motion.div>
                <div className="relative z-10">
                  <p className="text-sm text-[var(--text-muted)] font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[var(--text-primary)] font-medium hover:text-indigo-500 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--text-primary)] font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 mt-6">
              {[
                { href: "https://github.com/sidgithub2401", icon: <FaGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/siddhant-sharma-b945881bb", icon: <FaLinkedinIn />, label: "LinkedIn" },
              ].map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl text-[var(--text-secondary)] font-semibold hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-500/10 transition-all"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 relative"
          >
            {/* Form gradient border glow */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-sm pointer-events-none" />

            {[
              { id: "name", type: "text", label: "Your Name" },
              { id: "email", type: "email", label: "Your Email" },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 80 }}
                className="relative group"
              >
                <input
                  type={field.type}
                  id={field.id}
                  required
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-base outline-none transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1),0_0_30px_rgba(99,102,241,0.08)]"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-base pointer-events-none transition-all peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-[var(--bg-primary)] peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-500 peer-[:not(:placeholder-shown)]:bg-[var(--bg-primary)] peer-[:not(:placeholder-shown)]:px-1.5"
                >
                  {field.label}
                </label>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              className="relative group"
            >
              <textarea
                id="message"
                rows={5}
                required
                placeholder=" "
                className="peer w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-base outline-none resize-y min-h-[120px] transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1),0_0_30px_rgba(99,102,241,0.08)]"
              />
              <label
                htmlFor="message"
                className="absolute left-5 top-5 text-[var(--text-muted)] text-base pointer-events-none transition-all peer-focus:top-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-[var(--bg-primary)] peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-500 peer-[:not(:placeholder-shown)]:bg-[var(--bg-primary)] peer-[:not(:placeholder-shown)]:px-1.5"
              >
                Your Message
              </label>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 40px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2.5 px-7 py-4 font-semibold rounded-xl transition-all duration-300 text-white cursor-pointer ${
                submitted
                  ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                  : "bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-400 shadow-[0_4px_24px_rgba(99,102,241,0.3)]"
              }`}
            >
              {submitted ? (
                <>
                  Message Sent! <FaCheck />
                </>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
