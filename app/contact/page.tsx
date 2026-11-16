"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Opens default email client with pre-filled details
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:winnerakeredolu@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputStyle = {
    width: "100%",
    backgroundColor: "#141414",
    border: "1px solid #1F1F1F",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#E8E8E8",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    outline: "none",
  };

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{
            fontFamily: "Fira Code, monospace",
            color: "#7C5CFC",
            fontSize: "13px",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}>
            Get in touch
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            color: "#E8E8E8",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Let&apos;s work together
          </h1>
          <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7 }}>
            I&apos;m open to frontend roles, freelance projects, and collaborations.
            Drop me a message and I&apos;ll get back to you.
          </p>
        </div>

        {sent ? (
          <div style={{
            border: "1px solid rgba(124,92,252,0.3)",
            borderRadius: "12px",
            padding: "40px",
            textAlign: "center",
            backgroundColor: "rgba(124,92,252,0.05)",
          }}>
            <p style={{ fontSize: "20px", color: "#E8E8E8", fontWeight: 600, marginBottom: "8px" }}>
              Message sent ✓
            </p>
            <p style={{ color: "#888", fontSize: "14px" }}>
              Your email client should have opened. Talk soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                Message
              </label>
              <textarea
                required
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#7C5CFC",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "13px 28px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                alignSelf: "flex-start",
              }}
            >
              Send message
            </button>

          </form>
        )}

        {/* Alternate contact */}
        <div style={{
          marginTop: "48px",
          paddingTop: "32px",
          borderTop: "1px solid #1F1F1F",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ fontSize: "12px", color: "#555", marginBottom: "6px", fontFamily: "Fira Code, monospace", letterSpacing: "0.08em" }}>
              EMAIL
            </p>
            <a
              href="mailto:winnerakeredolu@gmail.com"
              style={{ color: "#E8E8E8", fontSize: "14px", textDecoration: "none" }}
            >
              winnerakeredolu@gmail.com
            </a>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#555", marginBottom: "6px", fontFamily: "Fira Code, monospace", letterSpacing: "0.08em" }}>
              GITHUB
            </p>
            <a
              href="https://github.com/Withney1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E8E8E8", fontSize: "14px", textDecoration: "none" }}
            >
              github.com/Withney1
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
