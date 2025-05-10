import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1>HackForge</h1>
          <p>Transform your ideas into reality with AI-powered mentorship</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Get Started</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>AI Mentorship</h3>
          <p>Get personalized guidance and feedback from our advanced AI mentors to refine your ideas.</p>
        </div>
        <div className="feature-card">
          <h3>Video Analysis</h3>
          <p>Improve your pitch with our AI-powered video analysis and detailed feedback.</p>
        </div>
        <div className="feature-card">
          <h3>Project Tracking</h3>
          <p>Keep your hackathon projects organized and track your progress effectively.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;