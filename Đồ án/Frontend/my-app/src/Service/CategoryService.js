// import axios from 'axios';
import  { axiosService } from './AxiosService';

const getAllCatgegory = async () => {
    return await axiosService.get('api/Category');
}

export {getAllCatgegory};