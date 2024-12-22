

// import axios from 'axios';
import  { axiosService } from './AxiosService';

const getAllProducts = async () => {
    return await axiosService.get('api/Product');
}

const getProductByCategory1 = async () => {
    return await axiosService.get(`api/Product/ByCategory/108`);
}

const getProductByCategory2 = async () => {
    return await axiosService.get(`api/Product/ByCategory/104`);
}

const getProductByCategory3 = async () => {
    return await axiosService.get(`api/Product/ByCategory/101`);
}

const getProductByID = async (id) => {
    return await axiosService.get(`api/Product/${id}`);
}

const insertProduct = async (product) => {
    return await axiosService.post(`api/Product`, product);
}

const updateProduct = async (product) => {
    return await axiosService.put(`api/Product`, product);
}
export {getAllProducts ,  getProductByCategory1 ,getProductByCategory2 ,getProductByCategory3 ,getProductByID, insertProduct, updateProduct};