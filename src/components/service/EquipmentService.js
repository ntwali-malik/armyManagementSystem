import axios from 'axios';

class EquipmentService {
    static BASE_URL = 'http://localhost:8080/Equipment';

    // Get all equipment
    static async getAllEquipment(token) {
        try {
            const response = await axios.get(`${EquipmentService.BASE_URL}/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get equipment by ID
    static async getEquipmentById(equipmentID, token) {
        try {
            const response = await axios.get(`${EquipmentService.BASE_URL}/${equipmentID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Create new equipment
    static async createEquipment(equipmentData, token) {
        try {
            const response = await axios.post(`${EquipmentService.BASE_URL}/addEquipment`, equipmentData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update existing equipment
    static async updateEquipment(equipmentID, equipmentData, token) {
        try {
            const response = await axios.put(`${EquipmentService.BASE_URL}/updateEquipment/${equipmentID}`, equipmentData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete existing equipment
    static async deleteEquipment(equipmentID, token) {
        try {
            const response = await axios.delete(`${EquipmentService.BASE_URL}/deleteEquipment/${equipmentID}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default EquipmentService;
