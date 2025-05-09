import axios from 'axios';
import { mentorshipStub, pitchAnalysisStub } from './stubData';

import { fetchMentorshipDetails } from '../api/apiService';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
export const fetchMentorshipDetails = async (ideaText) => {
  // For real endpoint integration, replace the following with:
  // return axios.post(`${API_BASE_URL}/mentorship`, { idea: ideaText });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mentorshipStub });
    }, 500);
  });
};

export const analyzePitchVideo = async (videoUrl) => {
  // Similarly, swap with actual axios call later:
  // return axios.post(`${API_BASE_URL}/analyze-video`, { videoUrl });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: pitchAnalysisStub });
    }, 500);
  });
};

useEffect(() => {
  fetchMentorshipDetails('My idea').then(response => {
    setResult(response.data);
  });
}, []);