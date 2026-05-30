"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaChevronDown, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

// ── Animated Counter Hook ──────────────────────────────────────
function useCountUp(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

// ── Animated Stats ─────────────────────────────────────────────
export function AnimatedStats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const projects  = useCountUp(5,  1500, inView);
  const months    = useCountUp(6,  1500, inView);
  const commits   = useCountUp(80, 2000, inView);
  const passion   = useCountUp(100,2000, inView);

  const stats = [
    { num: projects,  suffix: "+", label: "Projects Completed",      icon: "🚀" },
    { num: months,    suffix: "+", label: "Months of Learning",       icon: "📚" },
    { num: commits,   suffix: "+", label: "GitHub Commits",           icon: "💻" },
    { num: passion,   suffix: "%", label: "Passion for Coding",       icon: "💜" },
  ];

  return (
    <section ref={ref} style={{ position: "relative", zIndex: 1, padding: "20px 24px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        {stats.map(({ num, suffix, label, icon }) => (
          <motion.div key={label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 0 22px rgba(124,58,237,0.3)" }}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", borderRadius: 16, padding: "28px 24px", textAlign: "center", transition: "all 0.3s ease" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
            <p style={{ fontSize: 36, fontWeight: 800, lineHeight: 1, background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {num}{suffix}
            </p>
            <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 8 }}>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Currently Learning ─────────────────────────────────────────
export function CurrentlyLearning() {
  const items = [
    { name: "TypeScript",      icon: <span style={{fontWeight:800,color:"#3178c6",fontSize:16}}>TS</span>,   color: "#3178c6" },
    { name: "Docker",          icon: <span style={{fontWeight:800,color:"#2496ed",fontSize:16}}>🐳</span>,   color: "#2496ed" },
    { name: "GraphQL",         icon: <span style={{fontWeight:800,color:"#e535ab",fontSize:16}}>⬡</span>,   color: "#e535ab" },
    { name: "React Native",    icon: <FaReact size={16} color="#61dafb" />,                                  color: "#61dafb" },
    { name: "Advanced Next.js",icon: <SiNextdotjs size={14} color="#fff" />,                                 color: "#fff"    },
  ];
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto 60px", padding: "0 24px" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", letterSpacing: 1, textTransform: "uppercase", marginRight: 4 }}>
          📖 Currently Learning:
        </span>
        {items.map(({ name, icon, color }) => (
          <motion.span key={name}
            whileHover={{ scale: 1.08 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 50, padding: "5px 14px", fontSize: 12, fontWeight: 600, color, cursor: "default" }}>
            {icon} {name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// ── Services Section ───────────────────────────────────────────
export function ServicesSection() {
  const services = [
    { icon: <FaCode size={28} />,       title: "Frontend Development",  desc: "Building modern, responsive web apps with React & Next.js. Clean code, fast performance, pixel-perfect UI.",         color: "#a78bfa", price: "Contact for pricing" },
    { icon: <FaPaintBrush size={28} />, title: "UI/UX Design",          desc: "Creating beautiful, intuitive interfaces with Figma. User-centered design that looks great on all devices.",          color: "#60a5fa", price: "Contact for pricing" },
    { icon: <FaMobileAlt size={28} />,  title: "Responsive Web Design", desc: "Fully responsive websites that work perfectly on mobile, tablet, and desktop. Smooth animations included.",         color: "#34d399", price: "Contact for pricing" },
    { icon: <FaServer size={28} />,     title: "Full Stack (Basic)",     desc: "Basic backend with Node.js, Express & MongoDB. REST APIs, authentication, and database integration.",               color: "#f59e0b", price: "Contact for pricing" },
  ];
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Services</h2>
          <p style={{ fontSize: 14, color: "#94a3b8", marginTop: 6 }}>What I can do for you</p>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #7c3aed, #2563eb)", borderRadius: 2, margin: "8px auto 0" }} />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {services.map(({ icon, title, desc, color, price }) => (
            <motion.div key={title} variants={fadeUp}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${color}33` }}
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${color}25`, backdropFilter: "blur(12px)", borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", gap: 14, transition: "all 0.3s ease", borderTop: `3px solid ${color}` }}>
              <div style={{ color, width: 52, height: 52, background: `${color}15`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, flex: 1 }}>{desc}</p>
              <span style={{ fontSize: 12, fontWeight: 600, color, background: `${color}15`, borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start" }}>{price}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Skills Progress ────────────────────────────────────────────
export function SkillsProgress() {
  const skills = [
    { name: "HTML5 & CSS3",    level: 95, color: "#e34f26" },
    { name: "JavaScript",      level: 82, color: "#f7df1e" },
    { name: "React JS",        level: 80, color: "#61dafb" },
    { name: "Next.js",         level: 72, color: "#a78bfa" },
    { name: "Tailwind CSS",    level: 88, color: "#38bdf8" },
    { name: "Node.js",         level: 60, color: "#68a063" },
    { name: "MongoDB",         level: 58, color: "#4db33d" },
    { name: "Git & GitHub",    level: 78, color: "#f05032" },
    { name: "Figma",           level: 65, color: "#f24e1e" },
    { name: "Python",          level: 50, color: "#3776ab" },
  ];
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Skill Levels</h2>
          <p style={{ fontSize: 14, color: "#94a3b8", marginTop: 6 }}>My proficiency in each technology</p>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #7c3aed, #2563eb)", borderRadius: 2, margin: "8px auto 0" }} />
        </motion.div>
        <motion.div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 18 }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          {skills.map(({ name, level, color }) => (
            <div key={name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "inline-block" }} />{name}
                </span>
                <span style={{ fontSize: 12, color, fontWeight: 700 }}>{level}%</span>
              </div>
              <div style={{ height: 7, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ height: "100%", background: `linear-gradient(90deg, ${color}, ${color}99)`, borderRadius: 4, boxShadow: `0 0 8px ${color}66` }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── FAQ Section ────────────────────────────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "Are you available for freelance projects?",       a: "Yes! I'm currently available for freelance projects, part-time work, and internships. Feel free to reach out via the contact form." },
    { q: "What technologies do you specialize in?",         a: "I specialize in React JS, Next.js, Tailwind CSS, and modern JavaScript. I also have experience with Node.js, Firebase, and MongoDB for backend." },
    { q: "How long does it take to build a website?",       a: "It depends on complexity. A simple portfolio takes 3-5 days, a medium web app takes 1-2 weeks, and a complex project may take 3-4 weeks." },
    { q: "Do you work with international clients?",         a: "Absolutely! I'm open to working with clients from anywhere in the world. I'm comfortable communicating in English." },
    { q: "Can you redesign an existing website?",           a: "Yes, I can redesign and improve existing websites. Just share what you have and what you want to achieve." },
    { q: "What is your development process?",               a: "I follow a clear process: Requirement gathering → Design mockup → Development → Testing → Deployment → Feedback & revision." },
  ];
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>FAQ</h2>
          <p style={{ fontSize: 14, color: "#94a3b8", marginTop: 6 }}>Frequently asked questions</p>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #7c3aed, #2563eb)", borderRadius: 2, margin: "8px auto 0" }} />
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map(({ q, a }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }} viewport={{ once: true }}
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${open === i ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.3s ease" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", color: "#f1f5f9", fontSize: 14, fontWeight: 600, textAlign: "left", gap: 12 }}>
                <span>{q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ color: "#a78bfa", flexShrink: 0 }}>
                  <FaChevronDown size={14} />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    <p style={{ padding: "0 22px 18px", fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── WhatsApp Floating Button ───────────────────────────────────
export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 2500); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/8801780500020?text=Hi%20Shadman!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          whileHover={{ scale: 1.12 }}
          style={{
            position: "fixed", bottom: 90, left: 24, zIndex: 50,
            width: 52, height: 52, borderRadius: "50%",
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 20px rgba(37,211,102,0.5)",
            textDecoration: "none",
          }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} color="#fff" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ── Section Wave Divider ───────────────────────────────────────
export function WaveDivider({ flip = false }) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none", marginBottom: -2 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="rgba(124,58,237,0.06)" />
      </svg>
    </div>
  );
}