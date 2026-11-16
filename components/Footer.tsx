export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #1F1F1F",
      backgroundColor: "#0D0D0D",
      padding: "40px 24px",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <span style={{ fontFamily: "Fira Code, monospace", color: "#7C5CFC", fontSize: "14px" }}>
          wb.dev
        </span>

        <span style={{ color: "#555", fontSize: "13px" }}>
          © {new Date().getFullYear()} Winner Bukola Akinrintan
        </span>

        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="https://github.com/Withney1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="mailto:winnerakeredolu@gmail.com"
            style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
