import axios from 'axios';

class SoldiersService {
    static BASE_URL = 'http://localhost:8080/Soldier';

    // Get all soldiers
    static async getAllSoldiers(token) {
        try {
            const response = await axios.get(`${SoldiersService.BASE_URL}/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get soldier by ID
    static async getSoldierById(soldierId, token) {
        try {
            const response = await axios.get(`${SoldiersService.BASE_URL}/${soldierId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Create a new soldier
    static async createSoldier(soldierData, token) {
        try {
            const response = await axios.post(`${SoldiersService.BASE_URL}/addSoldier`, soldierData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update soldier by ID
    static async updateSoldier(soldierId, soldierData, token) {
        try {
            const response = await axios.put(`${SoldiersService.BASE_URL}/${soldierId}`, soldierData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete soldier by ID
    static async deleteSoldier(soldierId, token) {
        try {
            const response = await axios.delete(`${SoldiersService.BASE_URL}/${soldierId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default SoldiersService;
