
import { useParams, Link } from "react-router-dom";
import { templates } from "../data/templates";
import { useState } from "react";

import type { FormEvent } from "react";
function Checkout() {
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  // Nlawojo 3al template b id bch naɛrfou ech chra
  const template = templates.find((item) => item.id === id);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ color: "#16a34a", marginBottom: "1rem" }}>🎉 Thank You for Your Purchase!</h1>
        <p style={{ color: "#64748b", marginBottom: "2rem" }}>
          Your order for <strong>{template ? template.title : "Template"}</strong> has been successfully placed. We've sent the details to your email.
        </p>
        <Link to="/templates" style={{ backgroundColor: "#2563eb", color: "white", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}>
          Back to Templates
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#0f172a" }}>Checkout</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
        
        {/* Resume mtaɛ el Template */}
        <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ marginBottom: "1rem", color: "#0f172a" }}>Order Summary</h3>
          {template ? (
            <div>
              <p style={{ fontWeight: "600", fontSize: "1.1rem", color: "#1e293b" }}>{template.title}</p>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0.5rem 0 1rem 0" }}>{template.category}</p>
              <hr style={{ border: "0", borderTop: "1px solid #cbd5e1", margin: "1rem 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.25rem", fontWeight: "bold", color: "#2563eb" }}>
                <span>Total:</span>
                <span>{template.price}</span>
              </div>
            </div>
          ) : (
            <p>Template not found.</p>
          )}
        </div>

        {/* Formulaire mtaɛ el Chara */}
        <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "#0f172a" }}>Billing Details</h3>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.4rem", color: "#475569" }}>Full Name</label>
            <input type="text" required placeholder="Foulen Ben Foulen" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", outline: "none" }} />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.4rem", color: "#475569" }}>Email Address</label>
            <input type="email" required placeholder="example@gmail.com" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", outline: "none" }} />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.4rem", color: "#475569" }}>Card Number</label>
            <input type="text" required placeholder="4532 •••• •••• ••••" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", outline: "none" }} />
          </div>

          <button type="submit" style={{ marginTop: "1rem", backgroundColor: "#2563eb", color: "white", border: "none", padding: "0.75rem", borderRadius: "6px", fontWeight: "600", cursor: "pointer", fontSize: "1rem" }}>
            Confirm & Pay
          </button>
        </form>

      </div>
    </div>
  );
}

export default Checkout;