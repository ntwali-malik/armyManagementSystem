import axios from "axios";

class UsersService{
    static BASE_URL = "http://localhost:8080"

    // Login
    static async login(email,password){
        try {
            const response = await axios.post(`${UsersService.BASE_URL}/auth/login`,{email, password})
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Registration For User
    static async register(userData,token){
        try {
            const response = await axios.post(`${UsersService.BASE_URL}/auth/login`,userData,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Displaying All Users
    static async getAllUsers(token){
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/admin/get-all-users`,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Getting User Information/Profile
    static async getYourProfile(token){
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/adminuser/get-profile`,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Displaying User By ID
    static async getUserById(userId,token){
        try {
            const response = await axios.get(`${UsersService.BASE_URL}/admin/get-users/${userId}`,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Deleting User
    static async deleteUser(userId,token){
        try {
            const response = await axios.delete(`${UsersService.BASE_URL}/admin/delete/${userId}`,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    //Updating User
    static async updateUser(userId,userData,token){
        try {
            const response = await axios.put(`${UsersService.BASE_URL}/admin/update/${userId}`,userData,
        {
            headers: {Authorization: `Bearer ${token}`}
        })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**AUTHENTICATION CHECKER */

    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }
    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UsersService;