import React, { useState, useEffect } from 'react';
import styles from './Orders.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCircleCheck, faTruck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import OrderService from '../../Service/OrderService';
import OrderDetail from '../OrderDetail/OrderDetail';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = parseInt(user.userID);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await OrderService.getOrdersByUserId(userId);
                setOrders(response.data || []);
            } catch (error) {
                console.log('Error fetching orders:', error);
                setOrders([]);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    const handleViewDetails = (orderId) => {
        setSelectedOrderId(orderId);
        setShowModal(true);
    };

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
        pageNumbers.push(i);
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered':
                return <FontAwesomeIcon icon={faCircleCheck} className={styles.status_delivered} />;
            case 'In Transit':
                return <FontAwesomeIcon icon={faTruck} className={styles.status_transit} />;
            case 'Processing':
                return <FontAwesomeIcon icon={faSpinner} className={styles.status_processing} />;
            default:
                return <FontAwesomeIcon icon={faBox} />;
        }
    };

    if (loading) {
        return <div className={styles.loading}>Loading orders...</div>;
    }

    if (!orders || orders.length === 0) {
        return <div className={styles.no_orders}>No orders found</div>;
    }

    return (
        <div className={styles.orders_container}>
            <div className={styles.orders_header}>
                <h1>My Orders</h1>
            </div>

            <div className={styles.orders_list}>
                {currentOrders.map((order) => (
                    <div key={order.orderID} className={styles.order_card}>
                        <div className={styles.order_header}>
                            <div className={styles.order_info}>
                                <h3>Order #{order.orderID}</h3>
                                <span className={styles.order_date}>
                                    {new Date(order.orderDate).toLocaleDateString()}
                                </span>
                            </div>
                            <div className={styles.order_status}>
                                {getStatusIcon(order.status)}
                                <span>{order.status}</span>
                            </div>
                        </div>

                        {/* <div className={styles.order_items}>
                            {order.orderDetails?.map((item, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.item_image}>
                                        <img src={item.productImage} alt={item.productName} />
                                    </div>
                                    <div className={styles.item_details}>
                                        <h4>{item.productName}</h4>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className={styles.item_price}>{item.price?.toLocaleString('vi-VN')}₫</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <div className={styles.order_footer}>
                            <div className={styles.order_total}>
                                <span>Total:</span>
                                <span className={styles.total_amount}>{order.totalAmount?.toLocaleString('vi-VN')}₫</span>
                            </div>
                            <button 
                                onClick={() => handleViewDetails(order.orderID)} 
                                className={styles.view_details}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`${styles.page_button} ${currentPage === number ? styles.active : ''}`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>

            {showModal && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal_content}>
                        <button 
                            className={styles.close_button}
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>
                        <OrderDetail orderId={selectedOrderId} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Orders;
