import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const submitIdea = async (idea) => {
    try {
        const response = await axios.post(`${API_URL}/MENTORSHIP`, { idea });
        return response.data;
    } catch (error) {
        console.error('Error submitting idea:', error);
        throw error;
    }
};

export const analyzeVideo = async (videoUrl) => {
    try {
        const response = await axios.post(`${API_URL}/analyze-video`, { videoUrl });
        return response.data;
    } catch (error) {
        console.error('Error analyzing video:', error);
        throw error;
    }
};
