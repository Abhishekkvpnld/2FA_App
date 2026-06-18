import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: "JWT Authentication",
    desc: "Stateless, cryptographically signed tokens. No server-side session storage needed.",
    tag: "Security",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Protected Routes",
    desc: "Guard any page or API endpoint. Redirect unauthenticated users automatically.",
    tag: "Access",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 010-6.136A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Smart Validation",
    desc: "Real-time client-side checks and server-enforced rules. Errors that actually help.",
    tag: "UX",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast by Default",
    desc: "Express + Node.js backend. Sub-50ms auth checks on every request.",
    tag: "Performance",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "MongoDB Storage",
    desc: "Flexible schema, indexed queries. Scales from prototype to production.",
    tag: "Data",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-6 3.75h.008v.008H6.75V16.5z" />
      </svg>
    ),
    title: "Responsive UI",
    desc: "Pixel-perfect on every screen. Built mobile-first with Tailwind CSS.",
    tag: "Design",
  },
];

const stats = [
  { value: "10K+", label: "Active users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<50ms", label: "Auth latency" },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const lockRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0A0F1E", color: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: rgba(0,212,255,0.3); }

        .nav-glass {
          background: rgba(10,15,30,0);
          border-bottom: 1px solid transparent;
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }
        .nav-glass.scrolled {
          background: rgba(10,15,30,0.85);
          border-bottom-color: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .cyan { color: #00D4FF; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #00D4FF;
          color: #0A0F1E;
          border-radius: 10px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
          box-shadow: 0 0 0 rgba(0,212,255,0);
        }
        .btn-primary:hover {
          background: #33DDFF;
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(0,212,255,0.35);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: transparent;
          color: rgba(255,255,255,0.8);
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.12);
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .btn-ghost:hover {
          border-color: rgba(0,212,255,0.4);
          color: #00D4FF;
          background: rgba(0,212,255,0.05);
        }

        .btn-nav-ghost {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          color: rgba(255,255,255,0.65);
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .btn-nav-ghost:hover { color: #fff; background: rgba(255,255,255,0.06); }

        .btn-nav-primary {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          background: #00D4FF;
          color: #0A0F1E;
          font-size: 14px;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s, transform 0.15s;
        }
        .btn-nav-primary:hover { background: #33DDFF; transform: translateY(-1px); }

        /* Glow lock */
        .lock-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 40px;
        }
        .lock-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(0,212,255,0.3);
          animation: pulseRing 2.4s ease-in-out infinite;
        }
        .lock-ring:nth-child(2) {
          inset: -16px;
          border-color: rgba(0,212,255,0.15);
          animation-delay: 0.6s;
        }
        .lock-ring:nth-child(3) {
          inset: -32px;
          border-color: rgba(0,212,255,0.07);
          animation-delay: 1.2s;
        }
        .lock-icon {
          position: relative;
          z-index: 1;
          width: 120px;
          height: 120px;
          border-radius: 28px;
          background: linear-gradient(135deg, #0D1628, #162040);
          border: 1px solid rgba(0,212,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        /* Feature cards */
        .feat-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(0,212,255,0.04), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feat-card:hover::before { opacity: 1; }
        .feat-card:hover {
          border-color: rgba(0,212,255,0.18);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .feat-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0,212,255,0.08);
          border: 1px solid rgba(0,212,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00D4FF;
          margin-bottom: 18px;
        }

        .tag {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(0,212,255,0.1);
          color: #00D4FF;
          margin-bottom: 10px;
        }

        .stat-block {
          padding: 0 32px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .stat-block:last-child { border-right: none; }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent);
        }

        /* Headline underline */
        .highlight {
          position: relative;
          display: inline-block;
        }
        .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00D4FF, #0066FF);
          border-radius: 2px;
          opacity: 0.7;
        }

        /* Terminal badge in hero */
        .terminal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(0,212,255,0.06);
          border: 1px solid rgba(0,212,255,0.15);
          border-radius: 8px;
          font-size: 13px;
          font-family: 'SF Mono', 'Fira Code', monospace;
          color: #00D4FF;
          margin-bottom: 24px;
        }
        .terminal-dot { width: 6px; height: 6px; border-radius: 50%; background: #00D4FF; opacity: 0.7; animation: blink 1.2s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:0.7} 50%{opacity:0.1} }

        /* CTA section */
        .cta-card {
          background: linear-gradient(135deg, #0D1628 0%, #0f1f3d 50%, #0D1628 100%);
          border: 1px solid rgba(0,212,255,0.12);
          border-radius: 24px;
          padding: 72px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,212,255,0.08), transparent 65%);
          pointer-events: none;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .grid-3 { grid-template-columns: 1fr; }
          .hero-grid { flex-direction: column !important; }
          .stat-row { flex-direction: column !important; gap: 24px !important; }
          .stat-block { border-right: none; padding: 0; }
          .cta-card { padding: 48px 24px; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav-glass${scrolled ? " scrolled" : ""}`} style={{ position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #00D4FF, #0066FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" fill="none" stroke="#0A0F1E" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
              Auth<span style={{ color: "#00D4FF" }}>App</span>
            </span>
          </Link>

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <a href="#features" className="btn-nav-ghost">Features</a>
            <a href="#" className="btn-nav-ghost">Docs</a>
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />
            <Link to="/login" className="btn-nav-ghost">Log in</Link>
            <Link to="/login" className="btn-nav-primary" style={{ marginLeft: 4 }}>Get started</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 24px 100px" }}>
        {/* bg glow */}
        <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          {/* terminal badge */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="terminal-badge">
              <div className="terminal-dot" />
              npm install @authapp/core
            </div>
          </div>

          {/* Lock icon with rings */}
          <div className="lock-wrap">
            <div className="lock-ring" />
            <div className="lock-ring" />
            <div className="lock-ring" />
            <div className="lock-icon">
              <svg width="48" height="48" fill="none" stroke="#00D4FF" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>

          <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            Authentication<br />
            <span className="highlight" style={{ color: "#00D4FF" }}>done right</span>
          </h1>

          <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.65, color: "#8892A4", maxWidth: 560, margin: "24px auto 0" }}>
            JWT auth, protected routes, and real-time validation — production-ready in minutes, not months.
          </p>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link to="/register" className="btn-primary">
              Create your account
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link to="/login" className="btn-ghost">Sign in</Link>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 64 }}>
            <div className="divider" />
            <div className="stat-row" style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
              {stats.map((s) => (
                <div key={s.label} className="stat-block">
                  <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "#8892A4", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 480, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00D4FF", marginBottom: 12 }}>What's included</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Everything a secure app needs
            </h2>
            <p style={{ marginTop: 14, color: "#8892A4", lineHeight: 1.65, fontSize: 16 }}>
              No stitching together libraries. No security gaps. Just one stack that handles auth end-to-end.
            </p>
          </div>

          <div className="grid-3">
            {features.map((f) => (
              <div key={f.title} className="feat-card">
                <div className="tag">{f.tag}</div>
                <div className="feat-icon-wrap">{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8892A4", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="cta-card">
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00D4FF", marginBottom: 16 }}>Get started today</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Your users deserve<br />better auth
              </h2>
              <p style={{ color: "#8892A4", fontSize: 16, lineHeight: 1.65, maxWidth: 460, margin: "0 auto 36px" }}>
                Free to start. No credit card. Ship secure auth in an afternoon.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <Link to="/login" className="btn-primary">
                  Create free account
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link to="/login" className="btn-ghost">Already have an account</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg, #00D4FF, #0066FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" fill="none" stroke="#0A0F1E" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Auth<span style={{ color: "#00D4FF" }}>App</span></span>
          </div>
          <span style={{ fontSize: 13, color: "#4B5563" }}>© {new Date().getFullYear()} AuthApp · React · Node.js · MongoDB</span>
        </div>
      </footer>
    </div>
  );
}
