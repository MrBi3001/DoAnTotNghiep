import React from "react";
import Table from "react-bootstrap/Table";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartService } from "../../Service/CartService";
import { useNavigate } from 'react-router-dom';

function Cart({ laptopType }) {
  // const navigate = useNavigate();

  // const handleAddToCart = () => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     navigate("/login");
  //     return;
  //   }
  //   // Add to cart logic here
  // };
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        const userId = parseInt(user.userID);
        // console.log(userId);
        const response = await CartService.getCartByUserId(userId);
        setCartItems(
          response.data.details.map((item) => ({
            ...item,
            selected: false,
          }))
        );
        setTotalAmount(response.data.totalAmount);
      } catch (error) {
        toast.error("Error loading cart data");
      }
    };

    fetchCartData();
  }, []);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setCartItems(
      cartItems.map((item) => ({
        ...item,
        selected: isChecked,
      }))
    );
  };

  const handleSelectItem = (cartDetailID) => {
    const updatedItems = cartItems.map((item) =>
      item.cartDetailID === cartDetailID
        ? { ...item, selected: !item.selected }
        : item
    );
    setCartItems(updatedItems);
    setSelectAll(updatedItems.every((item) => item.selected));
  };

  const validateQuantity = (newQuantity, productStock) => {
    if (newQuantity > productStock) {
      alert(`Số lượng sản phẩm trong kho chỉ còn ${productStock}!`);
      return false;
    }
    return true;
  };

  const handleIncrement = (cartDetailID) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.cartDetailID === cartDetailID) {
          const newQuantity = item.quantity + 1;
          if (!validateQuantity(newQuantity, item.stockQuantity)) {
            return item;
          }
          const updatedItem = {
            ...item,
            // cartDetailID: item.cartDetailID,
            quantity: newQuantity,
            subTotal: item.price * newQuantity,
          };
          // console.log(newQuantity);
          // Update quantity in backend
          CartService.updateCartItem({
            cartDetailID: item.cartDetailID,
            quantity: newQuantity,
          });

          return updatedItem;
        }
        return item;
      })
    );
  };

  const handleDecrement = (cartDetailID) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.cartDetailID === cartDetailID && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          // if (!validateQuantity(newQuantity, item.stockQuantity)) {
          //   return item;
          // }
          const updatedItem = {
            ...item,
            quantity: newQuantity,
            subTotal: item.price * newQuantity,
          };

          // Update quantity in backend
          CartService.updateCartItem({
            cartDetailID: cartDetailID,
            quantity: newQuantity,
          });

          return updatedItem;
        }
        return item;
      })
    );
  };
  const handleQuantityChange = (cartDetailID, value) => {
    const newQuantity = parseInt(value) || 1;

    setCartItems(
      cartItems.map((item) => {
        if (item.cartDetailID === cartDetailID) {
          const updatedItem = { ...item, quantity: newQuantity };
          updatedItem.subTotal = updatedItem.price * newQuantity;

          // Call API to update quantity
          CartService.updateCartItem({
            cartDetailID: cartDetailID,
            quantity: newQuantity,
          });

          return updatedItem;
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDeleteItem = async (cartDetailID) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
      try {
        await CartService.deleteCartItem(cartDetailID);
        setCartItems(cartItems.filter(item => item.cartDetailID !== cartDetailID));
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
      } catch (error) {
        toast.error('Không thể xóa sản phẩm. Vui lòng thử lại');
      }
    }
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter(item => item.selected);
    
    if (selectedItems.length === 0) {
        toast.warning("Vui lòng chọn sản phẩm để thanh toán");
        return;
    }

    // Calculate total amount for selected items
    const totalAmount = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Prepare order items data
    const orderItems = selectedItems.map(item => ({
        productID: item.productID,
        quantity: item.quantity,
        price: item.price,
        productName: item.productName,
        image: item.image,
        subTotal: item.subTotal
    }));

    // Navigate to checkout page with selected items and total
    navigate('/checkout', { 
        state: { 
            selectedItems: orderItems,
            totalAmount: totalAmount
        } 
    });
};

  return (
    <div>
      <div className="way">
        <Link to="/" className="link_way">
          Trang chủ
        </Link>
        <span className="icon">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <Link to="/Product" className="link_way">
          Product
        </Link>
        {laptopType != "Product" && (
          <span>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span>{laptopType}</span>
          </span>
        )}
      </div>

      <div className="cart_table">
        <table className="table_detail">
          <thead>
            <tr>
              <th className="table_checkbox">
                <input
                  type="checkbox"
                  className="select-all"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="table_id">STT</th>
              <th>SẢN PHẨM</th>
              <th>ĐƠN GIÁ</th>
              <th>SỐ LƯỢNG</th>
              <th>THÀNH TIỀN</th>
              <th>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.cartDetailID}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.cartDetailID)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>
                  <div className="product-info">
                    <img src={item.image} alt={item.productName} />
                    <div className="product-details">
                      <h4>{item.productName}</h4>
                      <p>Mã SP: SP00{item.productID}</p>
                    </div>
                  </div>
                </td>
                <td>{item.price.toLocaleString()}đ</td>
                <td>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.cartDetailID)}>
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.cartDetailID, e.target.value)
                      }
                    />
                    <button onClick={() => handleIncrement(item.cartDetailID)}>
                      +
                    </button>
                  </div>
                </td>
                <td>{item.subTotal.toLocaleString()}đ</td>
                <td>
                  <button className="delete-btn"
                  onClick={() => handleDeleteItem(item.cartDetailID)}
                  >Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <div className="summary-row">
            <div className="summary-label">
              Tổng thanh toán (
              {cartItems.filter((item) => item.selected).length} sản phẩm):
            </div>
            <div className="summary-value">
              {calculateTotal().toLocaleString()}đ
            </div>
          </div>
          <button className="checkout-btn"
          onClick={handleCheckout}
          >Thanh toán Thanh toán ({cartItems.filter((item) => item.selected).length} sản phẩm)</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
