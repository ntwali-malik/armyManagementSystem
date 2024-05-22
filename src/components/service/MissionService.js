import axios from 'axios';

class MissionService {
    static BASE_URL = 'http://localhost:8080/Mission';

    // Get all missions
    static async getAllMissions(token) {
        try {
            const response = await axios.get(`${MissionService.BASE_URL}/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get mission by ID
    static async getMissionById(missionID, token) {
        try {
            const response = await axios.get(`${MissionService.BASE_URL}/${missionID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Create a new mission
    static async createMission(missionData, token) {
        try {
            const response = await axios.post(`${MissionService.BASE_URL}/addMission`, missionData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update an existing mission
    static async updateMission(missionID, missionData, token) {
        try {
            const response = await axios.put(`${MissionService.BASE_URL}/updateMission/${missionID}`, missionData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete an existing mission
    static async deleteMission(missionID, token) {
        try {
            const response = await axios.delete(`${MissionService.BASE_URL}/deleteMission/${missionID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default MissionService;
