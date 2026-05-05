import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/makeSimple.png"

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

  :root {
    --blue: #3457d4;
    --blue-dark: #2543b0;
    --blue-deeper: #1a2f82;
    --blue-light: #5a7ae8;
    --blue-pale: #e8edfb;
    --blue-pale2: #c8d4f5;
    --white: #ffffff;
    --off-white: #f7f8fd;
    --text-dark: #0f1a3d;
    --text-mid: #2d3d6b;
    --text-muted: #5a6a9a;
    --green: hsl(120, 100%, 55%);
    --green-light: hsl(120, 100%, 85%);
    --green-dark: hsl(120, 80%, 30%);
    --teal: #0fb8a0;
    --teal-light: #d4f5f0;
    --card-border: rgba(52, 87, 212, 0.15);
    --shadow-card: 0 4px 24px rgba(20, 40, 120, 0.10);
    --shadow-hover: 0 12px 40px rgba(20, 40, 120, 0.18);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--blue);
    color: var(--text-dark);
    min-height: 100vh;
  }

  /* ─── NAVBAR ─── */
  .navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 3rem;
    height: 68px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(52, 87, 212, 0.45);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(255,255,255,0.14);
    box-shadow: 0 1px 24px rgba(20, 40, 120, 0.18);
    transition: background 0.3s, box-shadow 0.3s;
  }
  .navbar-scrolled {
    background: rgba(26, 47, 130, 0.88);
    box-shadow: 0 2px 32px rgba(10, 20, 80, 0.35);
  }
  .logo {
   width: 150px;
   height: 120px;
   
  }
  .logo img {
    width:100%;
    height:100%;
    object-fit:contain;
  }
  .nav-links {
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    flex: 1;
    justify-content: center;
    flex-wrap: nowrap;
  }
  .nav-links a {
    color: rgba(255,255,255,0.78);
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    padding: 0.45rem 0.9rem;
    border-radius: 100px;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
  }
  .nav-links a:hover {
    color: #fff;
    background: rgba(255,255,255,0.1);
  }
  .nav-cta {
    flex-shrink: 0;
    white-space: nowrap;
    padding: 0.55rem 1.4rem;
    background: var(--green);
    border: none;
    border-radius: 100px;
    color: #0a2a0a;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    box-shadow: 0 2px 14px rgba(0, 200, 0, 0.25);
  }
  .nav-cta:hover {
    transform: translateY(-1px);
    opacity: 0.9;
    box-shadow: 0 6px 22px rgba(0, 200, 0, 0.32);
  }

  /* ─── HERO ─── */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5.5rem 2rem 5rem;
    position: relative;
    overflow: hidden;
  }
  .hero-rings {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    pointer-events: none;
  }
  .hero-rings circle {
    fill: none;
    stroke: rgba(255,255,255,0.07);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.38rem 1.1rem;
    border-radius: 100px;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.28);
    font-size: 0.77rem;
    color: #fff;
    font-weight: 600;
    margin-bottom: 1.75rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
  }
  .badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse 2s infinite;
    flex-shrink: 0;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.5; transform:scale(1.5); }
  }
  .hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(2.4rem, 5.5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: #fff;
    max-width: 700px;
    margin-bottom: 1.35rem;
  }
  .hero h1 .highlight {
    position: relative;
    color: var(--green);
  }
  .hero > p {
    font-size: 1.08rem;
    color: rgba(255,255,255,0.82);
    max-width: 500px;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    font-weight: 400;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn-primary {
    padding: 0.9rem 2.2rem;
    background: #fff;
    border: none;
    border-radius: 100px;
    color: var(--blue);
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.15s, box-shadow 0.15s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.22);
  }
  .btn-secondary {
    padding: 0.9rem 2.2rem;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.35);
    border-radius: 100px;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s, border-color 0.2s;
    backdrop-filter: blur(8px);
  }
  .btn-secondary:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.55);
  }

  /* ─── STATS STRIP ─── */
  .stats-strip {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(255,255,255,0.1);
    border-top: 1px solid rgba(255,255,255,0.15);
    border-bottom: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
  }
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 3rem;
    border-right: 1px solid rgba(255,255,255,0.15);
  }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: 'Sora', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }
  .stat-label {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
    margin-top: 5px;
    font-weight: 500;
  }

  /* ─── SECTIONS ─── */
  .section {
    padding: 5.5rem 2rem;
  }
  .section-inner {
    max-width: 1020px;
    margin: 0 auto;
  }

  /* White wave break between hero and content sections */
  .wave-break {
    background: var(--off-white);
    clip-path: ellipse(55% 60px at 50% 0);
    height: 60px;
    margin-top: -1px;
  }

  /* The white background sections */
  .white-section {
    background: var(--off-white);
  }
  .alt-section {
    background: #fff;
  }

  .section-tag {
    display: inline-block;
    padding: 0.28rem 0.9rem;
    border-radius: 100px;
    background: var(--blue-pale);
    border: 1.5px solid var(--blue-pale2);
    color: var(--blue);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .section-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.65rem, 3vw, 2.3rem);
    font-weight: 800;
    letter-spacing: -0.8px;
    color: var(--text-dark);
    margin-bottom: 0.65rem;
    line-height: 1.2;
  }
  .section-sub {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 460px;
    line-height: 1.75;
  }

  /* ─── FEATURES GRID ─── */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
    margin-top: 3rem;
  }
  .feature-card {
    background: #fff;
    border: 1.5px solid var(--card-border);
    border-radius: 20px;
    padding: 2rem 1.75rem;
    transition: border-color 0.25s, transform 0.2s, box-shadow 0.2s;
    cursor: default;
    box-shadow: var(--shadow-card);
  }
  .feature-card:hover {
    border-color: var(--blue);
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
  .feature-icon {
    width: 50px; height: 50px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    flex-shrink: 0;
  }
  .icon-blue  { background: var(--blue-pale); }
  .icon-gold  { background: var(--green-light); }
  .icon-teal  { background: var(--teal-light); }
  .icon-purple { background: #ede8fb; }

  .feature-card h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.55rem;
  }
  .feature-card p {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.7;
  }

  /* ─── HOW IT WORKS ─── */
  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    position: relative;
  }
  .step {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.75rem;
    background: #fff;
    border: 1.5px solid var(--card-border);
    border-radius: 20px;
    box-shadow: var(--shadow-card);
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
    position: relative;
    overflow: hidden;
  }
  .step::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: var(--blue);
    border-radius: 20px 20px 0 0;
  }
  .step.step-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .step-num {
    font-family: 'Sora', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--blue-pale2);
    line-height: 1;
    margin-bottom: 1rem;
    letter-spacing: -1px;
  }
  .step h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
  }
  .step p {
    font-size: 0.87rem;
    color: var(--text-muted);
    line-height: 1.7;
  }

  /* ─── CTA ─── */
  .cta-section {
    padding: 5.5rem 2rem 6rem;
    text-align: center;
    background: var(--blue);
    position: relative;
    overflow: hidden;
  }
  .cta-rings {
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    opacity: 0.5;
  }
  .cta-box {
    display: inline-block;
    max-width: 620px;
    background: rgba(255,255,255,0.1);
    border: 1.5px solid rgba(255,255,255,0.25);
    border-radius: 28px;
    padding: 3.5rem 3rem;
    backdrop-filter: blur(16px);
    position: relative;
  }
  .cta-box h2 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.8px;
    color: #fff;
    margin-bottom: 0.9rem;
    line-height: 1.2;
  }
  .cta-box p {
    color: rgba(255,255,255,0.78);
    margin-bottom: 2.2rem;
    line-height: 1.7;
    font-size: 1rem;
  }
  .cta-btn {
    display: inline-block;
    padding: 1rem 2.75rem;
    background: #fff;
    color: var(--blue);
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.22);
  }

  /* ─── FOOTER ─── */
  footer {
    text-align: center;
    padding: 1.75rem 2rem;
    border-top: 1px solid rgba(255,255,255,0.15);
    background: var(--blue-deeper);
    color: rgba(255,255,255,0.55);
    font-size: 0.82rem;
  }
  footer a {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
  }
  footer a:hover { color: #fff; }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .navbar { padding: 1rem 1.25rem; }
    .nav-links { display: none; }
    .hero { padding: 4rem 1.25rem 3.5rem; }
    .stats-strip { flex-direction: column; }
    .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
    .stat-item:last-child { border-bottom: none; }
    .section { padding: 3.5rem 1.25rem; }
    .cta-box { padding: 2.5rem 1.5rem; }
  }
