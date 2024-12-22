import React, { useState } from 'react';
import './Orders.css';

function OrdersAdmin() {
  const [orders, setOrders] = useState([
    {
      id: "#ORD001",
      customer: "John Doe",
      date: "2023-10-25",
      total: 299.99,
      status: "Pending",
      items: [
        { name: "Nike Air Max", quantity: 1, price: 129.99 },
        { name: "Adidas Shirt", quantity: 2, price: 85.00 }
      ],
      address: "123 Main St, City, Country",
      phone: "+1234567890"
    },
    {
      id: "#ORD002",
      customer: "Jane Smith",
      date: "2023-10-24",
      total: 159.99,
      status: "Delivered",
      items: [
        { name: "Running Shoes", quantity: 1, price: 159.99 }
      ],
      address: "456 Park Ave, City, Country",
      phone: "+1234567891"
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowDetails(true);
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>Orders Management</h2>
        <div className="orders-filters">
          <select className="status-filter">
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <select 
                    className={`status-select ${order.status.toLowerCase()}`}
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button 
                    className="view-btn"
                    onClick={() => viewOrderDetails(order)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetails && selectedOrder && (
        <div className="modal">
          <div className="modal-content order-details">
            <h3>Order Details - {selectedOrder.id}</h3>
            <div className="order-info">
              <div className="info-group">
                <h4>Customer Information</h4>
                <p>Name: {selectedOrder.customer}</p>
                <p>Phone: {selectedOrder.phone}</p>
                <p>Address: {selectedOrder.address}</p>
              </div>
              
              <div className="info-group">
                <h4>Order Items</h4>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="order-total">
                <h4>Total Amount: ${selectedOrder.total.toFixed(2)}</h4>
              </div>
            </div>
            <div className="modal-buttons">
              <button onClick={() => setShowDetails(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersAdmin;
