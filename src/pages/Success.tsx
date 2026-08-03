import { Link, useParams } from "react-router-dom";
import { templates } from "../data/templates";

function Success() {
  const { id } = useParams();

  const template = templates.find(
    (item) => item.id === id
  );

  if (!template) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
        }}
      >
        <h1>Template not found</h1>

        <Link to="/templates">
          Back to Templates
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "5rem 2rem",
      }}
    >
      <h1 style={{ color: "#16a34a" }}>
        🎉 Payment Successful!
      </h1>

      <p
        style={{
          margin: "1rem 0",
          color: "#64748b",
        }}
      >
        Thank you for purchasing:
      </p>

      <h2 style={{ color: "#0f172a" }}>
        {template.title}
      </h2>


      {template.download ? (
        <a
          href={template.download}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            marginTop: "1.5rem",
          }}
        >
          Download Template
        </a>
      ) : (
        <p
          style={{
            marginTop: "1.5rem",
            color: "#64748b",
          }}
        >
          Download link will be available soon.
        </p>
      )}

    </div>
  );
}

export default Success;