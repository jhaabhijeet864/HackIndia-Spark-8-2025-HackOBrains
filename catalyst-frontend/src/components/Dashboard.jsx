import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data loading
    setTimeout(() => {
      setStats({
        totalProjects: 12,
        activeProjects: 5,
        completedProjects: 7
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{stats.totalProjects}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h3>{stats.activeProjects}</h3>
              <p>Active Projects</p>
            </div>
            <div className="stat-card">
              <h3>{stats.completedProjects}</h3>
              <p>Completed Projects</p>
            </div>
          </div>

          <div className="form-container">
            <h2>Quick Actions</h2>
            <button 
              className="auth-button"
              onClick={() => navigate('/analyze')}
              style={{ marginBottom: '1rem' }}
            >
              Analyze New Video
            </button>
            <button 
              className="auth-button"
              onClick={() => navigate('/mentorship')}
            >
              Get AI Mentorship
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;