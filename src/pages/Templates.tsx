import React, { useState } from "react";
import { Link } from "react-router-dom";
import { templates } from "../data/templates";
import "./Templates.css";

function Templates() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1250px", margin: "0 auto" }}>

      <div
        className="templates-search-container"
        style={{ marginBottom: "2rem" }}
      >
        <input
          type="text"
          className="templates-search-input"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >

            <div>

              {/* مكان الصورة مؤقتًا */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  background: "#f1f5f9",
                }}
              ></div>

              <div style={{ padding: "1.5rem" }}>

                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "#2563eb",
                    background: "#eff6ff",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  {template.category}
                </span>

                <h3
                  style={{
                    margin: "0.75rem 0 0.5rem 0",
                    fontSize: "1.2rem",
                    color: "#0f172a",
                  }}
                >
                  {template.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    margin: "0 0 1rem 0",
                  }}
                >
                  {template.description}
                </p>

                <div
                  style={{
                    fontWeight: "bold",
                    color: "#2563eb",
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  {template.price}
                </div>

              </div>

            </div>

            <div style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
              <Link
                to={`/templates/${template.id}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "0.6rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Buy Now
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Templates;