import emailjs from "@emailjs/browser";
import React, { useState, type FormEvent } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_1gnhczn",
        "template_76473t5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "7xqvSr86SYtVP-Qnl"
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>
            Get in <span className="highlight">Touch</span>
          </h1>

          <p>
            Have questions about our templates or need custom design work?
            Drop us a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk business</h3>

            <p>
              We are here to help you build high-performing web applications
              faster. Reach out to our team anytime.
            </p>

            <div className="info-item">
              <span className="icon">📧</span>
              <span>support.anwer@gmail.com</span>
            </div>

            <div className="info-item">
              <span className="icon">📍</span>
              <span>Tunis, Tunisia</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success-message">
                <h3>Thank you! 🎉</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Your Email</label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>

                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;