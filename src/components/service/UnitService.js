import axios from 'axios';

class UnitService {
    static BASE_URL = 'http://localhost:8080/Unit';

    // Get all units
    static async getAllUnits(token) {
        try {
            const response = await axios.get(`${UnitService.BASE_URL}/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get unit by ID
    static async getUnitById(unitId, token) {
        try {
            const response = await axios.get(`${UnitService.BASE_URL}/${unitId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Create a new unit
    static async createUnit(unitData, token) {
        try {
            const response = await axios.post(`${UnitService.BASE_URL}/addUnit`, unitData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update unit by ID
    static async updateUnit(unitId, unitData, token) {
        try {
            const response = await axios.put(`${UnitService.BASE_URL}/updateUnit/${unitId}`, unitData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete unit by ID
    static async deleteUnit(unitId, token) {
        try {
            const response = await axios.delete(`${UnitService.BASE_URL}/deleteUnit/${unitId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default UnitService;
