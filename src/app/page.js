"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaFacebook, FaInstagram,
  FaExternalLinkAlt, FaDownload, FaBars, FaTimes,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPython, FaJava, FaFigma, FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFirebase,
  SiMongodb, SiExpress, SiC,
} from "react-icons/si";
import ownPic from "../picture/own-pic.png";

// ─── Nav links ────────────────────────────────────────────────
const NAV_LINKS = ["Home", "Skills", "Projects", "Certificates", "Contact", "About"];

// ─── Tech background icons — more icons, spread all over ─────
const TECH_BG = [
  { Icon: FaReact,       top: "5%",  left: "4%",   size: 52 },
  { Icon: FaHtml5,       top: "10%", left: "88%",  size: 48 },
  { Icon: FaCss3Alt,     top: "25%", left: "1%",   size: 44 },
  { Icon: FaJs,          top: "46%", left: "95%",  size: 46 },
  { Icon: FaNodeJs,      top: "64%", left: "4%",   size: 50 },
  { Icon: SiMongodb,     top: "80%", left: "87%",  size: 46 },
  { Icon: SiNextdotjs,   top: "16%", left: "46%",  size: 42 },
  { Icon: FaGithub,      top: "70%", left: "45%",  size: 44 },
  { Icon: FaPython,      top: "88%", left: "17%",  size: 48 },
  { Icon: FaJava,        top: "36%", left: "83%",  size: 42 },
  { Icon: SiC,           top: "56%", left: "20%",  size: 40 },
  { Icon: SiFirebase,    top: "3%",  left: "36%",  size: 44 },
  { Icon: SiTailwindcss, top: "33%", left: "58%",  size: 40 },
  { Icon: FaFigma,       top: "53%", left: "75%",  size: 38 },
  { Icon: SiExpress,     top: "77%", left: "33%",  size: 40 },
  { Icon: FaGitAlt,      top: "20%", left: "70%",  size: 42 },
  { Icon: FaDatabase,    top: "92%", left: "58%",  size: 38 },
  { Icon: FaReact,       top: "44%", left: "13%",  size: 36 },
  { Icon: FaHtml5,       top: "85%", left: "72%",  size: 40 },
  { Icon: FaJs,          top: "62%", left: "62%",  size: 36 },
  { Icon: SiMongodb,     top: "8%",  left: "20%",  size: 38 },
  { Icon: FaPython,      top: "30%", left: "30%",  size: 36 },
];

// ─── Skills ───────────────────────────────────────────────────
const SKILLS = [
  { name: "HTML5",        Icon: FaHtml5,       color: "#e34f26" },
  { name: "CSS3",         Icon: FaCss3Alt,     color: "#264de4" },
  { name: "JavaScript",   Icon: FaJs,          color: "#f7df1e" },
  { name: "React JS",     Icon: FaReact,       color: "#61dafb" },
  { name: "Next.js",      Icon: SiNextdotjs,   color: "#fff"    },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js",      Icon: FaNodeJs,      color: "#68a063" },
  { name: "Firebase",     Icon: SiFirebase,    color: "#ffca28" },
  { name: "MongoDB",      Icon: SiMongodb,     color: "#4db33d" },
  { name: "Express.js",   Icon: SiExpress,     color: "#fff"    },
  { name: "Git & GitHub", Icon: FaGitAlt,      color: "#f05032" },
  { name: "Figma",        Icon: FaFigma,       color: "#f24e1e" },
  { name: "C",            Icon: SiC,           color: "#a8b9cc" },
  { name: "Java",         Icon: FaJava,        color: "#007396" },
  { name: "Python",       Icon: FaPython,      color: "#3776ab" },
];

// ─── Projects ─────────────────────────────────────────────────
const PROJECTS = [
  { title: "DocAppoint",     url: "https://doc-appoint-olive.vercel.app/",         desc: "Modern Doctor Appointment Booking Platform.",      tag: "Healthcare · React · Firebase"   },
  { title: "Mango",          url: "https://mango-sage.vercel.app/",                desc: "Modern online bookstore web application.",          tag: "E-Commerce · Next.js · Tailwind"  },
  { title: "React Website",  url: "https://cozy-pika-83908a.netlify.app/",         desc: "Creative React based animated UI website.",         tag: "UI · React · Framer Motion"       },
  { title: "Creative Agency",url: "https://prismatic-pie-cf7807.netlify.app/",     desc: "Animated digital agency landing page.",             tag: "Agency · Animation · CSS"         },
];

// ─── Certificates ─────────────────────────────────────────────
const CERTS = [
  {
    img: "/certificate/certificate1.png",
    title: "AI CodeLab Program 2026",
    desc: "Awarded for gaining foundational knowledge of modern AI concepts, Agentic AI, and real-world AI solution design — organized by IEEE CS SEU SBC & Dept. of CSE, Southeast University in collaboration with Learn With Sumit.",
    badge: "Certificate of Appreciation",
  },
  {
    img: "/certificate/certificate2.png",
    title: "Introduction to CIP – OPSWAT Academy",
    desc: "Successfully graduated from the Introduction to CIP (Critical Infrastructure Protection) program by OPSWAT Academy. Issued May 15, 2026 · Valid until May 15, 2027 · ID: OPA8kq55gg",
    badge: "Verified Certificate",
    verify: "https://learn.opswatacademy.com/certificate/OPA8kq55gg",
  },
];

// ─── Biography ────────────────────────────────────────────────
const BIO = [
  { label: "Full Name",        value: "Md. Shadman Shakib Fuad" },
  { label: "Current Location", value: "Dhaka, Bangladesh" },
  { label: "Hometown",         value: "Rangpur, Bangladesh" },
  { label: "University",       value: "SouthEast University – Department of CSE" },
  { label: "Date of Birth",    value: "09 May 2004" },
  { label: "School",           value: "Bir Uttam Shaheed Samad School & College, Rangpur" },
  { label: "College",          value: "Cantonment Public School & College, Rangpur" },
  { label: "Academic Results", value: "PSC – 5.00 | JSC – 5.00 | SSC – 5.00 | HSC – 5.00" },
  { label: "Hobbies",          value: "Console Gaming, Traveling, Exploring Technologies, UI Designing, Watching Tech Content" },
  { label: "Soft Skills",      value: "Leadership, Creativity, Problem Solving, Teamwork, Communication" },
  { label: "Current Focus",    value: "Advanced React Ecosystem, Next.js, Full Stack Architecture & UI Engineering" },
  { label: "Dream",            value: "To become a globally recognized Software Engineer and build impactful digital products for millions of users." },
];

// ─── Animation variants ───────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ─── TechIcon: always visible, moves bigger distance ─────────
function TechIcon({ Icon, top, left, size, index }) {
  const duration = 6 + (index % 7) * 1.2;
  const delay    = (index * 0.85) % 6;

  // Different movement patterns per icon for natural feel
  const patterns = [
    { x: [0,  35, -22,  18, 0], y: [0, -28,  -42,  -14, 0] },
    { x: [0, -30,  20, -10, 0], y: [0, -20,  -38,  -26, 0] },
    { x: [0,  20, -38,   8, 0], y: [0, -36,  -18,  -44, 0] },
    { x: [0, -18,  30, -28, 0], y: [0, -44,  -22,  -10, 0] },
    { x: [0,  28, -12,  36, 0], y: [0, -16,  -40,  -28, 0] },
    { x: [0, -24,  16, -32, 0], y: [0, -38,  -10,  -46, 0] },
    { x: [0,  16, -36,  24, 0], y: [0, -42,  -24,  -16, 0] },
  ];
  const { x, y } = patterns[index % patterns.length];

  return (
    <motion.div
      style={{ position: "absolute", top, left, opacity: 0.1 }}
      animate={{ x, y }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon size={size} style={{ color: "rgba(167,139,250,1)" }} />
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════
export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [formData, setFormData]           = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent]           = useState(false);
  const [visitors, setVisitors]           = useState(null);

  // ── Supabase visitor counter ──
  useEffect(() => {
    const SUPABASE_URL = "https://fekyjxjavcdhjhfenwtt.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZla3lqeGphdmNkaGpoZmVud3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NDk1ODksImV4cCI6MjA5NTQyNTU4OX0.qGLcBAcclezmimxQUmo6_r3qHpAe_pTaVnacCe7dLJ8";

    async function trackVisit() {
      try {
        // Step 1: get current count
        const getRes = await fetch(
          `${SUPABASE_URL}/rest/v1/visitors?select=count&id=eq.1`,
          {
            headers: {
              "apikey": SUPABASE_KEY,
              "Authorization": `Bearer ${SUPABASE_KEY}`,
            },
          }
        );
        const getData = await getRes.json();
        const currentCount = getData?.[0]?.count ?? 0;
        const newCount = currentCount + 1;

        // Step 2: update with new count
        await fetch(
          `${SUPABASE_URL}/rest/v1/visitors?id=eq.1`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "apikey": SUPABASE_KEY,
              "Authorization": `Bearer ${SUPABASE_KEY}`,
              "Prefer": "return=minimal",
            },
            body: JSON.stringify({ count: newCount }),
          }
        );

        setVisitors(newCount);
      } catch (e) {
        console.error("Visitor counter error:", e);
        setVisitors("—");
      }
    }
    trackVisit();
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(link); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>

      {/* ── Pulse dot keyframe for Available badge ── */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>

      {/* ── Background blobs + tech icons ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="blob-1 absolute rounded-full" style={{ width: 600, height: 600, top: "-100px", left: "-150px", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="blob-2 absolute rounded-full" style={{ width: 500, height: 500, bottom: "10%", right: "-100px", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="blob-3 absolute rounded-full" style={{ width: 400, height: 400, top: "50%", left: "40%", background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
        {TECH_BG.map(({ Icon, top, left, size }, i) => (
          <TechIcon key={i} Icon={Icon} top={top} left={left} size={size} index={i} />
        ))}
      </div>

      {/* ╔══════════════╗
          ║    NAVBAR    ║
          ╚══════════════╝ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="glow-text" style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            S. Fuad
          </span>
          <ul style={{ display: "flex", gap: 8, listStyle: "none" }} className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button onClick={() => scrollTo(link.toLowerCase())} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, letterSpacing: 0.3, transition: "all 0.25s ease", color: activeSection === link ? "var(--purple-light)" : "var(--text-secondary)", borderBottom: activeSection === link ? "2px solid var(--purple-glow)" : "2px solid transparent", textShadow: activeSection === link ? "0 0 10px rgba(167,139,250,0.5)" : "none" }}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: 8 }}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} style={{ background: "rgba(9,9,15,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "12px 0" }}>
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link.toLowerCase())} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "12px 24px", color: activeSection === link ? "var(--purple-light)" : "var(--text-secondary)", fontSize: 15, fontWeight: 500 }}>
                  {link}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Social Sidebar ── */}
      <div className="social-sidebar fixed right-5 top-1/2 z-40 flex flex-col gap-3" style={{ transform: "translateY(-50%)" }}>
        {[
          { Icon: FaGithub,    href: "https://github.com/Shadman-Shakib-Fuad",                         label: "GitHub"    },
          { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/md-shadman-shakib-fuad-435009317/", label: "LinkedIn"  },
          { Icon: FaFacebook,  href: "https://www.facebook.com/shadmanshakib.fuad",                   label: "Facebook"  },
          { Icon: FaInstagram, href: "https://www.instagram.com/shadman.shakib.fuad/",                label: "Instagram" },
        ].map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon glass-card" style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--purple-light)" }}>
            <Icon size={17} />
          </a>
        ))}
      </div>

      {/* ╔══════════════╗
          ║     HERO     ║
          ╚══════════════╝ */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px 60px" }}>
        <div className="hero-two-col" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, width: "100%", flexWrap: "wrap" }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ flex: "1 1 340px" }}>
            {/* ── Available for Hire badge ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.35)",
                borderRadius: 50, padding: "6px 16px",
                fontSize: 13, fontWeight: 600, color: "#4ade80",
                letterSpacing: 0.5,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 8px #4ade80, 0 0 16px rgba(74,222,128,0.4)",
                  display: "inline-block",
                  animation: "pulse-dot 1.8s ease-in-out infinite",
                }} />
                Available for Hire
              </span>
            </motion.div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--purple-light)", marginBottom: 12 }}>Welcome to my Portfolio</p>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Hi, I&apos;m <span className="glow-text">Md. Shadman</span><br />
              <span style={{ color: "var(--text-primary)" }}>Shakib Fuad</span>
            </h1>
            <div style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 600, marginBottom: 20, color: "var(--purple-light)", minHeight: 32 }}>
              <TypeAnimation sequence={["Frontend Web Developer", 2000, "React JS Developer", 2000, "Next.js Developer", 2000, "Creative UI Designer", 2000, "CSE Student", 2000]} wrapper="span" speed={50} repeat={Infinity} />
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 32, maxWidth: 480 }}>
              Passionate Frontend Developer from Bangladesh focused on building beautiful, interactive and high-performance modern web applications with exceptional UI/UX experiences.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              <button className="glow-btn" onClick={() => scrollTo("projects")} style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg, #7c3aed, #2563eb)", border: "none", color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer", letterSpacing: 0.4 }}>Explore Projects</button>
              <button className="glow-btn" onClick={() => scrollTo("about")} style={{ padding: "12px 24px", borderRadius: 10, background: "transparent", border: "1px solid rgba(124,58,237,0.5)", color: "var(--purple-light)", fontWeight: 600, fontSize: 14, cursor: "pointer", letterSpacing: 0.4 }}>More About Me</button>
              <a href="/cv/shadman-cv.pdf" download className="glow-btn" style={{ padding: "12px 24px", borderRadius: 10, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(167,139,250,0.3)", color: "var(--purple-light)", fontWeight: 600, fontSize: 14, cursor: "pointer", letterSpacing: 0.4, display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                <FaDownload size={13} /> Download CV
              </a>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { Icon: FaGithub,    href: "https://github.com/Shadman-Shakib-Fuad" },
                { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/md-shadman-shakib-fuad-435009317/" },
                { Icon: FaFacebook,  href: "https://www.facebook.com/shadmanshakib.fuad" },
                { Icon: FaInstagram, href: "https://www.instagram.com/shadman.shakib.fuad/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-icon glass-card" style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--purple-light)" }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div className="float-anim" style={{ position: "relative", width: "clamp(240px, 30vw, 340px)" }}>
              <div style={{ position: "absolute", inset: -4, borderRadius: 24, background: "linear-gradient(135deg, #7c3aed, #2563eb, #7c3aed)", padding: 3, zIndex: 0, filter: "blur(2px)", opacity: 0.85 }} />
              <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", zIndex: 1, boxShadow: "0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(37,99,235,0.2)" }}>
                <Image src={ownPic} alt="Md. Shadman Shakib Fuad" style={{ width: "100%", height: "auto", display: "block" }} priority />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ╔══════════════╗
          ║    SKILLS    ║
          ╚══════════════╝ */}
      <section id="skills" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle title="Tech Arsenal" sub="Technologies I work with" />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 16, marginTop: 40 }}>
            {SKILLS.map(({ name, Icon, color }) => (
              <motion.div key={name} variants={fadeUp} className="glass-card skill-card" style={{ borderRadius: 14, padding: "20px 12px", textAlign: "center", cursor: "default" }}>
                <Icon size={34} style={{ color, marginBottom: 10 }} />
                <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "20px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {[
            { num: "5+",   label: "Projects Completed",             icon: "🚀" },
            { num: "6+",   label: "Months Learning Web Development", icon: "📚" },
            { num: "100%", label: "Passion For Coding",              icon: "💜" },
          ].map(({ num, label, icon }) => (
            <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card stat-card" style={{ borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <p className="glow-text" style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>{num}</p>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 8 }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ╔══════════════╗
          ║   PROJECTS   ║
          ╚══════════════╝ */}
      <section id="projects" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle title="Featured Projects" sub="Things I've built" />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22, marginTop: 40 }}>
            {PROJECTS.map(({ title, url, desc, tag }) => (
              <motion.div key={title} variants={fadeUp} className="glass-card project-card" style={{ borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                  <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-light)" }}>
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>{desc}</p>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--purple-light)", background: "rgba(124,58,237,0.12)", borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start", letterSpacing: 0.5 }}>{tag}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔════════════════════╗
          ║    CERTIFICATES    ║
          ╚════════════════════╝ */}
      <section id="certificates" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle title="Certificates" sub="Achievements & recognitions" />

          {/* ── Centered flex row, equal space both sides ── */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 36,
              marginTop: 40,
            }}
          >
            {CERTS.map(({ img, title, desc, badge, verify }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card cert-card"
                style={{
                  borderRadius: 18,
                  width: 420,
                  maxWidth: "100%",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ overflow: "hidden", borderRadius: "18px 18px 0 0", height: 230, flexShrink: 0 }}>
                  <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--purple-light)", background: "rgba(124,58,237,0.12)", borderRadius: 6, padding: "3px 10px", letterSpacing: 0.4, alignSelf: "flex-start" }}>
                    {badge}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.4 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, flex: 1 }}>{desc}</p>
                  {verify && (
                    <a href={verify} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "var(--purple-light)", display: "flex", alignItems: "center", gap: 5, textDecoration: "none", fontWeight: 600, marginTop: 4 }}>
                      <FaExternalLinkAlt size={11} /> Verify Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔══════════════╗
          ║   CONTACT    ║
          ╚══════════════╝ */}
      <section id="contact" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <SectionTitle title="Get In Touch" sub="I'd love to hear from you" />
          <motion.form onSubmit={handleForm} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="glass-card" style={{ borderRadius: 20, padding: 36, marginTop: 40, display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Name</label>
              <input className="form-input" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Message</label>
              <textarea className="form-input" placeholder="Write your message..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required style={{ resize: "vertical" }} />
            </div>
            <button type="submit" className="glow-btn" style={{ padding: "13px 0", borderRadius: 10, background: "linear-gradient(135deg, #7c3aed, #2563eb)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 0.5, transition: "all 0.3s ease" }}>
              {formSent ? "✅ Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ╔══════════════╗
          ║  BIOGRAPHY   ║
          ╚══════════════╝ */}
      <section id="about" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle title="Biography" sub="A little about me" />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="glass-card" style={{ borderRadius: 20, overflow: "hidden", marginTop: 40 }}>
            {BIO.map(({ label, value }, i) => (
              <motion.div key={label} variants={fadeUp} className="bio-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", padding: "16px 28px", borderBottom: i < BIO.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--purple-light)", letterSpacing: 0.3 }}>{label} :</span>
                <span style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: 1.6 }}>{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ╔══════════════╗
          ║    FOOTER    ║
          ╚══════════════╝ */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(124,58,237,0.25)", boxShadow: "0 -1px 30px rgba(124,58,237,0.08)", padding: "40px 24px 30px", textAlign: "center" }}>
        <p className="glow-text" style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Md. Shadman Shakib Fuad</p>
        <p style={{ fontSize: 13, color: "var(--purple-light)", marginBottom: 8 }}>Frontend Web Developer</p>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 20 }}>Crafting modern digital experiences with code &amp; creativity.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 24 }}>
          {[
            { Icon: FaGithub,    href: "https://github.com/Shadman-Shakib-Fuad" },
            { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/md-shadman-shakib-fuad-435009317/" },
            { Icon: FaFacebook,  href: "https://www.facebook.com/shadmanshakib.fuad" },
            { Icon: FaInstagram, href: "https://www.instagram.com/shadman.shakib.fuad/" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-icon glass-card" style={{ width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--purple-light)" }}>
              <Icon size={15} />
            </a>
          ))}
        </div>
        {/* ── Real Visitor Counter (Supabase) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: 50, padding: "7px 18px",
            marginBottom: 16, fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <span style={{ fontSize: 16 }}>👁️</span>
          <span>
            {visitors !== null ? (
              <>
                <span style={{ fontWeight: 700, color: "var(--purple-light)" }}>
                  {visitors.toLocaleString()}
                </span>
                {" "}total visitors
              </>
            ) : (
              <span style={{ color: "var(--text-secondary)" }}>Loading visitors...</span>
            )}
          </span>
        </motion.div>
        <p style={{ fontSize: 12, color: "rgba(148,163,184,0.4)" }}>© 2026 All Rights Reserved</p>
      </footer>

    </div>
  );
}

// ─── Section Title helper ─────────────────────────────────────
function SectionTitle({ title, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 8 }}>
      <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, marginBottom: 4 }}>
        <span className="glow-text">{title}</span>
      </h2>
      {sub && <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6 }}>{sub}</p>}
      <div className="section-title-line" />
    </motion.div>
  );
}