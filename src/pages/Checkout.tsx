import { useParams, Link } from "react-router-dom";
import { templates } from "../data/templates";
import { paypalButtons } from "../data/paypalButtons";
import { useEffect } from "react";

function Checkout() {
  const { id } = useParams();

  const template = templates.find((item) => item.id === id);

  useEffect(() => {
    const buttonId = paypalButtons[id || ""];

    // @ts-ignore
    if (window.paypal && buttonId) {
      const container = document.querySelector("#paypal-container");

      if (container) {
        container.innerHTML = "";

        // @ts-ignore
        window.paypal.HostedButtons({
          hostedButtonId: buttonId,
        }).render("#paypal-container");
      }
    }
  }, [id]);


  if (!template) {
    return (
      <div style={{ textAlign: "center", padding: "5rem" }}>
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
        padding: "3rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >

      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#0f172a",
        }}
      >
        Checkout
      </h1>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >


        {/* Order Summary */}

        <div
          style={{
            background: "#f8fafc",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >

          <h3>
            Order Summary
          </h3>


          <p
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
            }}
          >
            {template.title}
          </p>


          <p style={{ color: "#64748b" }}>
            {template.category}
          </p>


          <hr />


          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#2563eb",
            }}
          >

            <span>
              Total:
            </span>

            <span>
              {template.price}
            </span>

          </div>


        </div>



        {/* PayPal */}

        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >

          <h3 style={{ marginBottom: "1rem" }}>
            Pay with PayPal
          </h3>


          <div id="paypal-container"></div>



          {/* Download */}

<div id="paypal-container"></div>


        </div>


      </div>


    </div>
  );
}


export default Checkout;