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
  FaGraduationCap, FaSchool, FaUniversity,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFirebase,
  SiMongodb, SiExpress, SiC,
} from "react-icons/si";
import ownPic from "../picture/own-pic.png";
import Lenis from "lenis";
import { AnimatedStats, ServicesSection, SkillsProgress, FAQSection, WhatsAppButton, CurrentlyLearning, WaveDivider } from "../components/ExtraSections";

const NAV_LINKS = ["Home", "Skills", "Projects", "Certificates", "Contact", "About"];

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

const PROJECTS = [
  { title: "DocAppoint",      url: "https://doc-appoint-olive.vercel.app/",     desc: "Modern Doctor Appointment Booking Platform.",  tag: "Healthcare · React · Firebase",  preview: "/projects/docappoint.PNG"      },
  { title: "Mango",           url: "https://mango-sage.vercel.app/",            desc: "Modern online bookstore web application.",      tag: "E-Commerce · Next.js · Tailwind", preview: "/projects/mango.PNG"           },
  { title: "React Website",   url: "https://cozy-pika-83908a.netlify.app/",     desc: "Creative React based animated UI website.",     tag: "UI · React · Framer Motion",     preview: "/projects/react-website.PNG"   },
  { title: "Creative Agency", url: "https://prismatic-pie-cf7807.netlify.app/", desc: "Animated digital agency landing page.",         tag: "Agency · Animation · CSS",       preview: "/projects/creative-agency.PNG" },
];

const CERTS = [
  { img: "/certificate/certificate1.png", title: "AI CodeLab Program 2026",           desc: "Awarded for gaining foundational knowledge of modern AI concepts, Agentic AI, and real-world AI solution design — organized by IEEE CS SEU SBC & Dept. of CSE, Southeast University in collaboration with Learn With Sumit.", badge: "Certificate of Appreciation" },
  { img: "/certificate/certificate2.png", title: "Introduction to CIP – OPSWAT Academy", desc: "Successfully graduated from the Introduction to CIP (Critical Infrastructure Protection) program by OPSWAT Academy. Issued May 15, 2026 · Valid until May 15, 2027 · ID: OPA8kq55gg", badge: "Verified Certificate", verify: "https://learn.opswatacademy.com/certificate/OPA8kq55gg" },
];

// ── Education & Experience Timeline ──────────────────────────
const TIMELINE = [
  { year: "2024", title: "B.Sc",  subtitle: "Computer Science & Engineering",       desc: "Southeast University, Dhaka — Currently Running",         result: "Running ⚡", Icon: FaUniversity,    color: "#f472b6" },
  { year: "2022", title: "HSC",   subtitle: "Higher Secondary Certificate",         desc: "Cantonment Public School & College, Rangpur",             result: "GPA 5.00",  Icon: FaGraduationCap, color: "#f59e0b" },
  { year: "2020", title: "SSC",   subtitle: "Secondary School Certificate",         desc: "Bir Uttam Shaheed Samad School & College, Rangpur",       result: "GPA 5.00",  Icon: FaGraduationCap, color: "#34d399" },
  { year: "2017", title: "JSC",   subtitle: "Junior School Certificate",            desc: "Bir Uttam Shaheed Samad School & College, Rangpur",       result: "GPA 5.00",  Icon: FaSchool,        color: "#60a5fa" },
  { year: "2014", title: "PSC",   subtitle: "Primary School Certificate",           desc: "Bir Uttam Shaheed Samad School & College, Rangpur",       result: "GPA 5.00",  Icon: FaSchool,        color: "#a78bfa" },
];

// ── Testimonials ─────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Ariful Islam",
    role: "Web Developer",
    text: "Shadman is a highly dedicated developer. His attention to detail and passion for clean UI is remarkable. Loved collaborating with him!",
    avatar: "AI",
    color: "#a78bfa",
  },
  {
    name: "Tanvir Ahmed",
    role: "UI/UX Designer",
    text: "Working with Shadman was a great experience. He understands design requirements quickly and implements them perfectly with code.",
    avatar: "TA",
    color: "#60a5fa",
  },
  {
    name: "Rafiul Hasan",
    role: "CSE Student, SEU",
    text: "One of the most hardworking developers I know. Shadman always delivers quality work on time and goes the extra mile.",
    avatar: "RH",
    color: "#34d399",
  },
];

