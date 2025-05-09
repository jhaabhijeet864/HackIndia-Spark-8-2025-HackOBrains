import React, { useState } from 'react';
import { submitIdea } from '../services/api';

const IdeaForm = () => {
  const [idea, setIdea] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const data = await submitIdea(idea);
      setResponse(data);
    } catch (err) {
      setError('Failed to submit idea. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="idea-form">
      <h2>Submit Your Hackathon Idea</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your hackathon idea..."
          rows="4"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Get Mentorship'}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      
      {response && (
        <div className="response">
          <h3>Mentorship Feedback:</h3>
          <div className="response-content">
            {response.mentorship}
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaForm;