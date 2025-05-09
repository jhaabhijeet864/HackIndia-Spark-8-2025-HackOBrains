import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to HackForge</h1>
          <p>Your AI-powered mentor for hackathon success.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Idea Development</h3>
          <p>Transform your hackathon ideas into well-structured projects with AI guidance.</p>
        </div>
        <div className="feature-card">
          <h3>Pitch Analysis</h3>
          <p>Get feedback on your pitch videos to improve your presentation skills.</p>
        </div>
        <div className="feature-card">
          <h3>Mentor Support</h3>
          <p>Access personalized mentorship to navigate hackathon challenges.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