`;

interface FeatureCardProps {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}
interface StatItem {
  value: string;
  label: string;
}
interface Step {
  number: string;
  title: string;
  description: string;
}

const FEATURES: FeatureCardProps[] = [
  {
    icon: "📝",
    iconBg: "icon-blue",
    title: "Past Question Bank",
    description:
      "Practice with real past exam questions from your general university courses, organized by subject and topic.",
  },
  {
    icon: "⏱",
    iconBg: "icon-gold",
    title: "Timed Exam Mode",
    description:
      "Simulate real exam conditions with our timer-based practice. Get comfortable with exam pressure before the real thing.",
  },
  {
    icon: "📊",
    iconBg: "icon-teal",
    title: "Performance Tracking",
    description:
      "After every session, see your score, review your mistakes, and understand exactly where you need to improve.",
  },
  {
    icon: "⚡",
    iconBg: "icon-purple",
    title: "Instant Feedback",
    description:
      "Get answers and explanations right away. No waiting — understand your mistakes while the question is still fresh.",
  },
];

const STATS: StatItem[] = [
  { value: "5,000+", label: "Past Questions" },
  { value: "100%", label: "Free to Start" },
  { value: "10+", label: "General Courses" },
  { value: "Instant", label: "Results & Feedback" },
];

const STEPS: Step[] = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up for free with your email. No credit card, no long forms — done in seconds.",
  },
  {
    number: "02",
    title: "Pick your subject",
    description:
      "Select from available general university courses and choose the topic you want to practice.",
  },
  {
    number: "03",
    title: "Practice & improve",
    description:
      "Answer past questions, get instant results, and track your progress over time.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconBg,
  title,
  description,
}) => (
  <div className="feature-card">
    <div className={`feature-icon ${iconBg}`}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const StepCard: React.FC<Step & { delay: number }> = ({
  number,
  title,
  description,
  delay,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`step${visible ? " step-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="step-num">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* NAVBAR */}
        <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
          <div className="logo">
            <img src={logo}  />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#subjects">Subjects</a>
            </li>
          </ul>
          <button className="nav-cta">Start Practicing Free</button>
        </nav>

        {/* HERO — stays on blue bg */}
        <section className="hero">
          <svg
            className="hero-rings"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="200" strokeWidth="1" />
            <circle cx="300" cy="300" r="260" strokeWidth="1" />
            <circle cx="300" cy="300" r="310" strokeWidth="0.5" />
          </svg>

          <div className="badge">
            <span className="badge-dot" />
            Now live for university students
          </div>

          <h1>
            Study smarter.
            <br />
            <span className="highlight">Pass with confidence.</span>
          </h1>

          <p>
            makeSimple gives you access to past exam questions, timed practice
            sessions, and instant performance feedback — everything you need to
            walk into your exam ready.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn-primary">
              Start Practicing Free
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </section>

        {/* STATS — on blue */}
        <div className="stats-strip">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FEATURES — white bg */}
        <section className="section white-section" id="features">
          <div className="section-inner">
            <div className="section-tag">Features</div>
            <h2 className="section-title">Everything you need to prepare</h2>
            <p className="section-sub">
              Built specifically for university students taking general courses.
              No fluff, just focused exam prep.
            </p>
            <div className="features-grid">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — slightly off-white */}
        <section className="section alt-section" id="how-it-works">
          <div className="section-inner">
            <div className="section-tag">How it works</div>
            <h2 className="section-title">Up and running in 3 simple steps</h2>
            <p className="section-sub">
              No complicated setup. Just sign up and start practicing in under a
              minute.
            </p>
            <div className="steps">
              {STEPS.map((step, i) => (
                <StepCard key={step.number} {...step} delay={i * 130} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA — back to blue */}
        <section className="cta-section">
          <svg
            className="cta-rings"
            width="500"
            height="300"
            viewBox="0 0 500 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="250"
              cy="300"
              r="160"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="300"
              r="230"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </svg>
          <div className="cta-box">
            <h2>Ready to start acing your exams?</h2>
            <p>
              Join other students already using makeSimple to prepare smarter.
              It's free to get started — no excuses.
            </p>
            <button className="cta-btn">Start Practicing Now →</button>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>
            © 2025 makeSimple &nbsp;·&nbsp;
            <a href="#">Privacy</a> &nbsp;·&nbsp;
            <a href="#">Terms</a> &nbsp;·&nbsp; Built for Nigerian university
            students
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
