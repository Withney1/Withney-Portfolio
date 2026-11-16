const projects = [
  {
    title: "Withney Fashion",
    tag: "E-Commerce",
    description:
      "A luxury unisex fashion e-commerce frontend with dark editorial aesthetics. Built with cart management (Zustand), admin dashboard, auth system, product filtering, and size selector.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/Withney1",
    live: "",
    year: "2024",
  },
  {
    title: "Portfolio Website",
    tag: "Personal",
    description:
      "This portfolio — clean and minimal, built with Next.js App Router and TypeScript. Focused on fast load times and clear presentation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Withney1/Withney-Portfolio",
    live: "",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{
            fontFamily: "Fira Code, monospace",
            color: "#7C5CFC",
            fontSize: "13px",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}>
            Work
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            color: "#E8E8E8",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Projects
          </h1>
          <p style={{ color: "#888", fontSize: "15px", maxWidth: "480px", lineHeight: 1.7 }}>
            Things I&apos;ve built. Each project is a chance to solve a real problem
            with clean, maintainable code.
          </p>
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((p) => (
            <article
              key={p.title}
              style={{
                border: "1px solid #1F1F1F",
                borderRadius: "12px",
                padding: "36px",
                backgroundColor: "#0F0F0F",
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "16px",
              }}>
                <div>
                  <span style={{
                    fontFamily: "Fira Code, monospace",
                    fontSize: "11px",
                    color: "#7C5CFC",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}>
                    {p.tag} · {p.year}
                  </span>
                  <h2 style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#E8E8E8",
                    marginTop: "8px",
                  }}>
                    {p.title}
                  </h2>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#555",
                        fontSize: "13px",
                        textDecoration: "none",
                        fontFamily: "Fira Code, monospace",
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#555",
                        fontSize: "13px",
                        textDecoration: "none",
                        fontFamily: "Fira Code, monospace",
                      }}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <p style={{
                color: "#888",
                fontSize: "15px",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "620px",
              }}>
                {p.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "Fira Code, monospace",
                      fontSize: "12px",
                      color: "#7C5CFC",
                      backgroundColor: "rgba(124,92,252,0.08)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
