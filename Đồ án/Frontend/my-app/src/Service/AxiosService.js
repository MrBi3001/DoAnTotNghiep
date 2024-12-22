

import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'https://localhost:44303/',
});
export const loginService = async (email, password) => {
    try {
        const response = await axiosService.post(`api/User/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

        return response;
    } catch (error) {
        throw error;
    }
};

export { axiosService };