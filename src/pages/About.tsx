// @ts-nocheck
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          <span className="about-badge">Who We Are</span>
          <h1>About <span className="highlight">Premium Templates</span></h1>
          <p>
            We create modern, high-performance website templates for developers, startups, and businesses. 
            Our mission is to help you build stunning web apps in record time.
          </p>
        </div>

        {/* Stats / Features Grid */}
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>100+ Templates</h3>
            <p>Carefully crafted, responsive, and ready-to-use modern designs for any project.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">⚡</div>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always here to help you troubleshoot and launch faster.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3>Quality Code</h3>
            <p>Built with clean code, modern technologies, and optimized for maximum speed.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;