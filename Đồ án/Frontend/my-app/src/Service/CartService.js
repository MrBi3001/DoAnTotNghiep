import { axiosService } from './AxiosService';

const getCartByUserId = async (userId) => {
    return await axiosService.get(`api/Cart/${userId}`);
}

const updateCartItem = async (cartData) => {
    return await axiosService.put(`api/cart/update/${cartData.cartDetailID}?quantity=${cartData.quantity}`);
}


const deleteCartItem = async (cartDetailId) => {
    return await axiosService.delete(`api/Cart/remove/${cartDetailId}`);
}

const addToCart = async (cartData) => {
    console.log(cartData);
    return await axiosService.post(`api/Cart/add?userId=${cartData.userId}&productId=${cartData.productId}&quantity=${cartData.quantity}`);
}

export const CartService = {
    getCartByUserId,
    updateCartItem,
    deleteCartItem,
    addToCart
};
