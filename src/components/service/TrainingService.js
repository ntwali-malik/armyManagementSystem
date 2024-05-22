import axios from 'axios';

class TrainingService {
    static BASE_URL = 'http://localhost:8080/Training';

    // Get all training sessions
    static async getAllTraining(token) {
        try {
            const response = await axios.get(`${TrainingService.BASE_URL}/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get training by ID
    static async getTrainingById(trainingID, token) {
        try {
            const response = await axios.get(`${TrainingService.BASE_URL}/${trainingID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Create new training session
    static async createTraining(trainingData, token) {
        try {
            const response = await axios.post(`${TrainingService.BASE_URL}/add`, trainingData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update existing training session
    static async updateTraining(trainingID, trainingData, token) {
        try {
            const response = await axios.put(`${TrainingService.BASE_URL}/updateTraining/${trainingID}`, trainingData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete existing training session
    static async deleteTraining(trainingID, token) {
        try {
            const response = await axios.delete(`${TrainingService.BASE_URL}/deleteTraining/${trainingID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default TrainingService;
