// @ts-nocheck
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section WOW */}
      <section className="hero-section-wow">
        <div className="hero-content-wow">
          <span className="hero-badge-wow animate-fade-in-down">🚀 Unleash Your Digital Potential</span>
          
          <h1 className="hero-title-wow animate-fade-in-up">
            The <span className="highlight-wow">Ultimate</span> High-Performance Web Templates
          </h1>
          
          <p className="hero-description-wow animate-fade-in-up animation-delay-200">
            Stop starting from zero. Access our exclusive, handcrafted premium collection and launch your stunning, professional website in minutes.
          </p>
          
          <div className="hero-buttons-wow animate-fade-in-up animation-delay-400">
            <Link to="/templates" className="btn-wow btn-primary-wow">
              Explore Templates
            </Link>
            
            <Link to="/about" className="btn-wow btn-secondary-wow">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;