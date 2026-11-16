const experience = [
  {
    role: "Frontend Developer",
    org: "Withney Fashion (Freelance)",
    period: "2024 — Present",
    summary:
      "Built the full e-commerce frontend from scratch. Designed the architecture, implemented cart + auth state management, admin dashboard, and deployed on Railway.",
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  Styling: ["Tailwind CSS", "CSS Modules", "Inline Styles"],
  "State & Tools": ["Zustand", "Git & GitHub", "Figma", "VS Code"],
};

export default function About() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "64px", maxWidth: "580px" }}>
          <p style={{
            fontFamily: "Fira Code, monospace",
            color: "#7C5CFC",
            fontSize: "13px",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}>
            About me
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            color: "#E8E8E8",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Who I am
          </h1>
          <p style={{ color: "#888", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            I&apos;m Winner Bukola Akinrintan — a frontend developer focused on
            building fast, clean, and usable web products. I write React and
            Next.js, and I care about both the code and the design.
          </p>
          <p style={{ color: "#888", fontSize: "16px", lineHeight: 1.8 }}>
            Currently open to frontend roles and freelance work. Based in Doha Qatar,
            available globally.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          marginBottom: "64px",
        }}>

          {/* Skills */}
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#E8E8E8", marginBottom: "24px" }}>
              Skills
            </h2>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: "24px" }}>
                <p style={{
                  fontFamily: "Fira Code, monospace",
                  fontSize: "11px",
                  color: "#555",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}>
                  {category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((s) => (
                    <span key={s} style={{
                      border: "1px solid #1F1F1F",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontSize: "13px",
                      color: "#888",
                      fontFamily: "Fira Code, monospace",
                      backgroundColor: "#141414",
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#E8E8E8", marginBottom: "24px" }}>
              Experience
            </h2>
            {experience.map((e) => (
              <div
                key={e.role}
                style={{
                  borderLeft: "2px solid #7C5CFC",
                  paddingLeft: "20px",
                  marginBottom: "32px",
                }}
              >
                <p style={{ fontFamily: "Fira Code, monospace", fontSize: "11px", color: "#555", marginBottom: "6px" }}>
                  {e.period}
                </p>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#E8E8E8", marginBottom: "4px" }}>
                  {e.role}
                </h3>
                <p style={{ fontSize: "13px", color: "#7C5CFC", marginBottom: "10px" }}>
                  {e.org}
                </p>
                <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.7 }}>
                  {e.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div style={{
          borderTop: "1px solid #1F1F1F",
          paddingTop: "40px",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <a
            href="mailto:winnerakeredolu@gmail.com"
            style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}
          >
            winnerakeredolu@gmail.com
          </a>
          <a
            href="https://github.com/Withney1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}
          >
            github.com/Withney1
          </a>
        </div>

      </div>
    </div>
  );
}
