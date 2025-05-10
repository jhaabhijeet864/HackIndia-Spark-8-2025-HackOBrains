import React, { useState } from 'react';
import { analyzeVideo } from '../services/api';

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const data = await analyzeVideo(videoUrl);
      setResponse(data);
    } catch (err) {
      setError('Failed to analyze video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Analyze Your Pitch Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="video-url">Video URL</label>
          <input
            id="video-url"
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter your video URL (YouTube, Vimeo, etc.)"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="auth-button">
          {loading ? 'Analyzing...' : 'Analyze Video'}
        </button>
      </form>
      
      {error && <div className="error-message">{error}</div>}
      
      {response && (
        <div className="response" style={{ marginTop: '2rem' }}>
          <h3>Analysis Results</h3>
          <div style={{ 
            background: 'var(--background)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginTop: '1rem' 
          }}>
            {response.video_analysis}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoForm;