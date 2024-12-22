import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function OrderSuccess() {
    return (
        <div className="order-success-container">
            <div className="success-content">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h1>Đặt hàng thành công!</h1>
                <p>Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi.</p>
                <p>Đơn hàng của bạn sẽ được xử lý và giao đến trong thời gian sớm nhất.</p>
                <div className="action-buttons">
                    <Link to="/" className="home-button">
                        Về trang chủ
                    </Link>
                    <Link to="/orders" className="order-button">
                        Xem đơn hàng
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
