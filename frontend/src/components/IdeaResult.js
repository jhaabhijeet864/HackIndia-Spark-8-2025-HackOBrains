import { mentorshipStub } from '../api/stubData';
// src/components/IdeaResult.js
import React, { useState, useEffect } from 'react';
import { mentorshipStub } from '../api/stubData';

const IdeaResult = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Mimic an API call using a timeout to simulate latency
    setTimeout(() => {
      setResult(mentorshipStub);
    }, 500);
  }, []);

  return (
    <div>
      {result ? (
        <div>
          <h3>Mentorship Advice:</h3>
          <p>{result.advice}</p>
        </div>
      ) : (
        <p>Loading mentorship details...</p>
      )}
    </div>
  );
};

export default IdeaResult;