const BIO = [
  { label: "Full Name",        value: "Md. Shadman Shakib Fuad" },
  { label: "Current Location", value: "Mohakhali, Dhaka, Bangladesh" },
  { label: "Hometown",         value: "C.O. Bazar, Rangpur, Bangladesh" },
  { label: "University",       value: "Southeast University – Department of CSE" },
  { label: "Date of Birth",    value: "09 May 2004" },
  { label: "School",           value: "Bir Uttam Shaheed Samad School & College, Rangpur" },
  { label: "College",          value: "Cantonment Public School & College, Rangpur" },
  { label: "Academic Results", value: "PSC – 5.00 | JSC – 5.00 | SSC – 5.00 | HSC – 5.00" },
  { label: "Hobbies",          value: "Console Gaming, Traveling, Exploring Technologies, UI Designing, Watching Tech Content" },
  { label: "Soft Skills",      value: "Leadership, Creativity, Problem Solving, Teamwork, Communication" },
  { label: "Current Focus",    value: "Advanced React Ecosystem, Next.js, Full Stack Architecture & UI Engineering" },
  { label: "Dream",            value: "To become a globally recognized Software Engineer and build impactful digital products for millions of users." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };

// ── Page Loading Screen ───────────────────────────────────────
function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#09090f",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 24,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <motion.h1
          style={{
            fontSize: "clamp(40px, 8vw, 72px)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: 6,
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontStyle: "italic",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          S. Fuad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: 14, color: "#94a3b8", marginTop: 8, letterSpacing: 3, textTransform: "uppercase" }}
        >
          Frontend Developer
        </motion.p>
      </motion.div>

      {/* Loading bar */}
      <div style={{ width: 200, height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%", background: "linear-gradient(90deg, #7c3aed, #2563eb)", borderRadius: 4 }}
        />
      </div>
    </motion.div>
  );
}

// ── TechIcon ──────────────────────────────────────────────────
function TechIcon({ Icon, top, left, size, index }) {
  const duration = 6 + (index % 7) * 1.2;
  const delay    = (index * 0.85) % 6;
  const patterns = [
    { x: [0,  35, -22,  18, 0], y: [0, -28, -42, -14, 0] },
    { x: [0, -30,  20, -10, 0], y: [0, -20, -38, -26, 0] },
    { x: [0,  20, -38,   8, 0], y: [0, -36, -18, -44, 0] },
    { x: [0, -18,  30, -28, 0], y: [0, -44, -22, -10, 0] },
    { x: [0,  28, -12,  36, 0], y: [0, -16, -40, -28, 0] },
    { x: [0, -24,  16, -32, 0], y: [0, -38, -10, -46, 0] },
    { x: [0,  16, -36,  24, 0], y: [0, -42, -24, -16, 0] },
  ];
  const { x, y } = patterns[index % patterns.length];
  return (
    <motion.div style={{ position: "absolute", top, left, opacity: 0.1 }} animate={{ x, y }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}>
      <Icon size={size} style={{ color: "rgba(167,139,250,1)" }} />
    </motion.div>
  );
}

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ title, url, desc, tag, preview }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div variants={fadeUp} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", transition: "transform 0.3s ease, box-shadow 0.3s ease", transform: hovered ? "translateY(-6px)" : "translateY(0)", boxShadow: hovered ? "0 0 30px rgba(124,58,237,0.3)" : "none" }}>
      <div style={{ position: "relative", height: 180, overflow: "hidden", background: "#0d0d1a" }}>
        <img src={preview} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        <AnimatePresence>
          {hovered && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", inset: 0, background: "rgba(124,58,237,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", color: "#7c3aed", padding: "10px 22px", borderRadius: 50, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                <FaExternalLinkAlt size={13} /> Live Preview
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{title}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-light)" }}><FaExternalLinkAlt size={14} /></a>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>{desc}</p>
        <span style={{ fontSize: 11, fontWeight: 600, color: "var(--purple-light)", background: "rgba(124,58,237,0.12)", borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start", letterSpacing: 0.5 }}>{tag}</span>
      </div>
    </motion.div>
  );
}

// ── GitHub Stats Component ────────────────────────────────────
function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos]  = useState([]);

  useEffect(() => {
    // Fetch user stats
    fetch("https://api.github.com/users/Shadman-Shakib-Fuad")
      .then((r) => r.json())
      .then((d) => setStats(d))
      .catch(() => {});

    // Fetch repos for language count
    fetch("https://api.github.com/users/Shadman-Shakib-Fuad/repos?per_page=100")
      .then((r) => r.json())
      .then((d) => Array.isArray(d) && setRepos(d))
      .catch(() => {});
  }, []);

  // Count total commits approximation from public repos
  const totalRepos   = stats?.public_repos ?? "—";
  const followers    = stats?.followers ?? "—";
  const following    = stats?.following ?? "—";
  const totalStars   = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);

  // Top languages
  const langMap = {};
  repos.forEach((r) => { if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1; });
  const topLangs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const langColors = { JavaScript: "#f7df1e", TypeScript: "#3178c6", Python: "#3776ab", CSS: "#264de4", HTML: "#e34f26", "C++": "#a8b9cc", Java: "#007396", C: "#a8b9cc", Rust: "#ce412b", Go: "#00add8" };

  const statItems = [
    { label: "Public Repos",  value: totalRepos, icon: "📁" },
    { label: "Total Stars",   value: totalStars || "0", icon: "⭐" },
    { label: "Followers",     value: followers,  icon: "👥" },
    { label: "Following",     value: following,  icon: "➕" },
  ];

  return (
    <section style={{ position: "relative", zIndex: 1, padding: "20px 24px 80px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionTitle title="GitHub Activity" sub="My open source contributions" />

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {statItems.map(({ label, value, icon }) => (
              <motion.div key={label} whileHover={{ y: -4, boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
                className="glass-card"
                style={{ borderRadius: 14, padding: "20px 16px", textAlign: "center", transition: "all 0.3s ease" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
                <p className="glow-text" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{value}</p>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }}>{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Top Languages */}
          {topLangs.length > 0 && (
            <div className="glass-card" style={{ borderRadius: 16, padding: 24 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--purple-light)", marginBottom: 16, letterSpacing: 0.5 }}>🧑‍💻 Top Languages</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {topLangs.map(([lang, count]) => {
                  const pct = Math.round((count / repos.length) * 100);
                  const barColor = langColors[lang] || "#a78bfa";
                  return (
                    <div key={lang}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: barColor, display: "inline-block" }} />
                          {lang}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{pct}%</span>
                      </div>
                      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          viewport={{ once: true }}
                          style={{ height: "100%", background: barColor, borderRadius: 3 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contribution graph */}
          <div className="glass-card" style={{ borderRadius: 16, padding: 24, textAlign: "center", overflow: "hidden" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "var(--purple-light)", marginBottom: 16, letterSpacing: 0.5 }}>📅 Contribution Graph</p>
            <img
              src="https://ghchart.rshah.org/7c3aed/Shadman-Shakib-Fuad"
              alt="GitHub Contribution Graph"
              style={{ width: "100%", maxWidth: 860, borderRadius: 8 }}
            />
            <div style={{ marginTop: 16 }}>
              <a href="https://github.com/Shadman-Shakib-Fuad" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--purple-light)", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                <FaGithub size={16} /> View GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
export default function Home() {
  const [loading, setLoading]             = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop]               = useState(false);
  const [cvPreview, setCvPreview]           = useState(false);
  const [toast, setToast]                   = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [formData, setFormData]           = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent]           = useState(false);
  const [sending, setSending]             = useState(false);
  const [sendError, setSendError]         = useState(false);
  const [visitors, setVisitors]           = useState(null);

  // ── Supabase visitor counter ──
  useEffect(() => {
    const SUPABASE_URL = "https://fekyjxjavcdhjhfenwtt.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZla3lqeGphdmNkaGpoZmVud3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NDk1ODksImV4cCI6MjA5NTQyNTU4OX0.qGLcBAcclezmimxQUmo6_r3qHpAe_pTaVnacCe7dLJ8";
    async function trackVisit() {
      try {
        const getRes = await fetch(`${SUPABASE_URL}/rest/v1/visitors?select=count&id=eq.1`, { headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` } });
        const getData = await getRes.json();
        const newCount = (getData?.[0]?.count ?? 0) + 1;
        await fetch(`${SUPABASE_URL}/rest/v1/visitors?id=eq.1`, { method: "PATCH", headers: { "Content-Type": "application/json", "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`, "Prefer": "return=minimal" }, body: JSON.stringify({ count: newCount }) });
        setVisitors(newCount);
      } catch (e) { setVisitors("—"); }
    }
    trackVisit();
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(link); }, { threshold: 0.35 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Lenis smooth scroll ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ── Scroll progress + back to top ──
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const handleForm = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setFormSent(true);
      setFormData({ name: "", email: "", message: "" });
      showToast("✅ Message sent! I'll get back to you soon.");
      setTimeout(() => setFormSent(false), 4000);
    } catch (err) {
      setSendError(true);
      showToast("❌ Failed to send. Please try again.", "error");
      setTimeout(() => setSendError(false), 4000);
    } finally { setSending(false); }
  };

  return (
    <>
      {/* ── Loading Screen ── */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700;1,900&display=swap');
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.4; transform: scale(1.4); }
          }
        `}</style>

        {/* Background blobs + tech icons */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="blob-1 absolute rounded-full" style={{ width: 600, height: 600, top: "-100px", left: "-150px", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="blob-2 absolute rounded-full" style={{ width: 500, height: 500, bottom: "10%", right: "-100px", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
          <div className="blob-3 absolute rounded-full" style={{ width: 400, height: 400, top: "50%", left: "40%", background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
          {TECH_BG.map(({ Icon, top, left, size }, i) => <TechIcon key={i} Icon={Icon} top={top} left={left} size={size} index={i} />)}
        </div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="glow-text" style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }} onClick={() => scrollTo("home")}>S. Fuad</span>
            <ul style={{ display: "flex", gap: 8, listStyle: "none" }} className="hidden md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link.toLowerCase())} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, letterSpacing: 0.3, transition: "all 0.25s ease", color: activeSection === link ? "var(--purple-light)" : "var(--text-secondary)", borderBottom: activeSection === link ? "2px solid var(--purple-glow)" : "2px solid transparent", textShadow: activeSection === link ? "0 0 10px rgba(167,139,250,0.5)" : "none" }}>{link}</button>
                </li>
              ))}
            </ul>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: 8 }}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ background: "rgba(9,9,15,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "12px 0" }}>
                {NAV_LINKS.map((link) => (
                  <button key={link} onClick={() => scrollTo(link.toLowerCase())} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "12px 24px", color: activeSection === link ? "var(--purple-light)" : "var(--text-secondary)", fontSize: 15, fontWeight: 500 }}>{link}</button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Social Sidebar */}
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

        {/* HERO */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 24px 60px" }}>
          <div className="hero-two-col" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, width: "100%", flexWrap: "wrap" }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} style={{ flex: "1 1 340px" }}>
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 50, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#4ade80", letterSpacing: 0.5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80, 0 0 16px rgba(74,222,128,0.4)", display: "inline-block", animation: "pulse-dot 1.8s ease-in-out infinite" }} />
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
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
              <div className="float-anim" style={{ position: "relative", width: "clamp(240px, 30vw, 340px)" }}>
                <div style={{ position: "absolute", inset: -4, borderRadius: 24, background: "linear-gradient(135deg, #7c3aed, #2563eb, #7c3aed)", padding: 3, zIndex: 0, filter: "blur(2px)", opacity: 0.85 }} />
                <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", zIndex: 1, boxShadow: "0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(37,99,235,0.2)" }}>
                  <Image src={ownPic} alt="Md. Shadman Shakib Fuad" style={{ width: "100%", height: "auto", display: "block" }} priority />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
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

        <SkillsProgress />
        <AnimatedStats />
        <CurrentlyLearning />

        {/* ── CTA Banner ── */}
        <section style={{ position: "relative", zIndex: 1, padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              style={{
                borderRadius: 24,
                padding: "48px 40px",
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.15) 100%)",
                border: "1px solid rgba(124,58,237,0.25)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow bg */}
              <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }} viewport={{ once: true }}
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#60a5fa", marginBottom: 12 }}
              >
                Open to Opportunities
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }} viewport={{ once: true }}
                style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, color: "#f1f5f9", marginBottom: 12, lineHeight: 1.3 }}
              >
                Got a project in mind?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} viewport={{ once: true }}
                style={{ fontSize: 15, color: "#94a3b8", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}
              >
                Let&apos;s build something amazing together! I&apos;m available for freelance projects, collaborations, and full-time opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }} viewport={{ once: true }}
                style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
              >
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="glow-btn"
                  style={{ padding: "14px 32px", borderRadius: 50, background: "linear-gradient(135deg, #7c3aed, #2563eb)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 0.5, boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
                >
                  🚀 Hire Me
                </button>
                <motion.a href="/cv/shadman-cv.pdf" download
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ padding: "14px 32px", borderRadius: 50, background: "transparent", border: "1px solid rgba(124,58,237,0.4)", color: "var(--purple-light)", fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 0.5, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "border-color 0.3s ease" }}
                >
                  <FaDownload size={14} /> Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <WaveDivider />
        <ServicesSection />
        <WaveDivider flip={true} />

        {/* PROJECTS */}
        <section id="projects" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionTitle title="Featured Projects" sub="Things I've built" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
              {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <SectionTitle title="Certificates" sub="Achievements & recognitions" />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch", gap: 36, marginTop: 40 }}>
              {CERTS.map(({ img, title, desc, badge, verify }) => (
                <motion.div key={title} variants={fadeUp} className="glass-card cert-card" style={{ borderRadius: 18, width: 420, maxWidth: "100%", flexShrink: 0, display: "flex", flexDirection: "column" }}>
                  <div style={{ overflow: "hidden", borderRadius: "18px 18px 0 0", height: 230, flexShrink: 0 }}>
                    <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--purple-light)", background: "rgba(124,58,237,0.12)", borderRadius: 6, padding: "3px 10px", letterSpacing: 0.4, alignSelf: "flex-start" }}>{badge}</span>
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

        {/* ╔══════════════════════════════╗
            ║  EDUCATION TIMELINE          ║
            ╚══════════════════════════════╝ */}
        <section id="timeline" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <SectionTitle title="Education Journey" sub="My academic milestones" />
            <div style={{ position: "relative", marginTop: 50 }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #7c3aed, #2563eb, #7c3aed)", transform: "translateX(-50%)", opacity: 0.4 }} />

              {TIMELINE.map(({ year, title, subtitle, desc, result, Icon, color }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      justifyContent: isLeft ? "flex-start" : "flex-end",
                      marginBottom: 40,
                      position: "relative",
                    }}
                  >
                    {/* Card */}
                    <motion.div
                      className="glass-card"
                      whileHover={{
                        scale: 1.04,
                        boxShadow: `0 0 24px ${color}55`,
                        transition: { duration: 0.2 },
                      }}
                      style={{
                        width: "44%",
                        borderRadius: 16,
                        padding: "20px 22px",
                        position: "relative",
                        borderLeft: isLeft ? `3px solid ${color}` : "none",
                        borderRight: !isLeft ? `3px solid ${color}` : "none",
                        cursor: "default",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <Icon size={20} style={{ color }} />
                        <span style={{ fontSize: 13, fontWeight: 700, color, letterSpacing: 1 }}>{year}</span>
                      </div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-primary)", marginBottom: 3 }}>{title}</h3>
                      <p style={{ fontSize: 12, color: "var(--purple-light)", fontWeight: 600, marginBottom: 6 }}>{subtitle}</p>
                      <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 8 }}>{desc}</p>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: color, borderRadius: 20, padding: "3px 10px" }}>{result}</span>
                    </motion.div>

                    {/* Center dot */}
                    <div style={{
                      position: "absolute", left: "50%", top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 14, height: 14, borderRadius: "50%",
                      background: color,
                      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}40`,
                      zIndex: 2,
                    }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════╗
            ║  GITHUB ACTIVITY             ║
            ╚══════════════════════════════╝ */}
        <GitHubStats />

        {/* ╔══════════════════════════════╗
            ║    OPEN SOURCE               ║
            ╚══════════════════════════════╝ */}
        <section style={{ position: "relative", zIndex: 1, padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <SectionTitle title="Open Source" sub="My contributions to the community" />
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}
            >
              {[
                { title: "Portfolio Website",    desc: "My personal portfolio built with Next.js, Tailwind CSS & Framer Motion. Open source for the community.",          stars: "⭐", lang: "JavaScript", color: "#f7df1e", url: "https://github.com/Shadman-Shakib-Fuad" },
                { title: "DocAppoint",           desc: "A doctor appointment booking platform built with React & Firebase. Clean UI with real-time functionality.",       stars: "⭐", lang: "React",      color: "#61dafb", url: "https://github.com/Shadman-Shakib-Fuad" },
                { title: "Mango Bookstore",      desc: "Modern online bookstore web app built with Next.js and Tailwind CSS. Features smooth animations.",                stars: "⭐", lang: "Next.js",    color: "#fff",    url: "https://github.com/Shadman-Shakib-Fuad" },
              ].map(({ title, desc, stars, lang, color, url }) => (
                <motion.div key={title} variants={fadeUp}
                  whileHover={{ y: -5, boxShadow: "0 0 20px rgba(124,58,237,0.25)" }}
                  className="glass-card"
                  style={{ borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 12, transition: "all 0.3s ease" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{title}</h3>
                    <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-light)" }}>
                      <FaGithub size={18} />
                    </a>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, flex: 1 }}>{desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#94a3b8" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
                      {lang}
                    </span>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>{stars} Star</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ╔══════════════════════════════╗
            ║      TESTIMONIALS            ║
            ╚══════════════════════════════╝ */}
        <section style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionTitle title="What People Say" sub="Feedback from peers & collaborators" />
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 40 }}
            >
              {TESTIMONIALS.map(({ name, role, text, avatar, color }) => (
                <motion.div
                  key={name} variants={fadeUp}
                  whileHover={{ y: -5, boxShadow: `0 0 24px ${color}33` }}
                  className="glass-card"
                  style={{ borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", gap: 16, transition: "all 0.3s ease", borderTop: `3px solid ${color}` }}
                >
                  {/* Quote */}
                  <p style={{ fontSize: 32, color, lineHeight: 1, marginBottom: -8 }}>"</p>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, fontStyle: "italic" }}>{text}</p>
                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: `${color}22`, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color, flexShrink: 0 }}>
                      {avatar}
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{name}</p>
                      <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>{role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
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
              <button type="submit" disabled={sending} className="glow-btn" style={{ padding: "13px 0", borderRadius: 10, background: sending ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #2563eb)", border: "none", color: "#fff", fontWeight: 700, fontSize: 15, cursor: sending ? "not-allowed" : "pointer", letterSpacing: 0.5, transition: "all 0.3s ease", opacity: sending ? 0.7 : 1 }}>
                {sending ? "⏳ Sending..." : formSent ? "✅ Message Sent!" : sendError ? "❌ Failed! Try Again" : "Send Message"}
              </button>
            </motion.form>
          </div>
        </section>

        {/* BIOGRAPHY */}
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

        <FAQSection />
        <WaveDivider />

        {/* FOOTER */}
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
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 50, padding: "7px 18px", marginBottom: 16, fontSize: 13, color: "var(--text-secondary)" }}>
            <span style={{ fontSize: 16 }}>👁️</span>
            <span>
              {visitors !== null ? (
                <><span style={{ fontWeight: 700, color: "var(--purple-light)" }}>{typeof visitors === "number" ? visitors.toLocaleString() : visitors}</span>{" "}total visitors</>
              ) : (
                <span>Loading visitors...</span>
              )}
            </span>
          </motion.div>
          <p style={{ fontSize: 12, color: "rgba(148,163,184,0.4)" }}>© 2026 All Rights Reserved</p>
        </footer>

      {/* ── CV Preview Modal ── */}
        <AnimatePresence>
          {cvPreview && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCvPreview(false)}
              style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(6px)" }}
            >
              <motion.div
                initial={{ scale: 0.88, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{ background: "#0d0d1a", borderRadius: 20, overflow: "hidden", width: "100%", maxWidth: 800, maxHeight: "90vh", display: "flex", flexDirection: "column", border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}
              >
                {/* Modal header */}
                <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontWeight: 700, color: "var(--purple-light)", fontSize: 15 }}>📄 CV Preview</span>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a href="/cv/shadman-cv.pdf" download
                      style={{ padding: "7px 16px", borderRadius: 8, background: "linear-gradient(135deg, #7c3aed, #2563eb)", color: "#fff", fontWeight: 600, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <FaDownload size={12} /> Download
                    </a>
                    <button onClick={() => setCvPreview(false)}
                      style={{ background: "rgba(255,255,255,0.06)", border: "none", color: "#94a3b8", cursor: "pointer", borderRadius: 8, padding: "7px 12px", fontSize: 18, lineHeight: 1 }}>
                      ✕
                    </button>
                  </div>
                </div>
                {/* PDF embed */}
                <iframe src="/cv/shadman-cv.pdf" style={{ flex: 1, border: "none", minHeight: 500 }} title="CV Preview" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Toast Notification ── */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 40, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 40, x: "-50%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed", bottom: 90, left: "50%",
                zIndex: 9999,
                background: toast.type === "error" ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.15)",
                border: `1px solid ${toast.type === "error" ? "rgba(239,68,68,0.4)" : "rgba(34,197,94,0.4)"}`,
                borderRadius: 50, padding: "12px 24px",
                fontSize: 14, fontWeight: 600,
                color: toast.type === "error" ? "#fca5a5" : "#86efac",
                backdropFilter: "blur(12px)",
                boxShadow: toast.type === "error" ? "0 0 20px rgba(239,68,68,0.2)" : "0 0 20px rgba(34,197,94,0.2)",
                whiteSpace: "nowrap",
              }}
            >
              {toast.msg}
            </motion.div>
          )}
        </AnimatePresence>

        <WhatsAppButton />

      {/* ── Back to Top Button ── */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 22, mass: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                position: "fixed", bottom: 154, right: 24, zIndex: 50,
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                color: "#fff", fontSize: 20,
              }}
              whileHover={{ scale: 1.12, boxShadow: "0 0 32px rgba(124,58,237,0.7)", transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              whileTap={{ scale: 0.92 }}
              aria-label="Back to top"
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}

function SectionTitle({ title, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 8 }}>
      <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, marginBottom: 4 }}>
        <span className="glow-text">{title}</span>
      </h2>
      {sub && <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6 }}>{sub}</p>}
      <div className="section-title-line" />
    </motion.div>
  );
}