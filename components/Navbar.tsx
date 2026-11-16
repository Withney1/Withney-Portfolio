"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      borderBottom: "1px solid #1F1F1F",
      backdropFilter: "blur(12px)",
      backgroundColor: "rgba(13,13,13,0.85)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "Fira Code, monospace",
          fontSize: "15px",
          color: "#7C5CFC",
          textDecoration: "none",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}>
          wb.dev
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#E8E8E8" : "#888",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: pathname === l.href ? 500 : 400,
                transition: "color 0.2s",
                borderBottom: pathname === l.href ? "1px solid #7C5CFC" : "none",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:winnerakeredolu@gmail.com"
          style={{
            backgroundColor: "#7C5CFC",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          Hire me
        </a>
      </div>

      {/* Mobile menu (simple toggle) */}
      {menuOpen && (
        <div style={{
          backgroundColor: "#0D0D0D",
          borderTop: "1px solid #1F1F1F",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === l.href ? "#7C5CFC" : "#888",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
