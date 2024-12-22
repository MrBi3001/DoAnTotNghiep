import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { OrderService } from "../../Service/OrderService";
// import { UserService } from '../../Service/UserService';
import { getUserById } from "../../Service/UserService";
import { toast } from "react-toastify";
import "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItems] = useState(location.state?.selectedItems || []);
  const [paymentMethod, setPaymentMethod] = useState(2);
  const totalAmount = location.state?.totalAmount || 0;
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    address: "",
    note: "",
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = parseInt(user.userID);
        const response = await getUserById(userId);
        const userData = response.data;
        console.log(userData);
        setShippingInfo({
          fullName: userData.name || "",
          phone: userData.phoneNumber || "",
          address: userData.address || "",
          note: "",
        });
      } catch (error) {
        toast.error("Không thể tải thông tin người dùng");
      }
    };

    loadUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await OrderService.createOrder(
        user.userID,
        paymentMethod,
        {
          items: selectedItems,
          shippingInfo: shippingInfo,
        }
      );

      if (response.data) {
        toast.success("Đặt hàng thành công!");
        navigate("/order-success", {
          state: { orderId: response.data.orderId },
        });
      }
    } catch (error) {
      toast.error("Đặt hàng thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <div className="checkout-container">
      <div className="back-button">
        <Link to="/cart" className="back-to-cart">
          ← Quay về giỏ hàng
        </Link>
      </div>

      <div className="checkout-content">
        <div className="checkout-left">
          <h2>Thông tin giao hàng</h2>
          <form onSubmit={handleSubmitOrder}>
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                name="fullName"
                value={shippingInfo.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ghi chú</label>
              <textarea
                name="note"
                value={shippingInfo.note}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        <div className="checkout-right">
          <h2>Đơn hàng của bạn</h2>
          <div className="order-summary">
            {selectedItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.productName} />
                <div className="item-details">
                  <h4>{item.productName}</h4>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Giá: {item.price.toLocaleString()}đ</p>
                </div>
              </div>
            ))}
          </div>
          <div className="payment-section">
            <h3>Phương thức thanh toán</h3>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(Number(e.target.value))}
            >
              <option value={1}>Thanh toán khi nhận hàng (COD)</option>
              <option value={2}>Thanh toán qua VNPAY</option>
            </select>
          </div>
          <div className="order-total">
            <h3>Tổng tiền: {totalAmount.toLocaleString()}đ</h3>
            <button onClick={handleSubmitOrder} className="submit-order-btn">
              Xác nhận đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
