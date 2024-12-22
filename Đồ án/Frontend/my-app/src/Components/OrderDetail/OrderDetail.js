import React, { useState, useEffect } from 'react';
import styles from './OrderDetail.module.scss';
import OrderService from '../../Service/OrderService';

function OrderDetail({ orderId }) {
    const [orderDetail, setOrderDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                const response = await OrderService.getOrderById(orderId);
                setOrderDetail(response.data);
                console.log('Order details:', response.data);
            } catch (error) {
                console.log('Error fetching order details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetail();
    }, [orderId]);

    if (loading) return <div className={styles.loading}>Loading order details...</div>;
    if (!orderDetail) return <div className={styles.error}>Order not found</div>;

    return (
        <div className={styles.order_detail_container}>
            <h2>Order Details #{orderDetail.orderID}</h2>
            
            <div className={styles.order_info_section}>
                <div className={styles.info_group}>
                    <h3>Order Information</h3>
                    <p>Order Date: {new Date(orderDetail.orderDate).toLocaleString()}</p>
                    <p>Total Amount: {orderDetail.totalAmount?.toLocaleString('vi-VN')}₫</p>
                </div>
                
                <div className={styles.info_group}>
                    <h3>Customer Information</h3>
                    <p>Name: {orderDetail.userName}</p>
                    <p>User ID: {orderDetail.userID}</p>
                </div>
            </div>

            <div className={styles.items_section}>
                <h3>Order Items</h3>
                <div className={styles.items_list}>
                    {orderDetail.products?.map((item, index) => (
                        <div key={index} className={styles.item_card}>
                            <img src={item.productImage} alt={item.productName} />
                            <div className={styles.item_info}>
                                <h4>{item.productName}</h4>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price?.toLocaleString('vi-VN')}₫</p>
                                <p>Subtotal: {(item.price && item.quantity) ? (item.price * item.quantity).toLocaleString('vi-VN') : 0}₫</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
