import { axiosService } from './AxiosService';


const getUserById = async (userId) => {
    return await axiosService.get(`/user/${userId}`);
}

const updateUser = async (userId, userData) => {
    return await axiosService.put(`api/User`, userData);
};

const getAllUsers = async () => {
    return await axiosService.get(`api/user`);
}

export {getUserById, updateUser, getAllUsers};