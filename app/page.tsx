import Link from "next/link";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Zustand", "Git", "Figma",
];

const featuredProjects = [
  {
    title: "Withney Fashion",
    tag: "E-Commerce",
    description:
      "A luxury unisex fashion e-commerce frontend. Dark editorial aesthetic with cart management, admin dashboard, auth system, and product filtering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/Withney1",
    live: "",
  },
];

export default function Home() {
  return (
    <div style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "96px 24px 80px",
      }}>
        <p style={{
          fontFamily: "Fira Code, monospace",
          color: "#7C5CFC",
          fontSize: "14px",
          marginBottom: "20px",
          letterSpacing: "0.08em",
        }}>
          Hello, I&apos;m
        </p>

        <h1 style={{
          fontSize: "clamp(40px, 6vw, 72px)",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#E8E8E8",
          marginBottom: "16px",
          letterSpacing: "-0.02em",
        }}>
          Winner Bukola
          <br />
          <span style={{ color: "#555" }}>Akinrintan</span>
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "#888",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}>
          Frontend developer building clean, modern web experiences.
          I turn designs into fast, accessible products.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/projects"
            style={{
              backgroundColor: "#7C5CFC",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            View Projects
          </Link>
          <a
            href="mailto:winnerakeredolu@gmail.com"
            style={{
              border: "1px solid #333",
              color: "#E8E8E8",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 400,
              textDecoration: "none",
            }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Skills */}
      <section style={{
        borderTop: "1px solid #1F1F1F",
        borderBottom: "1px solid #1F1F1F",
        padding: "48px 24px",
        backgroundColor: "#0F0F0F",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Fira Code, monospace",
            color: "#555",
            fontSize: "12px",
            letterSpacing: "0.1em",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}>
            Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  border: "1px solid #1F1F1F",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: "#888",
                  fontFamily: "Fira Code, monospace",
                  backgroundColor: "#141414",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#E8E8E8" }}>
            Featured Work
          </h2>
          <Link href="/projects" style={{ color: "#7C5CFC", fontSize: "14px", textDecoration: "none" }}>
            All projects →
          </Link>
        </div>

        {featuredProjects.map((p) => (
          <div
            key={p.title}
            style={{
              border: "1px solid #1F1F1F",
              borderRadius: "12px",
              padding: "36px",
              backgroundColor: "#0F0F0F",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
              <div>
                <span style={{
                  fontFamily: "Fira Code, monospace",
                  fontSize: "11px",
                  color: "#7C5CFC",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#E8E8E8", marginTop: "6px" }}>
                  {p.title}
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#555", fontSize: "13px", textDecoration: "none" }}>
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#555", fontSize: "13px", textDecoration: "none" }}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px", maxWidth: "600px" }}>
              {p.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {p.tech.map((t) => (
                <span key={t} style={{
                  fontFamily: "Fira Code, monospace",
                  fontSize: "12px",
                  color: "#7C5CFC",
                  backgroundColor: "rgba(124,92,252,0.08)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{
        borderTop: "1px solid #1F1F1F",
        padding: "80px 24px",
        textAlign: "center",
        backgroundColor: "#0F0F0F",
      }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 600, color: "#E8E8E8", marginBottom: "16px" }}>
          Open to opportunities
        </h2>
        <p style={{ color: "#888", fontSize: "15px", marginBottom: "32px" }}>
          I&apos;m actively looking for frontend roles and freelance projects.
        </p>
        <a
          href="mailto:winnerakeredolu@gmail.com"
          style={{
            backgroundColor: "#7C5CFC",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Let&apos;s talk
        </a>
      </section>
    </div>
  );
}
