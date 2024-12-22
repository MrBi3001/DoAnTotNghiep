import { axiosService } from './AxiosService';

export const OrderService = {
    createOrder: async (userId, paymentMethodId, orderItems) => {
        return await axiosService.post(`/api/Order/create?userId=${userId}&paymentMethodId=${paymentMethodId}`, orderItems);
    },

    getOrdersByUserId: async (userId) => {
        return await axiosService.get(`/api/Order/user/${userId}`);
    },

    getOrderById: async (orderId) => {
        console.log(orderId);
        return await axiosService.get(`/api/Order/${orderId}`);
    },

    getTotalOrderSold: async () => {
        return await axiosService.get(`api/Order/TotalOrdersSold`);
    },
    
    getTotalRevenue: async () => {
        return await axiosService.get(`api/Order/TotalRevenue`);
    }
};

export default OrderService;
