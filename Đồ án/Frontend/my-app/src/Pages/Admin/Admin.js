import React from "react";
import "./Admin.css";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./Management/User/Users";
import Products from "./Management/Product/Products";
import OrdersAdmin from "./Management/Order/Orders";
import Settings from "./Management/Setting/Settings";
import { useState } from "react";
import { useEffect } from "react";
import { OrderService } from "../../Service/OrderService";
import Brands from './Management/Brand/Brand';
import Categories from './Management/Category/Category';

const Admin = () => {
  const [stats, setStats] = useState({
    totalOrders: 25,
    totalUsers: 30,
    totalBrands: 20,
    totalProducts: 100,
    totalCategories: 10,
    totalRevenue: 10000,
  });

  //   const [TotalOrderSold, setTotalOrderSold] = useState(0);
  //   const [TotalRevenue, setTotalRevenue] = useState(0);

  //   useEffect(() => {
  //     getTotalOrderSoldFE();
  //     getTotalRevenueFE();
  //   },
  // );

  //   const getTotalOrderSoldFE = async () => {
  //     let response = await OrderService.getTotalOrderSold();
  //     if (response && response.data) {
  //       setTotalOrderSold(response.data);
  //     }
  //   };

  //   const getTotalRevenueFE = async () => {
  //     let response = await OrderService.getTotalRevenue();
  //     if (response && response.data) {
  //       setTotalRevenue(response.data);
  //     }
  //   };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users">Users Management</Link>
            </li>
            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            <li><Link to="/admin/brands">Brands</Link></li>
            <li><Link to="/admin/categories">Categories</Link></li>
            <li>
              <Link to="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="admin-main">
        <header className="admin-header">
          {/* <h1>Welcome, Admin</h1>
          <div className="admin-profile">
            <span>Admin Name</span>
            <button>Logout</button>
          </div> */}
          <div className="header-left">
            <Link to="/" className="back-home-btn">
              <i className="fas fa-home"></i> Back to Home
            </Link>
            <h1>Welcome, Admin</h1>
          </div>
          <div className="admin-profile">
            <span>Admin Name</span>
            <button>Logout</button>
          </div>
        </header>

        <div className="admin-content">
          <div className="admin-stats">
            <div className="stat-card">
              <h3>Total Orders</h3>
              <p>{stats.totalOrders}</p>
            </div>
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="stat-card">
              <h3>Total Brands</h3>
              <p>{stats.totalBrands}</p>
            </div>
            <div className="stat-card">
              <h3>Total Products</h3>
              <p>{stats.totalProducts}</p>
            </div>
            <div className="stat-card">
              <h3>Total Categories</h3>
              <p>{stats.totalCategories}</p>
            </div>
            <div className="stat-card">
              <h3>Total Revenue</h3>
              <p>${stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
          <div className="admin-content">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<OrdersAdmin />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
