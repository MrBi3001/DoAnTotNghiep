// import axios from 'axios';
import  { axiosService } from './AxiosService';

const getBrands = async () => {
    return await axiosService.get('api/Brand');
}

export {getBrands};