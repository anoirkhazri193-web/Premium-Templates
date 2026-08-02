
import { useParams, Link } from "react-router-dom";
import { templates } from "../data/templates";
import "./TemplateDetail.css";

function TemplateDetail() {
  const { id } = useParams();

  const template = templates.find(
    (item) => item.id === id
  );

  if (!template) {
    return (
      <section style={{ padding: "4rem", textAlign: "center" }}>
        <h1>Template Not Found</h1>
        <Link to="/templates" style={{ color: "#2563eb", textDecoration: "underline", marginTop: "1rem", display: "inline-block" }}>
          Back to Templates
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-page" style={{ padding: "3rem 2rem", maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      
      {/* Box mtaɛ el taswira */}
      <div className="detail-image" style={{ flex: "1", minWidth: "300px" }}>
        <div style={{ width: "100%", height: "300px", backgroundColor: "#f1f5f9", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={template.image}
            alt={template.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
  e.currentTarget.style.display = "none";
}}
          />
        </div>
      </div>

      {/* Content */}
      <div className="detail-content" style={{ flex: "1", minWidth: "300px" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#2563eb", background: "#eff6ff", padding: "0.3rem 0.6rem", borderRadius: "4px" }}>
          {template.category}
        </span>

        <h1 style={{ margin: "0.75rem 0", fontSize: "2rem", color: "#0f172a" }}>
          {template.title}
        </h1>

        <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          {template.description}
        </p>

        <h2 style={{ color: "#2563eb", fontSize: "1.75rem", marginBottom: "1.5rem" }}>
          {template.price}
        </h2>

        {/* El Boutons: Buy Template w Live Demo (rajjo7om zouz) */}
        <div className="detail-buttons" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link
            to={`/checkout/${template.id}`}
            className="buy-btn"
            style={{ backgroundColor: "#2563eb", color: "white", padding: "0.75rem 1.5rem", borderRadius: "8px", fontWeight: "600", textDecoration: "none", display: "inline-block" }}
          >
            Buy Template
          </Link>

          <Link
            to={`/demo/${template.id}`}
            className="demo-btn"
            style={{ backgroundColor: "#f1f5f9", color: "#0f172a", padding: "0.75rem 1.5rem", borderRadius: "8px", fontWeight: "600", textDecoration: "none", display: "inline-block", border: "1px solid #cbd5e1" }}
          >
            Live Demo
          </Link>
        </div>

      </div>
    </section>
  );
}

export default TemplateDetail;